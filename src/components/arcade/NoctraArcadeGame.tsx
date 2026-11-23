'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Volume2, VolumeX, X, ArrowLeft, ArrowRight, ArrowUp, Zap, RotateCcw } from 'lucide-react';
import { arcadeAudio } from './ArcadeAudio';
import {
  drawPlayer,
  drawDustin,
  drawEleven,
  drawDemogorgon,
  drawDemoDog,
  drawItem,
  drawRiftGate,
  drawProjectile,
  drawJumpscareFace,
} from './ArcadeSprites';

interface NoctraArcadeGameProps {
  onClose: () => void;
}

interface Platform {
  x: number;
  y: number;
  w: number;
  h: number;
  type?: 'ground' | 'wood' | 'vine';
}

interface ItemEntity {
  id: string;
  type: 'waffle' | 'walkie' | 'cassette' | 'dice' | 'flashlight';
  x: number;
  y: number;
  size: number;
  points: number;
  collected: boolean;
}

interface EnemyEntity {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  minX: number;
  maxX: number;
  alive: boolean;
}

interface Projectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  fromPlayer: boolean;
}

export default function NoctraArcadeGame({ onClose }: NoctraArcadeGameProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High score from localStorage
  const [highScore, setHighScore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameState, setGameState] = useState<'playing' | 'jumpscare' | 'gameover' | 'victory'>('playing');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentLevel, setCurrentLevel] = useState<'hawkins' | 'upsidedown'>('hawkins');
  const [activeDialog, setActiveDialog] = useState<{ speaker: string; text: string } | null>(null);

  // Mobile touch buttons state
  const touchKeysRef = useRef<{ left: boolean; right: boolean; jump: boolean; shoot: boolean }>({
    left: false,
    right: false,
    jump: false,
    shoot: false,
  });

  // Load High Score on Mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('noctra_arcade_highscore');
      if (saved) setHighScore(parseInt(saved, 10) || 0);
    } catch {}
  }, []);

  // Update high score helper
  const saveHighScore = useCallback((newScore: number) => {
    setHighScore((prev) => {
      const top = Math.max(prev, newScore);
      try {
        localStorage.setItem('noctra_arcade_highscore', top.toString());
      } catch {}
      return top;
    });
  }, []);

  // Start Background Music on Mount
  useEffect(() => {
    arcadeAudio.startMusic(currentLevel === 'upsidedown' ? 'upsidedown' : 'hawkins');
    return () => {
      arcadeAudio.stopMusic();
    };
  }, [currentLevel]);

  // Main Canvas Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Virtual Game Coordinates: 960 x 540
    const CW = 960;
    const CH = 540;

    let animId: number;
    let animTick = 0;

    // Keys State
    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key.toLowerCase()] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key.toLowerCase() === 'm') {
        const nextMute = !arcadeAudio.getMuted();
        arcadeAudio.setMute(nextMute);
        setIsMuted(nextMute);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Game Entities
    const player = {
      x: 100,
      y: 400,
      w: 26,
      h: 44,
      vx: 0,
      vy: 0,
      facing: 'right' as 'left' | 'right',
      isGrounded: false,
      hp: 3,
      invulnTimer: 0,
      hasSlingshot: true,
      shootCooldown: 0,
    };

    let cameraX = 0;
    let localScore = 0;
    let level: 'hawkins' | 'upsidedown' = 'hawkins';

    // Hawkins Platforms
    const hawkinsPlatforms: Platform[] = [
      { x: 0, y: 460, w: 2400, h: 80, type: 'ground' }, // Main Floor
      // Elevated wood perches & Byers Castle fort
      { x: 200, y: 360, w: 140, h: 16, type: 'wood' },
      { x: 450, y: 320, w: 180, h: 16, type: 'wood' },
      { x: 800, y: 280, w: 200, h: 16, type: 'wood' },
      { x: 1080, y: 360, w: 160, h: 16, type: 'wood' },
      { x: 1300, y: 320, w: 190, h: 16, type: 'wood' },
      { x: 1600, y: 260, w: 220, h: 16, type: 'wood' },
    ];

    // Upside Down Boss Arena Platforms
    const bossPlatforms: Platform[] = [
      { x: 0, y: 460, w: 1000, h: 80, type: 'ground' },
      { x: 120, y: 340, w: 180, h: 16, type: 'vine' },
      { x: 400, y: 260, w: 180, h: 16, type: 'vine' },
      { x: 680, y: 340, w: 180, h: 16, type: 'vine' },
    ];

    // Items
    const items: ItemEntity[] = [
      { id: 'w1', type: 'waffle', x: 250, y: 320, size: 28, points: 100, collected: false },
      { id: 'w2', type: 'walkie', x: 520, y: 280, size: 28, points: 150, collected: false },
      { id: 'w3', type: 'cassette', x: 880, y: 240, size: 28, points: 200, collected: false },
      { id: 'w4', type: 'flashlight', x: 1380, y: 280, size: 28, points: 150, collected: false },
      { id: 'w5', type: 'dice', x: 1700, y: 220, size: 28, points: 250, collected: false },
    ];

    // Enemies in Hawkins
    const hawkinsEnemies: EnemyEntity[] = [
      { id: 'e1', x: 680, y: 420, w: 40, h: 32, vx: 1.5, minX: 620, maxX: 850, alive: true },
      { id: 'e2', x: 1350, y: 420, w: 40, h: 32, vx: 1.8, minX: 1250, maxX: 1550, alive: true },
      { id: 'e3', x: 1800, y: 420, w: 40, h: 2.0, vx: 2.0, minX: 1720, maxX: 2000, alive: true },
    ];

    // Boss Demogorgon
    const boss = {
      x: 700,
      y: 280,
      w: 100,
      h: 180,
      hp: 100,
      maxHp: 100,
      vx: 0,
      state: 'idle' as 'idle' | 'charging' | 'roaring' | 'hit',
      stateTimer: 120,
      mouthOpen: 0.2,
      alive: true,
      hitTimer: 0,
    };

    const projectiles: Projectile[] = [];

    // Jumpscare controller
    let jumpscareStart = 0;
    const jumpscareDuration = 1400; // ms

    // Main Game Loop
    const loop = (timestamp: number) => {
      animTick++;

      // Check current game state
      if (gameState === 'jumpscare') {
        if (!jumpscareStart) jumpscareStart = timestamp;
        const progress = Math.min(1, (timestamp - jumpscareStart) / jumpscareDuration);

        ctx.clearRect(0, 0, CW, CH);
        drawJumpscareFace(ctx, CW, CH, progress);

        if (progress >= 1) {
          setGameState('gameover');
          saveHighScore(localScore);
          arcadeAudio.playGameOver();
        } else {
          animId = requestAnimationFrame(loop);
        }
        return;
      }

      if (gameState === 'gameover' || gameState === 'victory') {
        // Stop updating physics
        return;
      }

      // --- 1. Player Input & Physics ---
      const isLeft = keys['arrowleft'] || keys['a'] || touchKeysRef.current.left;
      const isRight = keys['arrowright'] || keys['d'] || touchKeysRef.current.right;
      const isJump = keys['arrowup'] || keys['w'] || keys[' '] || touchKeysRef.current.jump;
      const isShoot = keys['f'] || keys['e'] || keys['enter'] || touchKeysRef.current.shoot;

      // Horizontal movement
      const moveSpeed = 4.8;
      if (isLeft) {
        player.vx = -moveSpeed;
        player.facing = 'left';
      } else if (isRight) {
        player.vx = moveSpeed;
        player.facing = 'right';
      } else {
        player.vx *= 0.7; // friction
      }

      // Jump
      if (isJump && player.isGrounded) {
        player.vy = -12.5;
        player.isGrounded = false;
        arcadeAudio.playJump();
      }

      // Gravity
      player.vy += 0.55;
      if (player.vy > 12) player.vy = 12;

      // Update position
      player.x += player.vx;
      player.y += player.vy;

      // Boundaries & Camera
      if (level === 'hawkins') {
        if (player.x < 20) player.x = 20;
        if (player.x > 2350) player.x = 2350;
        // Smooth camera follow
        cameraX = Math.max(0, Math.min(2400 - CW, player.x - CW / 3));
      } else {
        cameraX = 0;
        if (player.x < 30) player.x = 30;
        if (player.x > CW - 50) player.x = CW - 50;
      }

      // Slingshot Shooting
      if (player.shootCooldown > 0) player.shootCooldown--;
      if (isShoot && player.shootCooldown === 0) {
        player.shootCooldown = 18;
        const pSpeed = player.facing === 'right' ? 9 : -9;
        projectiles.push({
          x: player.x + (player.facing === 'right' ? player.w + 4 : -4),
          y: player.y + player.h * 0.45,
          vx: pSpeed,
          vy: -0.5,
          fromPlayer: true,
        });
        arcadeAudio.playShoot();
      }

      // Update Projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const p = projectiles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Level 1 Hawkins enemy hit
        if (level === 'hawkins') {
          hawkinsEnemies.forEach((e) => {
            if (e.alive && Math.abs(p.x - (e.x + e.w / 2)) < 24 && Math.abs(p.y - (e.y + e.h / 2)) < 24) {
              e.alive = false;
              projectiles.splice(i, 1);
              localScore += 150;
              setScore(localScore);
              arcadeAudio.playHit();
            }
          });
        }

        // Level 2 Demogorgon boss hit
        if (level === 'upsidedown' && boss.alive) {
          if (p.x > boss.x && p.x < boss.x + boss.w && p.y > boss.y && p.y < boss.y + boss.h) {
            boss.hp -= 7;
            boss.hitTimer = 8;
            projectiles.splice(i, 1);
            localScore += 100;
            setScore(localScore);
            arcadeAudio.playHit();

            if (boss.hp <= 0) {
              boss.alive = false;
              localScore += 1000;
              setScore(localScore);
              saveHighScore(localScore);
              arcadeAudio.playVictory();
              setGameState('victory');
            }
          }
        }

        // Out of bounds
        if (p.x < cameraX - 50 || p.x > cameraX + CW + 50) {
          projectiles.splice(i, 1);
        }
      }

      // Platform Collisions
      const currentPlatforms = level === 'hawkins' ? hawkinsPlatforms : bossPlatforms;
      player.isGrounded = false;

      currentPlatforms.forEach((plat) => {
        if (
          player.x + player.w > plat.x &&
          player.x < plat.x + plat.w &&
          player.y + player.h >= plat.y &&
          player.y + player.h <= plat.y + plat.h + 16 &&
          player.vy >= 0
        ) {
          player.y = plat.y - player.h;
          player.vy = 0;
          player.isGrounded = true;
        }
      });

      // Item Collections (Hawkins)
      if (level === 'hawkins') {
        items.forEach((item) => {
          if (!item.collected) {
            const dist = Math.hypot(player.x + player.w / 2 - (item.x + item.size / 2), player.y + player.h / 2 - (item.y + item.size / 2));
            if (dist < 32) {
              item.collected = true;
              localScore += item.points;
              setScore(localScore);
              arcadeAudio.playItem();
            }
          }
        });
      }

      // NPC Interactions (Hawkins)
      if (level === 'hawkins') {
        // Dustin at X=380
        if (Math.abs(player.x - 380) < 60) {
          setActiveDialog({
            speaker: 'DUSTIN (HAWKINS RADIO)',
            text: 'Dika! Demogorgon terdeteksi di Upside Down gate di ujung hutan! Ambil ketapel ini dan kalahkan dia!',
          });
        }
        // Eleven at X=1150
        else if (Math.abs(player.x - 1150) < 60) {
          setActiveDialog({
            speaker: 'ELEVEN',
            text: 'Teman tidak pernah berbohong... Waffles ini untuk energimu! Hati-hati dengan sulur merah di depan!',
          });
          if (player.hp < 3) player.hp = 3;
        } else {
          setActiveDialog(null);
        }

        // Enter Rift Gate at X=2100
        if (player.x > 2080 && player.x < 2250) {
          arcadeAudio.playGateWarp();
          level = 'upsidedown';
          setCurrentLevel('upsidedown');
          player.x = 100;
          player.y = 380;
          player.vx = 0;
          player.vy = 0;
        }
      }

      // Enemy Interactions (Hawkins Demodogs)
      if (player.invulnTimer > 0) player.invulnTimer--;

      if (level === 'hawkins') {
        hawkinsEnemies.forEach((e) => {
          if (e.alive) {
            e.x += e.vx;
            if (e.x < e.minX || e.x > e.maxX) e.vx *= -1;

            // Player touches enemy
            if (
              player.x + player.w > e.x &&
              player.x < e.x + e.w &&
              player.y + player.h > e.y &&
              player.y < e.y + e.h
            ) {
              // Jump on head kill
              if (player.vy > 0 && player.y + player.h - e.y < 20) {
                e.alive = false;
                player.vy = -8;
                localScore += 150;
                setScore(localScore);
                arcadeAudio.playHit();
              } else if (player.invulnTimer === 0) {
                player.hp -= 1;
                player.invulnTimer = 80;
                arcadeAudio.playHit();
                if (player.hp <= 0) {
                  // Trigger DEATH JUMPSCARE!
                  arcadeAudio.playJumpscare();
                  setGameState('jumpscare');
                }
              }
            }
          }
        });
      }

      // Boss Logic (Upside Down)
      if (level === 'upsidedown' && boss.alive) {
        boss.stateTimer--;
        if (boss.hitTimer > 0) boss.hitTimer--;

        // State Machine: Idle -> Roar -> Charge
        if (boss.stateTimer <= 0) {
          if (boss.state === 'idle') {
            boss.state = 'roaring';
            boss.stateTimer = 90;
            boss.mouthOpen = 1.0;
            arcadeAudio.playBossRoar();
          } else if (boss.state === 'roaring') {
            boss.state = 'charging';
            boss.stateTimer = 80;
            boss.mouthOpen = 0.8;
            boss.vx = -4.5;
          } else {
            boss.state = 'idle';
            boss.stateTimer = 110;
            boss.mouthOpen = 0.2;
            boss.vx = 0;
            boss.x = 720;
          }
        }

        boss.x += boss.vx;
        if (boss.x < 150) boss.vx = 4; // rebound

        // Player touches Demogorgon
        if (
          player.x + player.w > boss.x + 20 &&
          player.x < boss.x + boss.w - 20 &&
          player.y + player.h > boss.y + 20 &&
          player.y < boss.y + boss.h &&
          player.invulnTimer === 0
        ) {
          player.hp -= 1;
          player.invulnTimer = 90;
          arcadeAudio.playHit();
          if (player.hp <= 0) {
            // DEATH JUMPSCARE!
            arcadeAudio.playJumpscare();
            setGameState('jumpscare');
          }
        }
      }

      // --- 2. RENDER CANVAS SCENE ---
      ctx.clearRect(0, 0, CW, CH);

      // Level 1: Hawkins Forest
      if (level === 'hawkins') {
        // Night Sky with Stars & Silhouettes
        const skyGrad = ctx.createLinearGradient(0, 0, 0, CH);
        skyGrad.addColorStop(0, '#090a0f');
        skyGrad.addColorStop(0.6, '#111827');
        skyGrad.addColorStop(1, '#1f2937');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, CW, CH);

        // Distant Trees Parallax
        ctx.fillStyle = '#0f172a';
        for (let i = 0; i < 20; i++) {
          const tx = i * 160 - (cameraX * 0.3) % 160;
          ctx.beginPath();
          ctx.moveTo(tx, 460);
          ctx.lineTo(tx + 60, 220);
          ctx.lineTo(tx + 120, 460);
          ctx.fill();
        }

        // Midground Hawkins Road & Pine silhouettes
        ctx.fillStyle = '#1e293b';
        for (let i = 0; i < 25; i++) {
          const tx = i * 120 - (cameraX * 0.6) % 120;
          ctx.beginPath();
          ctx.moveTo(tx, 460);
          ctx.lineTo(tx + 45, 280);
          ctx.lineTo(tx + 90, 460);
          ctx.fill();
        }

        // Apply Camera Translation
        ctx.save();
        ctx.translate(-cameraX, 0);

        // Platforms & Road
        hawkinsPlatforms.forEach((p) => {
          if (p.type === 'ground') {
            ctx.fillStyle = '#111827';
            ctx.fillRect(p.x, p.y, p.w, p.h);
            // Grass / dirt border
            ctx.fillStyle = '#1e3a1e';
            ctx.fillRect(p.x, p.y, p.w, 8);
          } else {
            // Wooden Fort Platforms
            ctx.fillStyle = '#78350f';
            ctx.fillRect(p.x, p.y, p.w, p.h);
            ctx.fillStyle = '#92400e';
            ctx.fillRect(p.x, p.y, p.w, 4);
          }
        });

        // NPCs
        drawDustin(ctx, 380, 416, 26, 44, animTick);
        drawEleven(ctx, 1150, 416, 26, 44, animTick);

        // Collectibles
        items.forEach((it) => {
          if (!it.collected) {
            drawItem(ctx, it.type, it.x, it.y, it.size, animTick);
          }
        });

        // Enemies
        hawkinsEnemies.forEach((e) => {
          if (e.alive) {
            drawDemoDog(ctx, e.x, e.y, e.w, e.h, e.vx > 0 ? 'right' : 'left', animTick);
          }
        });

        // Dimensional Rift Gate at end of forest
        drawRiftGate(ctx, 2100, 320, 80, 140, animTick);

        // Player
        drawPlayer(
          ctx,
          player.x,
          player.y,
          player.w,
          player.h,
          player.facing,
          Math.abs(player.vx) > 0.5,
          !player.isGrounded,
          animTick,
          player.invulnTimer > 0
        );

        // Projectiles
        projectiles.forEach((p) => {
          drawProjectile(ctx, p.x, p.y, 4, animTick);
        });

        ctx.restore();
      }

      // Level 2: The Upside Down Boss Arena
      else {
        // Red Blood Storm Atmosphere
        const skyGrad = ctx.createLinearGradient(0, 0, 0, CH);
        skyGrad.addColorStop(0, '#2b0a0a');
        skyGrad.addColorStop(0.7, '#1a0505');
        skyGrad.addColorStop(1, '#0d0202');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, CW, CH);

        // Floating Ash & Spores
        ctx.fillStyle = '#fca5a5';
        for (let s = 0; s < 30; s++) {
          const sx = (s * 47 + animTick * 0.5) % CW;
          const sy = (CH - ((s * 31 + animTick * 0.8) % CH));
          ctx.beginPath();
          ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Twisted Vine Platforms
        bossPlatforms.forEach((p) => {
          ctx.fillStyle = '#1c1917';
          ctx.fillRect(p.x, p.y, p.w, p.h);
          ctx.fillStyle = '#7f1d1d';
          ctx.fillRect(p.x, p.y, p.w, 4);
        });

        // Boss Demogorgon
        if (boss.alive) {
          drawDemogorgon(
            ctx,
            boss.x,
            boss.y,
            boss.w,
            boss.h,
            boss.hitTimer > 0 ? 'hit' : boss.state,
            animTick,
            boss.mouthOpen
          );

          // Boss Health Bar at Top
          const barW = 320;
          const barX = (CW - barW) / 2;
          const barY = 24;
          ctx.fillStyle = '#18181b';
          ctx.fillRect(barX - 2, barY - 2, barW + 4, 18);
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(barX, barY, (boss.hp / boss.maxHp) * barW, 14);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.strokeRect(barX, barY, barW, 14);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`DEMOGORGON [HP: ${boss.hp}%]`, CW / 2, barY + 11);
        }

        // Player
        drawPlayer(
          ctx,
          player.x,
          player.y,
          player.w,
          player.h,
          player.facing,
          Math.abs(player.vx) > 0.5,
          !player.isGrounded,
          animTick,
          player.invulnTimer > 0
        );

        // Projectiles
        projectiles.forEach((p) => {
          drawProjectile(ctx, p.x, p.y, 4, animTick);
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState, onClose, saveHighScore]);

  const toggleMute = () => {
    const nextMute = !arcadeAudio.getMuted();
    arcadeAudio.setMute(nextMute);
    setIsMuted(nextMute);
  };

  const restartGame = () => {
    setGameState('playing');
    setScore(0);
    setCurrentLevel('hawkins');
    setActiveDialog(null);
    arcadeAudio.startMusic('hawkins');
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center select-none overflow-hidden touch-none font-mono">
      {/* Top Header HUD Bar */}
      <div className="w-full max-w-5xl px-4 py-2 flex items-center justify-between text-xs sm:text-sm text-white border-b border-red-900/40 bg-zinc-950/80 backdrop-blur-xs">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-1">
            <span className="text-zinc-500">AREA:</span>
            <span className="text-red-400 font-bold uppercase">
              {currentLevel === 'hawkins' ? 'HAWKINS FOREST' : 'THE UPSIDE DOWN'}
            </span>
          </div>
          <div>
            <span className="text-zinc-500">SKOR: </span>
            <span className="text-yellow-400 font-bold">{score}</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-zinc-500">REKOR: </span>
            <span className="text-emerald-400 font-bold">{highScore}</span>
          </div>
        </div>

        {/* Audio Mute & Close Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Tutup Game"
            className="p-1.5 rounded hover:bg-red-600/20 text-zinc-300 hover:text-red-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Viewport Container */}
      <div className="relative w-full max-w-5xl aspect-[16/9] bg-black border border-red-950 shadow-[0_0_50px_rgba(220,38,38,0.25)] flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={960}
          height={540}
          className="w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />

        {/* Harvest Moon Dialogue Popup */}
        {activeDialog && gameState === 'playing' && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-12 sm:right-12 p-3 sm:p-4 rounded border-2 border-red-600 bg-black/90 text-white shadow-lg flex items-center gap-4 animate-fade-in">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-red-950/80 border border-red-500 flex items-center justify-center font-bold text-red-400 text-lg sm:text-xl">
              ★
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider">
                {activeDialog.speaker}
              </p>
              <p className="text-xs sm:text-sm text-zinc-200">{activeDialog.text}</p>
            </div>
          </div>
        )}

        {/* Victory Screen */}
        {gameState === 'victory' && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="border border-red-500/60 bg-red-950/40 px-4 py-1 rounded text-xs text-red-400 font-bold uppercase tracking-widest animate-pulse">
              HAWKINS SAVED!
            </div>
            <h2
              className="text-3xl sm:text-5xl font-serif font-black text-transparent uppercase drop-shadow-[0_0_20px_#ef4444]"
              style={{
                WebkitTextStroke: '1.5px #ef4444',
                textShadow: '0 0 20px #dc2626',
              }}
            >
              DIMENSION RIFT SEALED
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-md">
              Demogorgon berhasil dikalahkan! Anda menyelamatkan Hawkins dan studio NOCTRA!
            </p>
            <div className="text-sm space-y-1 py-2">
              <p className="text-zinc-400">
                Skor Akhir: <span className="text-yellow-400 font-bold">{score}</span>
              </p>
              <p className="text-zinc-400">
                Rekor Tertinggi: <span className="text-emerald-400 font-bold">{highScore}</span>
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              <button
                onClick={restartGame}
                className="px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105"
              >
                <RotateCcw className="w-4 h-4" /> Main Lagi
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Kembali ke Portfolio
              </button>
            </div>
          </div>
        )}

        {/* Game Over Screen (Post-Jumpscare) */}
        {gameState === 'gameover' && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="border border-red-600 bg-red-950/50 px-4 py-1 rounded text-xs text-red-400 font-bold uppercase tracking-widest animate-pulse">
              GAME OVER
            </div>
            <h2
              className="text-3xl sm:text-5xl font-serif font-black text-transparent uppercase drop-shadow-[0_0_20px_#ef4444]"
              style={{
                WebkitTextStroke: '1.5px #ef4444',
                textShadow: '0 0 20px #dc2626',
              }}
            >
              YOU DIDN&apos;T SURVIVE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
              Demogorgon menyeretmu ke kegelapan Upside Down...
            </p>
            <div className="text-sm space-y-1 py-2">
              <p className="text-zinc-400">
                Skor: <span className="text-yellow-400 font-bold">{score}</span>
              </p>
              <p className="text-zinc-400">
                Skor Terbaik: <span className="text-emerald-400 font-bold">{highScore}</span>
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              <button
                onClick={restartGame}
                className="px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105"
              >
                <RotateCcw className="w-4 h-4" /> Main Lagi
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Tutup (Esc)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* On-Screen Mobile Touch Controls (Always available on touch devices or small screens) */}
      <div className="w-full max-w-5xl px-4 py-3 flex items-center justify-between sm:hidden select-none">
        {/* D-Pad Left / Right */}
        <div className="flex items-center gap-2">
          <button
            onTouchStart={() => (touchKeysRef.current.left = true)}
            onTouchEnd={() => (touchKeysRef.current.left = false)}
            onMouseDown={() => (touchKeysRef.current.left = true)}
            onMouseUp={() => (touchKeysRef.current.left = false)}
            aria-label="Kiri"
            className="w-13 h-13 rounded-full bg-zinc-800 border border-zinc-700 active:bg-red-600 flex items-center justify-center text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onTouchStart={() => (touchKeysRef.current.right = true)}
            onTouchEnd={() => (touchKeysRef.current.right = false)}
            onMouseDown={() => (touchKeysRef.current.right = true)}
            onMouseUp={() => (touchKeysRef.current.right = false)}
            aria-label="Kanan"
            className="w-13 h-13 rounded-full bg-zinc-800 border border-zinc-700 active:bg-red-600 flex items-center justify-center text-white"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Action Buttons: Jump & Shoot */}
        <div className="flex items-center gap-2">
          <button
            onTouchStart={() => (touchKeysRef.current.shoot = true)}
            onTouchEnd={() => (touchKeysRef.current.shoot = false)}
            onMouseDown={() => (touchKeysRef.current.shoot = true)}
            onMouseUp={() => (touchKeysRef.current.shoot = false)}
            aria-label="Tembak / Aksi"
            className="w-13 h-13 rounded-full bg-red-950 border border-red-600 active:bg-red-600 flex items-center justify-center text-white font-bold"
          >
            <Zap className="w-5 h-5 text-red-400" />
          </button>
          <button
            onTouchStart={() => (touchKeysRef.current.jump = true)}
            onTouchEnd={() => (touchKeysRef.current.jump = false)}
            onMouseDown={() => (touchKeysRef.current.jump = true)}
            onMouseUp={() => (touchKeysRef.current.jump = false)}
            aria-label="Lompat"
            className="w-13 h-13 rounded-full bg-zinc-800 border border-zinc-700 active:bg-red-600 flex items-center justify-center text-white"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Controls Hint Footer */}
      <div className="hidden sm:flex items-center gap-6 text-[11px] text-zinc-500 pt-2">
        <span>KONTROL: [A/D atau Panah] Gerak</span>
        <span>[Spasi / W] Lompat</span>
        <span>[E / F] Tembak Ketapel</span>
        <span>[M] Mute</span>
        <span>[ESC] Tutup</span>
      </div>
    </div>
  );
}
