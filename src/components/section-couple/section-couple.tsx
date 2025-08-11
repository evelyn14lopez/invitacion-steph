import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-couple',
  styleUrl: 'section-couple.css',
  shadow: true,
})
export class SectionCouple {
  render() {
    return (
      <div class="section-couple">
        <h2>Con amor...</h2>
        <p>Nombre de Novia 💕 Nombre del Novio</p>
        <p>Estamos felices de celebrar este día contigo</p>
      </div>
    );
  }
}
