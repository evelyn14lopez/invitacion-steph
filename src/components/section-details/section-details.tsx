import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'section-details',
  styleUrl: 'section-details.css',
  shadow: true,
})
export class SectionDetails {
  /** Foto inferior */
  @Prop() photoSrc: string = 'assets/img/slide_novios1.jpg';
  @Prop() photoAlt: string = 'Detalle';

  render() {
    return (
      <section class="details">
        {/* Card de info */}
        <div class="card">
          <h2>El gran día</h2>
          <ul class="list">
            <li>📅 <strong>Sábado 06 de Septiembre 2025</strong></li>
            <li>📍 Iglesia: Parroquia de San Francisco De Asís</li>
            <li>🕓 5:00 p.m.</li>
          </ul>
        </div>

        {/* Foto centrada */}
        <figure class="photo" style={{ '--pos-x': '90%', '--pos-y': '50%' } as any}>
          <img src={this.photoSrc} alt={this.photoAlt} loading="lazy" decoding="async" />
        </figure>
      </section>
    );
  }
}
