/**
 * ArcadeSprites: Procedural 16-bit pixel art rendering engine.
 * Renders all characters, boss, enemies, and items using native HTML5 Canvas
 * without relying on external copyrighted images or still shots.
 */

// Draw an authentic 16-bit pixelated character (Player: Andika)
export function drawPlayer(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  facing: 'left' | 'right',
  isMoving: boolean,
  isJumping: boolean,
  animTick: number,
  isInvulnerable: boolean
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  if (facing === 'left') ctx.scale(-1, 1);

  if (isInvulnerable && Math.floor(animTick / 4) % 2 === 0) {
    ctx.globalAlpha = 0.4;
  }

  const px = w / 20; // unit pixel scale
  const legOffset = isJumping ? 3 * px : isMoving ? Math.sin(animTick * 0.3) * 3 * px : 0;

  // Head & Hair
  ctx.fillStyle = '#1c1917'; // Dark hair
  ctx.fillRect(-6 * px, -10 * px, 12 * px, 4 * px);
  ctx.fillRect(-7 * px, -8 * px, 14 * px, 4 * px);

  // Face skin
  ctx.fillStyle = '#fcd34d'; // Retro peach/golden
  ctx.fillRect(-5 * px, -6 * px, 10 * px, 6 * px);

  // Eyes & Headphones
  ctx.fillStyle = '#0f172a'; // Eyes
  ctx.fillRect(1 * px, -4 * px, 2 * px, 2 * px);
  ctx.fillRect(5 * px, -4 * px, 2 * px, 2 * px);

  // Retro Studio Headphones (Yellow / Black headband)
  ctx.fillStyle = '#eab308';
  ctx.fillRect(-7 * px, -5 * px, 3 * px, 5 * px);
  ctx.fillRect(6 * px, -5 * px, 3 * px, 5 * px);
  ctx.fillStyle = '#374151';
  ctx.fillRect(-6 * px, -11 * px, 12 * px, 2 * px);

  // Jacket (80s Denim / Noctra Black & Red Jacket)
  ctx.fillStyle = '#18181b'; // Dark jacket body
  ctx.fillRect(-6 * px, 0, 12 * px, 8 * px);
  ctx.fillStyle = '#dc2626'; // Red collar & inner tee
  ctx.fillRect(-2 * px, 0, 4 * px, 6 * px);

  // Arms / Hands
  ctx.fillStyle = '#18181b';
  ctx.fillRect(-8 * px, 1 * px, 3 * px, 6 * px);
  ctx.fillRect(5 * px, 1 * px, 3 * px, 6 * px);
  ctx.fillStyle = '#fcd34d'; // Hands
  ctx.fillRect(6 * px, 5 * px, 2 * px, 2 * px);

  // Pants (Blue jeans)
  ctx.fillStyle = '#1e3a8a';
  ctx.fillRect(-5 * px, 8 * px, 4 * px, 5 * px - legOffset);
  ctx.fillRect(1 * px, 8 * px, 4 * px, 5 * px + legOffset);

  // Sneakers (Classic Red & White kicks)
  ctx.fillStyle = '#dc2626';
  ctx.fillRect(-6 * px, 13 * px - legOffset, 5 * px, 3 * px);
  ctx.fillRect(1 * px, 13 * px + legOffset, 5 * px, 3 * px);
  ctx.fillStyle = '#ffffff'; // White soles
  ctx.fillRect(-6 * px, 15 * px - legOffset, 5 * px, 1 * px);
  ctx.fillRect(1 * px, 15 * px + legOffset, 5 * px, 1 * px);

  ctx.restore();
}

// Dustin NPC (Trucker Cap, Curly Hair, Walkie Talkie)
export function drawDustin(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  animTick: number
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  const px = w / 20;
  const bob = Math.sin(animTick * 0.08) * 1.5 * px;

  // Curly Hair
  ctx.fillStyle = '#78350f';
  ctx.fillRect(-7 * px, -9 * px + bob, 14 * px, 6 * px);

  // Iconic Retro Trucker Cap (Red, White, Blue)
  ctx.fillStyle = '#dc2626'; // Red back
  ctx.fillRect(-6 * px, -11 * px + bob, 12 * px, 3 * px);
  ctx.fillStyle = '#ffffff'; // White front crown
  ctx.fillRect(-1 * px, -11 * px + bob, 7 * px, 3 * px);
  ctx.fillStyle = '#2563eb'; // Blue visor
  ctx.fillRect(2 * px, -8 * px + bob, 6 * px, 2 * px);

  // Face
  ctx.fillStyle = '#fde68a';
  ctx.fillRect(-5 * px, -6 * px + bob, 10 * px, 6 * px);
  ctx.fillStyle = '#000000'; // Eyes & smile
  ctx.fillRect(1 * px, -4 * px + bob, 2 * px, 2 * px);
  ctx.fillRect(5 * px, -4 * px + bob, 2 * px, 2 * px);
  ctx.fillRect(2 * px, -1 * px + bob, 4 * px, 1 * px);

  // Yellow & Green Outdoor Jacket
  ctx.fillStyle = '#eab308'; // Bright yellow
  ctx.fillRect(-6 * px, 0 + bob, 12 * px, 8 * px);
  ctx.fillStyle = '#15803d'; // Green shirt
  ctx.fillRect(-2 * px, 0 + bob, 4 * px, 5 * px);

  // Walkie talkie in hand
  ctx.fillStyle = '#374151';
  ctx.fillRect(6 * px, 2 * px + bob, 3 * px, 5 * px);
  ctx.fillStyle = '#9ca3af'; // Antenna
  ctx.fillRect(7 * px, -3 * px + bob, 1 * px, 5 * px);

  // Pants & shoes
  ctx.fillStyle = '#334155';
  ctx.fillRect(-5 * px, 8 * px, 4 * px, 5 * px);
  ctx.fillRect(1 * px, 8 * px, 4 * px, 5 * px);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(-5 * px, 13 * px, 4 * px, 2 * px);
  ctx.fillRect(1 * px, 13 * px, 4 * px, 2 * px);

  ctx.restore();
}

// Eleven NPC (Pink dress, Blue jacket, Waffle plate)
export function drawEleven(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  animTick: number
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  const px = w / 20;
  const bob = Math.sin(animTick * 0.08 + 1) * 1.5 * px;

  // Short cropped brown hair
  ctx.fillStyle = '#573414';
  ctx.fillRect(-6 * px, -10 * px + bob, 12 * px, 4 * px);

  // Face
  ctx.fillStyle = '#fde68a';
  ctx.fillRect(-5 * px, -6 * px + bob, 10 * px, 6 * px);
  ctx.fillStyle = '#000000';
  ctx.fillRect(1 * px, -4 * px + bob, 2 * px, 2 * px);
  ctx.fillRect(5 * px, -4 * px + bob, 2 * px, 2 * px);

  // Oversized Blue Windbreaker over Pink Smock
  ctx.fillStyle = '#1d4ed8'; // Blue jacket
  ctx.fillRect(-7 * px, 0 + bob, 14 * px, 8 * px);
  ctx.fillStyle = '#f472b6'; // Pink dress collar
  ctx.fillRect(-3 * px, 0 + bob, 6 * px, 7 * px);

  // Tube socks and sneakers
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(-4 * px, 8 * px, 3 * px, 4 * px);
  ctx.fillRect(1 * px, 8 * px, 3 * px, 4 * px);
  // Stripes on socks
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(-4 * px, 9 * px, 3 * px, 1 * px);
  ctx.fillRect(1 * px, 9 * px, 3 * px, 1 * px);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(-5 * px, 12 * px, 4 * px, 2 * px);
  ctx.fillRect(1 * px, 12 * px, 4 * px, 2 * px);

  ctx.restore();
}

// The Boss: DEMOGORGON
export function drawDemogorgon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  state: 'idle' | 'charging' | 'roaring' | 'hit',
  animTick: number,
  mouthOpen: number // 0 (closed) to 1 (fully flared open)
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  const px = w / 32;

  // Stalking breathing offset
  const breath = Math.sin(animTick * 0.1) * 2 * px;
  const isHit = state === 'hit';

  if (isHit) {
    ctx.filter = 'brightness(2.5) contrast(1.5)';
  }

  // 1. Long Sinewy Torso & Limbs (Grey-violet skin with fleshy veins)
  ctx.fillStyle = '#374151'; // Dark ash grey flesh
  ctx.fillRect(-8 * px, -8 * px + breath, 16 * px, 18 * px);

  // Ribcage / Chest musculature
  ctx.fillStyle = '#4b5563';
  ctx.fillRect(-6 * px, -6 * px + breath, 12 * px, 4 * px);
  ctx.fillRect(-5 * px, -1 * px + breath, 10 * px, 3 * px);

  // Elongated Arms & Wicked Claws
  ctx.fillStyle = '#374151';
  const armSway = state === 'charging' ? 8 * px : Math.sin(animTick * 0.15) * 4 * px;
  // Left arm
  ctx.fillRect(-14 * px, -6 * px + breath, 5 * px, 16 * px);
  ctx.fillRect(-17 * px + armSway, 8 * px + breath, 5 * px, 8 * px);
  // Right arm (reaching toward player)
  ctx.fillRect(9 * px, -6 * px + breath, 5 * px, 16 * px);
  ctx.fillRect(12 * px - armSway, 8 * px + breath, 6 * px, 8 * px);

  // Sharp Claws (Bone white)
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(-18 * px + armSway, 16 * px + breath, 2 * px, 4 * px);
  ctx.fillRect(-15 * px + armSway, 16 * px + breath, 2 * px, 4 * px);
  ctx.fillRect(14 * px - armSway, 16 * px + breath, 2 * px, 4 * px);
  ctx.fillRect(17 * px - armSway, 16 * px + breath, 2 * px, 4 * px);

  // Digitigrade Legs
  ctx.fillStyle = '#1f2937';
  ctx.fillRect(-7 * px, 10 * px, 5 * px, 10 * px);
  ctx.fillRect(2 * px, 10 * px, 5 * px, 10 * px);
  ctx.fillRect(-9 * px, 20 * px, 6 * px, 6 * px);
  ctx.fillRect(3 * px, 20 * px, 6 * px, 6 * px);

  // 2. Head & Iconic 5-Petal Mouth Mechanism
  const headY = -16 * px + breath;
  const mouthSpread = Math.max(0.2, mouthOpen) * 12 * px;

  // Central dark gullet abyss
  ctx.fillStyle = '#450a0a'; // Deep blood crimson
  ctx.beginPath();
  ctx.arc(0, headY, 6 * px + mouthSpread * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Red glow inside throat
  const throatGlow = ctx.createRadialGradient(0, headY, 1, 0, headY, 8 * px + mouthSpread * 0.5);
  throatGlow.addColorStop(0, '#ef4444');
  throatGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = throatGlow;
  ctx.beginPath();
  ctx.arc(0, headY, 8 * px + mouthSpread * 0.5, 0, Math.PI * 2);
  ctx.fill();

  // The 5 Flared Petals (Fleshy flaps covered with razor needle teeth)
  // Top, Top-Right, Bottom-Right, Bottom-Left, Top-Left
  const petalAngles = [-Math.PI / 2, -Math.PI / 6, Math.PI / 4, (3 * Math.PI) / 4, (-5 * Math.PI) / 6];

  petalAngles.forEach((angle) => {
    ctx.save();
    ctx.translate(0, headY);
    ctx.rotate(angle);

    const petalLength = 10 * px + mouthSpread;
    const petalWidth = 6 * px;

    // Petal Outer Flesh
    ctx.fillStyle = '#374151';
    ctx.beginPath();
    ctx.moveTo(0, -petalWidth / 2);
    ctx.lineTo(petalLength, 0);
    ctx.lineTo(0, petalWidth / 2);
    ctx.closePath();
    ctx.fill();

    // Petal Inner Red Flesh
    ctx.fillStyle = '#991b1b';
    ctx.beginPath();
    ctx.moveTo(1 * px, -petalWidth * 0.35);
    ctx.lineTo(petalLength * 0.85, 0);
    ctx.lineTo(1 * px, petalWidth * 0.35);
    ctx.closePath();
    ctx.fill();

    // Razor Sharp Needle Teeth (White dots/lines)
    ctx.fillStyle = '#f9fafb';
    for (let t = 2 * px; t < petalLength * 0.75; t += 2.5 * px) {
      ctx.fillRect(t, -petalWidth * 0.28, 1.5 * px, 1.5 * px);
      ctx.fillRect(t, petalWidth * 0.15, 1.5 * px, 1.5 * px);
    }

    ctx.restore();
  });

  ctx.restore();
}

// Creeping Demo-Dog Enemy
export function drawDemoDog(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  facing: 'left' | 'right',
  animTick: number
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  if (facing === 'left') ctx.scale(-1, 1);
  const px = w / 24;

  const legMove = Math.sin(animTick * 0.25) * 3 * px;

  // Body
  ctx.fillStyle = '#374151';
  ctx.fillRect(-10 * px, -4 * px, 18 * px, 8 * px);

  // 4 Legs
  ctx.fillRect(-8 * px, 4 * px, 3 * px, 6 * px + legMove);
  ctx.fillRect(-3 * px, 4 * px, 3 * px, 6 * px - legMove);
  ctx.fillRect(2 * px, 4 * px, 3 * px, 6 * px + legMove);
  ctx.fillRect(6 * px, 4 * px, 3 * px, 6 * px - legMove);

  // Head with small blooming flower mouth
  ctx.fillStyle = '#991b1b';
  ctx.fillRect(8 * px, -6 * px, 6 * px, 7 * px);
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(10 * px, -4 * px, 4 * px, 4 * px);
  // Sharp white teeth
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(9 * px, -5 * px, 1 * px, 1 * px);
  ctx.fillRect(13 * px, -5 * px, 1 * px, 1 * px);
  ctx.fillRect(11 * px, -1 * px, 1 * px, 1 * px);

  ctx.restore();
}

// Collectible Items
export function drawItem(
  ctx: CanvasRenderingContext2D,
  type: 'waffle' | 'walkie' | 'cassette' | 'dice' | 'flashlight',
  x: number,
  y: number,
  size: number,
  animTick: number
) {
  ctx.save();
  const floatY = Math.sin(animTick * 0.1) * 4;
  ctx.translate(x + size / 2, y + size / 2 + floatY);
  const px = size / 16;

  // Item Glow aura
  const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, size * 0.7);
  glow.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.7, 0, Math.PI * 2);
  ctx.fill();

  switch (type) {
    case 'waffle': {
      // Golden Eggo Waffle
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(0, 0, 7 * px, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 1.5 * px;
      // Waffle grid
      ctx.strokeRect(-4 * px, -4 * px, 8 * px, 8 * px);
      ctx.beginPath();
      ctx.moveTo(-4 * px, 0); ctx.lineTo(4 * px, 0);
      ctx.moveTo(0, -4 * px); ctx.lineTo(0, 4 * px);
      ctx.stroke();
      break;
    }

    case 'walkie': {
      // 80s Walkie Talkie
      ctx.fillStyle = '#374151';
      ctx.fillRect(-4 * px, -5 * px, 8 * px, 11 * px);
      ctx.fillStyle = '#9ca3af'; // Antenna
      ctx.fillRect(2 * px, -11 * px, 1.5 * px, 6 * px);
      ctx.fillStyle = '#1f2937'; // Speaker grille
      ctx.fillRect(-2 * px, 0, 4 * px, 4 * px);
      ctx.fillStyle = '#ef4444'; // Red indicator LED
      ctx.fillRect(-2 * px, -4 * px, 2 * px, 2 * px);
      break;
    }

    case 'cassette': {
      // 80s Cassette Tape
      ctx.fillStyle = '#18181b';
      ctx.fillRect(-7 * px, -4 * px, 14 * px, 9 * px);
      ctx.fillStyle = '#dc2626'; // Red tape label
      ctx.fillRect(-5 * px, -3 * px, 10 * px, 5 * px);
      ctx.fillStyle = '#ffffff'; // Dual spools
      ctx.beginPath();
      ctx.arc(-2.5 * px, -0.5 * px, 1.5 * px, 0, Math.PI * 2);
      ctx.arc(2.5 * px, -0.5 * px, 1.5 * px, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'dice': {
      // D20 Red Polyhedral Die
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.moveTo(0, -7 * px);
      ctx.lineTo(6 * px, -3 * px);
      ctx.lineTo(6 * px, 4 * px);
      ctx.lineTo(0, 7 * px);
      ctx.lineTo(-6 * px, 4 * px);
      ctx.lineTo(-6 * px, -3 * px);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#fca5a5';
      ctx.lineWidth = 1 * px;
      ctx.stroke();
      // "20" number in center
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.round(6 * px)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('20', 0, 0);
      break;
    }

    case 'flashlight': {
      // Heavy duty flashlight
      ctx.fillStyle = '#9ca3af';
      ctx.fillRect(-6 * px, -2 * px, 8 * px, 4 * px);
      ctx.fillStyle = '#eab308'; // Reflector head
      ctx.beginPath();
      ctx.moveTo(2 * px, -4 * px);
      ctx.lineTo(6 * px, -6 * px);
      ctx.lineTo(6 * px, 6 * px);
      ctx.lineTo(2 * px, 4 * px);
      ctx.closePath();
      ctx.fill();
      break;
    }
  }

  ctx.restore();
}

// The Dimensional Rift Gate
export function drawRiftGate(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  animTick: number
) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);

  const pulse = Math.sin(animTick * 0.1) * 8;
  const gradient = ctx.createRadialGradient(0, 0, 5, 0, 0, w / 2 + pulse);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(0.3, '#ef4444');
  gradient.addColorStop(0.7, '#7f1d1d');
  gradient.addColorStop(1, 'transparent');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  // Creepy jagged tear shape
  ctx.moveTo(0, -h / 2);
  ctx.bezierCurveTo(w * 0.4 + pulse, -h * 0.25, w * 0.5 - pulse, h * 0.25, 0, h / 2);
  ctx.bezierCurveTo(-w * 0.5 + pulse, h * 0.25, -w * 0.4 - pulse, -h * 0.25, 0, -h / 2);
  ctx.fill();

  // Swirling red lightning arcs
  ctx.strokeStyle = '#fee2e2';
  ctx.lineWidth = 2;
  ctx.beginPath();
  const angle = animTick * 0.05;
  for (let i = 0; i < 4; i++) {
    const a = angle + (i * Math.PI) / 2;
    const r = (w * 0.35 + pulse * 0.5);
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.stroke();

  ctx.restore();
}

// Slingshot Pebble / Psychic projectile
export function drawProjectile(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  animTick: number
) {
  ctx.save();
  const grad = ctx.createRadialGradient(x, y, 1, x, y, r * 2);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.5, '#ef4444');
  grad.addColorStop(1, 'transparent');

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, r * 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fee2e2';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// Fullscreen JUMPSCARE: Demogorgon lunges directly at the screen!
export function drawJumpscareFace(
  ctx: CanvasRenderingContext2D,
  cw: number,
  ch: number,
  progress: number // 0 to 1
) {
  ctx.save();

  // Screen shake
  const shakeX = (Math.random() - 0.5) * 30 * progress;
  const shakeY = (Math.random() - 0.5) * 30 * progress;
  ctx.translate(cw / 2 + shakeX, ch / 2 + shakeY);

  // Red strobe background
  ctx.fillStyle = Math.floor(progress * 20) % 2 === 0 ? '#450a0a' : '#1c1917';
  ctx.fillRect(-cw, -ch, cw * 2, ch * 2);

  // Scale zooms in exponentially from 0.4 to 2.2
  const scale = 0.4 + Math.pow(progress, 1.8) * 2.2;
  ctx.scale(scale, scale);

  const baseRadius = Math.min(cw, ch) * 0.28;

  // Outer throat dark void
  ctx.fillStyle = '#18181b';
  ctx.beginPath();
  ctx.arc(0, 0, baseRadius * 1.5, 0, Math.PI * 2);
  ctx.fill();

  // Red glowing abyss
  const abyss = ctx.createRadialGradient(0, 0, 5, 0, 0, baseRadius * 1.3);
  abyss.addColorStop(0, '#ef4444');
  abyss.addColorStop(0.6, '#7f1d1d');
  abyss.addColorStop(1, '#000000');
  ctx.fillStyle = abyss;
  ctx.beginPath();
  ctx.arc(0, 0, baseRadius * 1.3, 0, Math.PI * 2);
  ctx.fill();

  // The 5 Giant Petal Mouth Flaps spread wide across the entire screen
  const petalAngles = [-Math.PI / 2, -Math.PI / 6, Math.PI / 4, (3 * Math.PI) / 4, (-5 * Math.PI) / 6];

  petalAngles.forEach((angle) => {
    ctx.save();
    ctx.rotate(angle);

    const length = baseRadius * 2.2;
    const width = baseRadius * 0.9;

    // Petal Outer fleshy skin
    ctx.fillStyle = '#374151';
    ctx.beginPath();
    ctx.moveTo(0, -width / 2);
    ctx.lineTo(length, 0);
    ctx.lineTo(0, width / 2);
    ctx.closePath();
    ctx.fill();

    // Petal Inner bloody red flesh
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.moveTo(baseRadius * 0.2, -width * 0.38);
    ctx.lineTo(length * 0.92, 0);
    ctx.lineTo(baseRadius * 0.2, width * 0.38);
    ctx.closePath();
    ctx.fill();

    // Hundreds of sharp needle teeth
    ctx.fillStyle = '#f9fafb';
    const toothStep = length / 12;
    for (let t = baseRadius * 0.3; t < length * 0.85; t += toothStep) {
      // Top tooth row
      ctx.beginPath();
      ctx.moveTo(t, -width * 0.3);
      ctx.lineTo(t + toothStep * 0.5, -width * 0.1);
      ctx.lineTo(t + toothStep, -width * 0.3);
      ctx.fill();

      // Bottom tooth row
      ctx.beginPath();
      ctx.moveTo(t, width * 0.3);
      ctx.lineTo(t + toothStep * 0.5, width * 0.1);
      ctx.lineTo(t + toothStep, width * 0.3);
      ctx.fill();
    }

    ctx.restore();
  });

  // Blood / Spores splatter
  ctx.fillStyle = '#ef4444';
  for (let s = 0; s < 30; s++) {
    const rx = Math.sin(s * 123) * cw * 0.6;
    const ry = Math.cos(s * 321) * ch * 0.6;
    const sr = (Math.sin(s) + 1.5) * 5;
    ctx.fillRect(rx, ry, sr, sr);
  }

  ctx.restore();
}
