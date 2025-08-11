import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-details',
  styleUrl: 'section-details.css',
  shadow: true,
})
export class SectionDetails {
  render() {
    return (
      <section class="details-section">
        <h2>El gran día</h2>
        <p>📅 Sábado 14 de Diciembre 2025</p>
        <p>📍 Jardín La Esperanza, CDMX</p>
        <p>🕓 4:00 p.m.</p>
      </section>
    );
  }
}
