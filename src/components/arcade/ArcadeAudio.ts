/**
 * ArcadeAudio: 100% Web Audio API synthesized sound engine for Noctra Secret Arcade.
 * No external audio files or copyrighted samples used.
 */

class ArcadeAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isMusicPlaying: boolean = false;
  private musicInterval: any = null;
  private step: number = 0;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.45, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(muted ? 0 : 0.45, this.ctx.currentTime, 0.05);
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Frequency mapping for note names
  private noteToFreq(note: string): number {
    const notes: Record<string, number> = {
      C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98.00, A2: 110.00, Bb2: 116.54, B2: 123.47,
      C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, Bb3: 233.08, B3: 246.94,
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, Bb4: 466.16, B4: 493.88,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, Bb5: 932.33, B5: 987.77,
      C6: 1046.50
    };
    return notes[note] || 220.0;
  }

  // --- Sound Effects ---

  public playJump() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(460, t + 0.15);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.16);
  }

  public playItem() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'square';

    osc1.frequency.setValueAtTime(587.33, t); // D5
    osc1.frequency.setValueAtTime(880.00, t + 0.08); // A5
    osc1.frequency.setValueAtTime(1174.66, t + 0.16); // D6

    osc2.frequency.setValueAtTime(293.66, t);
    osc2.frequency.setValueAtTime(440.00, t + 0.08);
    osc2.frequency.setValueAtTime(587.33, t + 0.16);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.36);
    osc2.stop(t + 0.36);
  }

  public playShoot() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.12);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.13);
  }

  public playHit() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.2);

    gain.gain.setValueAtTime(0.5, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 0.2);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.21);
  }

  public playDialogBlip() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const pitches = [440, 520, 580, 650];
    const p = pitches[Math.floor(Math.random() * pitches.length)];
    osc.frequency.setValueAtTime(p, t);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  public playGateWarp() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, t);
    osc.frequency.exponentialRampToValueAtTime(800, t + 0.6);
    osc.frequency.exponentialRampToValueAtTime(40, t + 1.2);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 1.2);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 1.25);
  }

  public playBossRoar() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    // Roar using 2 detuned sawtooths and lowpass sweep
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';

    osc1.frequency.setValueAtTime(85, t);
    osc1.frequency.linearRampToValueAtTime(130, t + 0.2);
    osc1.frequency.exponentialRampToValueAtTime(35, t + 0.8);

    osc2.frequency.setValueAtTime(88, t);
    osc2.frequency.linearRampToValueAtTime(135, t + 0.2);
    osc2.frequency.exponentialRampToValueAtTime(36, t + 0.8);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, t);
    filter.frequency.linearRampToValueAtTime(1600, t + 0.2);
    filter.frequency.exponentialRampToValueAtTime(200, t + 0.8);

    gain.gain.setValueAtTime(0.6, t);
    gain.gain.linearRampToValueAtTime(0.01, t + 0.8);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.82);
    osc2.stop(t + 0.82);
  }

  public playJumpscare() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    // Terrifying multi-oscillator blast with screech and rumbling sub-bass
    const sub = this.ctx.createOscillator();
    const scream1 = this.ctx.createOscillator();
    const scream2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    sub.type = 'sawtooth';
    sub.frequency.setValueAtTime(45, t);
    sub.frequency.exponentialRampToValueAtTime(25, t + 1.2);

    scream1.type = 'sawtooth';
    scream1.frequency.setValueAtTime(480, t);
    scream1.frequency.linearRampToValueAtTime(740, t + 0.3);
    scream1.frequency.exponentialRampToValueAtTime(110, t + 1.2);

    scream2.type = 'square';
    scream2.frequency.setValueAtTime(495, t); // Dissonant beating
    scream2.frequency.linearRampToValueAtTime(760, t + 0.3);
    scream2.frequency.exponentialRampToValueAtTime(105, t + 1.2);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(900, t);
    filter.Q.setValueAtTime(2, t);

    gain.gain.setValueAtTime(0.9, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 1.3);

    sub.connect(gain);
    scream1.connect(filter);
    scream2.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    sub.start(t);
    scream1.start(t);
    scream2.start(t);
    sub.stop(t + 1.35);
    scream1.stop(t + 1.35);
    scream2.stop(t + 1.35);
  }

  public playVictory() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const chords = [
      { notes: [293.66, 369.99, 440.00], dur: 0.18 }, // D Maj
      { notes: [329.63, 415.30, 493.88], dur: 0.18 }, // E Maj
      { notes: [440.00, 554.37, 659.25], dur: 0.50 }, // A Maj
    ];

    let delay = 0;
    chords.forEach(({ notes, dur }) => {
      notes.forEach((freq) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t + delay);

        gain.gain.setValueAtTime(0.3, t + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, t + delay + dur);

        osc.connect(gain);
        gain.connect(this.sfxGain!);

        osc.start(t + delay);
        osc.stop(t + delay + dur + 0.05);
      });
      delay += dur;
    });
  }

  public playGameOver() {
    this.initCtx();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const notes = [293.66, 261.63, 233.08, 196.00, 146.83]; // D4, C4, Bb3, G3, D3
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t + i * 0.18);

      gain.gain.setValueAtTime(0.3, t + i * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.01, t + i * 0.18 + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(t + i * 0.18);
      osc.stop(t + i * 0.18 + 0.26);
    });
  }

  // --- Background Retro Chiptune Loop ---

  public startMusic(theme: 'hawkins' | 'upsidedown' = 'hawkins') {
    this.initCtx();
    if (this.isMusicPlaying) this.stopMusic();
    this.isMusicPlaying = true;
    this.step = 0;

    // Original 80s Suspense Chiptune Score
    // 16-step sequence, 124 BPM -> 16th note = ~121ms
    const stepDuration = 0.121;

    // Hawkins Theme Arpeggios (Original 80s groove: Dm -> F -> C -> Bb)
    const hawkinsArps = [
      // Bar 1: Dm
      'D3', 'F3', 'A3', 'C4', 'D4', 'C4', 'A3', 'F3', 'D3', 'F3', 'A3', 'C4', 'D4', 'C4', 'A3', 'F3',
      // Bar 2: Bb
      'Bb2', 'D3', 'F3', 'A3', 'Bb3', 'A3', 'F3', 'D3', 'Bb2', 'D3', 'F3', 'A3', 'Bb3', 'A3', 'F3', 'D3',
      // Bar 3: F
      'F2', 'A2', 'C3', 'E3', 'F3', 'E3', 'C3', 'A2', 'F2', 'A2', 'C3', 'E3', 'F3', 'E3', 'C3', 'A2',
      // Bar 4: C
      'C3', 'E3', 'G3', 'B3', 'C4', 'B3', 'G3', 'E3', 'C3', 'E3', 'G3', 'B3', 'C4', 'B3', 'G3', 'E3'
    ];

    const hawkinsBass = [
      'D2', null, 'D2', null, 'D2', null, 'D2', 'D2',
      'Bb2', null, 'Bb2', null, 'Bb2', null, 'Bb2', 'Bb2',
      'F2', null, 'F2', null, 'F2', null, 'F2', 'F2',
      'C2', null, 'C2', null, 'C2', null, 'C2', 'C2'
    ];

    // Upside Down Boss Theme (Faster, darker, dissonant)
    const bossArps = [
      'D3', 'D#3', 'A3', 'D4', 'D#4', 'D4', 'A3', 'D#3',
      'C#3', 'D3', 'G#3', 'C#4', 'D4', 'C#4', 'G#3', 'D3',
      'Bb2', 'B2', 'F3', 'Bb3', 'B3', 'Bb3', 'F3', 'B2',
      'A2', 'Bb2', 'E3', 'A3', 'Bb3', 'A3', 'E3', 'Bb2'
    ];

    const arps = theme === 'upsidedown' ? bossArps : hawkinsArps;
    const bass = hawkinsBass;

    const playStep = () => {
      if (!this.ctx || !this.musicGain || !this.isMusicPlaying) return;
      const t = this.ctx.currentTime;

      // 1. Arpeggio note
      const arpNote = arps[this.step % arps.length];
      if (arpNote) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = theme === 'upsidedown' ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(this.noteToFreq(arpNote), t);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + stepDuration * 0.9);

        osc.connect(gain);
        gain.connect(this.musicGain);

        osc.start(t);
        osc.stop(t + stepDuration);
      }

      // 2. Bass note (every 2nd 16th note)
      if (this.step % 2 === 0) {
        const bassIdx = Math.floor((this.step / 2) % bass.length);
        const bassNote = bass[bassIdx];
        if (bassNote) {
          const oscB = this.ctx.createOscillator();
          const gainB = this.ctx.createGain();
          oscB.type = 'sawtooth';
          oscB.frequency.setValueAtTime(this.noteToFreq(bassNote), t);

          gainB.gain.setValueAtTime(0.24, t);
          gainB.gain.exponentialRampToValueAtTime(0.01, t + stepDuration * 1.8);

          oscB.connect(gainB);
          gainB.connect(this.musicGain);

          oscB.start(t);
          oscB.stop(t + stepDuration * 2);
        }
      }

      // 3. Retro 8-bit drum beat
      if (this.step % 4 === 0) {
        // Kick on downbeats
        const kickOsc = this.ctx.createOscillator();
        const kickGain = this.ctx.createGain();
        kickOsc.type = 'sine';
        kickOsc.frequency.setValueAtTime(110, t);
        kickOsc.frequency.exponentialRampToValueAtTime(25, t + 0.08);

        kickGain.gain.setValueAtTime(0.3, t);
        kickGain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);

        kickOsc.connect(kickGain);
        kickGain.connect(this.musicGain);

        kickOsc.start(t);
        kickOsc.stop(t + 0.09);
      } else if (this.step % 4 === 2) {
        // Snare / clap on backbeats
        const noiseOsc = this.ctx.createOscillator();
        const noiseGain = this.ctx.createGain();
        noiseOsc.type = 'square';
        noiseOsc.frequency.setValueAtTime(280, t);
        noiseOsc.frequency.exponentialRampToValueAtTime(60, t + 0.06);

        noiseGain.gain.setValueAtTime(0.12, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);

        noiseOsc.connect(noiseGain);
        noiseGain.connect(this.musicGain);

        noiseOsc.start(t);
        noiseOsc.stop(t + 0.07);
      }

      this.step = (this.step + 1) % (arps.length * 4);
    };

    this.musicInterval = setInterval(playStep, stepDuration * 1000);
  }

  public stopMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  public destroy() {
    this.stopMusic();
    if (this.ctx && this.ctx.state !== 'closed') {
      try {
        this.ctx.close();
      } catch {}
      this.ctx = null;
    }
  }
}

export const arcadeAudio = new ArcadeAudioEngine();
