import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-welcome',
  styleUrl: 'section-welcome.css',
  shadow: true,
})
export class SectionWelcome {
  render() {
    return (
      <section class="welcome">
        <div class="container">
          <h2>Bienvenida</h2>
          <p>Nos emociona compartir este día contigo.</p>
        </div>
        <figure class="photo-card" aria-label="Foto de los novios">
          <div class="photo-frame">
            <img src="assets/img/novios_welcome.jpg" alt="Foto de los novios" loading="lazy" />
          </div>
        </figure>
      </section>
    );
  }
}
