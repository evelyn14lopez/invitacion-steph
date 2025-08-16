import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'section-gifts',
  styleUrl: 'section-gifts.css',
  shadow: true,
})
export class SectionGifts {
  @Prop() title: string = 'Regalos';
  @Prop() message: string =
    'El mejor regalo es que estés presente en este día tan esperado, pero si deseas hacernos un obsequio tenemos esta opción:';

  @Prop() mesaLabel: string = 'Mesa de regalos';
  @Prop() mesaUrl: string = 'https://www.amazon.com.mx/wedding/share/NuestraBodaStephanieBrandon';
  @Prop() note?: string;

  render() {
    return (
      <section class="gifts">
        <div class="panel">
          <div class="icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="gift-icon">
              <path d="M20 7h-2.1a3 3 0 0 0-5.9 0H12a3 3 0 0 0-5.9 0H4a2 2 0 0 0-2 2v2h20V9a2 2 0 0 0-2-2Zm-7.5-1a1.5 1.5 0 0 1 3 0v1h-3V6Zm-5.5 0a1.5 1.5 0 0 1 3 0v1H7V6ZM2 13v7a2 2 0 0 0 2 2h6v-9H2Zm20 0h-8v9h6a2 2 0 0 0 2-2v-7Z"/>
            </svg>
          </div>

          <h2 class="title">{this.title}</h2>
          <p class="lead">{this.message}</p>

          <div class="options">
            <article class="opt">
              <h3 class="opt-title">{this.mesaLabel}</h3>
              <a class="pill" href={this.mesaUrl} target="_blank" rel="noopener noreferrer">
                <span class="pill-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 6a2 2 0 0 1 2-2h14v2H5v12h14v2H5a2 2 0 0 1-2-2V6Zm4 3h10v2H7V9Zm0 4h10v2H7v-2Z"/>
                  </svg>
                </span>
                <span>Click aquí</span>
              </a>
            </article>
          </div>

          {this.note && <p class="note">{this.note}</p>}
        </div>
      </section>
    );
  }
}
