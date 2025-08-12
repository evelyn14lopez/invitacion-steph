import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-details',
  styleUrl: 'section-details.css',
  shadow: true,
})
export class SectionDetails {
  render() {
    return (
      <section class="details">
        <div class="card">
          <h2>El gran día</h2>

          <ul class="list">
            <li>📅 <strong>Sábado 14 de Diciembre 2025</strong></li>
            <li>📍 Jardín La Esperanza, CDMX</li>
            <li>🕓 4:00 p.m.</li>
          </ul>
        </div>
      </section>
    );
  }
}
