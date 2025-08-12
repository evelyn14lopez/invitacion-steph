import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-couple',
  styleUrl: 'section-couple.css',
  shadow: true,
})
export class SectionCouple {
  render() {
    return (
      <section class="couple">
        <div class="container">
          <h2>Con amor...</h2>
          <p class="names">Nombre de Novia <span class="heart">♥</span> Nombre del Novio</p>
          <p class="subtitle">Estamos felices de celebrar este día contigo</p>
        </div>
      </section>
    );
  }
}
