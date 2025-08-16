import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'background-music',
  styleUrl: 'background-music.css',
  shadow: false,
})
export class BackgroundMusic {
  private audioEl!: HTMLAudioElement;

  @State() isPlaying = true;

  private setAudioRef = (el?: HTMLAudioElement) => {
    if (el) this.audioEl = el;
  };

  componentDidLoad() {
    const tryPlay = () => {
      if (!this.audioEl) return;

      this.audioEl.play()
        .then(() => (this.isPlaying = true))
        .catch(() => {
          this.isPlaying = false;
        });

      document.removeEventListener('click', tryPlay);
      document.removeEventListener('scroll', tryPlay);
    };


    document.addEventListener('click', tryPlay);
    document.addEventListener('scroll', tryPlay);
  }

  private toggleMusic = () => {
    if (!this.audioEl) return;

    if (this.audioEl.paused) {
      this.audioEl.play().then(() => (this.isPlaying = true)).catch(() => {});
    } else {
      this.audioEl.pause();
      this.isPlaying = false;
    }
  };

  render() {
    const playing = this.isPlaying;

    return (
      <div class="music-wrapper">
        {/* Audio oculto */}
        <audio
          ref={this.setAudioRef}
          id="bg-audio"
          loop
          class="sr-audio"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/assets/musica/music.mp3" type="audio/mpeg" />
        </audio>

        <div class="music-controller" role="region" aria-label="Control de música">
          <button
            type="button"
            class="music-btn"
            onClick={this.toggleMusic}
            aria-pressed={playing ? 'true' : 'false'}
            title={playing ? 'Pausar música' : 'Reproducir música'}
          >
            {/* Icono a la izquierda*/}
            <span class="label">{playing ? 'Pausar Música' : 'Reproducir Música'}</span>
          </button>
        </div>
      </div>
    );
  }
}
