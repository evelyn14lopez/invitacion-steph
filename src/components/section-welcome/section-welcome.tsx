import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-welcome',
  styleUrl: 'section-welcome.css',
  shadow: true,
})
export class SectionWelcome {
  render() {
    return (
      <section class="welcome-section">
        <h2>Bienvenida</h2>
        <p>Nos emociona compartir este día contigo.</p>
      </section>
    );
  }
}
