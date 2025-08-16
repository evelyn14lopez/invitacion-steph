import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'section-location',
  styleUrl: 'section-location.css',
  shadow: true,
})
export class SectionLocation {
  /** Iglesia */
  @Prop() churchTitle: string = 'Ceremonia Religiosa';
  @Prop() churchTime: string = '5:00 p.m.';
  @Prop() churchPlace: string = 'Parroquia de San Francisco De Asís';
  @Prop() churchAddress1: string = 'And. Vista Hermosa Manzana 019,';
  @Prop() churchAddress2: string = 'NFONAVIT San Francisco, 52176 San Salvador Tizatlalli, Méx.';
  @Prop() churchLat: number = 19.265728081855073;
  @Prop() churchLng: number = -99.5949773087833;

  /** Recepción / Salón */
  @Prop() hallTitle: string = 'Recepción';
  @Prop() hallTime: string = '7:00 p.m.';
  @Prop() hallPlace: string = 'Salón Rossano';
  @Prop() hallAddress1: string = 'Av. Durazno 85';
  @Prop() hallAddress2: string = ' Izcalli V, 52172 San Salvador Tizatlalli, Méx.';
  @Prop() hallLat: number = 19.269931527268504;
  @Prop() hallLng: number = -99.59031501349244;



  private mapsLink(lat: number, lng: number) {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }

  renderCard(kind: 'church' | 'hall') {
    const isChurch = kind === 'church';
    const title = isChurch ? this.churchTitle : this.hallTitle;
    const time = isChurch ? this.churchTime : this.hallTime;
    const place = isChurch ? this.churchPlace : this.hallPlace;
    const a1 = isChurch ? this.churchAddress1 : this.hallAddress1;
    const a2 = isChurch ? this.churchAddress2 : this.hallAddress2;
    const lat = isChurch ? this.churchLat : this.hallLat;
    const lng = isChurch ? this.churchLng : this.hallLng;

    return (
      <article class="loc-card">
        <div class="loc-icon" aria-hidden="true">
          {isChurch ? (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
              <path d="M11 2h2v3h2v2h-2v2h-2V7H9V5h2V2Zm-7 9 8-5 8 5v9h-5v-5H9v5H4v-9Z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
              <path d="M3 10l9-6 9 6v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z"/>
            </svg>
          )}
        </div>

        <h3 class="loc-title">{title}</h3>

        <div class="loc-info">
          <p class="time">Hora: <strong>{time}</strong></p>
          <p class="place">{place}</p>
          <p class="addr">{a1}</p>
          <p class="addr">{a2}</p>
        </div>

        <a class="loc-btn" href={this.mapsLink(lat, lng)} target="_blank" rel="noopener noreferrer">
          Ver mapa
        </a>
      </article>
    );
  }

  render() {
    return (
      <section class="locations">
        <div class="wrap">
          {this.renderCard('church')}
          {this.renderCard('hall')}
        </div>
      </section>
    );
  }
}
