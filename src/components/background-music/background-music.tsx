import { Component, h } from '@stencil/core';

@Component({
  tag: 'background-music',
  shadow: false,
})
export class BackgroundMusic {
  componentDidLoad() {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement;

    const tryPlay = () => {
      audio.play().catch(() => {
        console.warn('Reproducción bloqueada hasta interacción');
      });

      // Se eliminan los eventos después del primer intento
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('scroll', tryPlay);
    };

    // Escuchamos eventos globales
    document.addEventListener('click', tryPlay);
    document.addEventListener('scroll', tryPlay);
  }

  render() {
    return (
      <audio id="bg-audio" loop>
        <source src="/assets/musica/music.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>
    );
  }
}
