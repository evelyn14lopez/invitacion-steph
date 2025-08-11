import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-location',
  styleUrl: 'section-location.css',
  shadow: true,
})
export class SectionLocation {
  private lat = 19.3198405;
  private lng = -99.6291095;

  private embedSrc = `https://maps.google.com/maps?ll=${this.lat},${this.lng}&z=16&t=m&output=embed`;
  private mapsLink = `https://www.google.com/maps/search/?api=1&query=${this.lat},${this.lng}`;

  render() {
    console.log('[section-location] iframe src =', this.embedSrc);

    return (
      <section class="map">
        <h2>¿Dónde será?</h2>

        <iframe
          id="location-iframe"
          src={this.embedSrc}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de la ubicación"
        ></iframe>

        <a class="btn" href={this.mapsLink} target="_blank" rel="noopener noreferrer">
          Abrir en Google Maps
        </a>
      </section>
    );
  }
}
