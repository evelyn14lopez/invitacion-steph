import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'floral-intro',
  styleUrl: 'floral-intro.css',
  shadow: true,
})
export class FloralIntro {

  @Prop() bride: string = 'Stephanie';
  @Prop() groom: string = 'Brandon';

  @Prop() guestName?: string = 'Luis Jair';

  @Prop() familySurname?: string;

  @Prop() eventLabel: string = 'Nuestra Boda';

  @Prop() hintText: string = 'Desliza hacia abajo para descubrir la invitación';

  private renderAddressee() {
    if (this.guestName && this.guestName.trim().length) return this.guestName;
    if (this.familySurname && this.familySurname.trim().length) return `Familia ${this.familySurname}`;
    return 'Querido invitado';
  }

  render() {
    return (
      <section class="intro" aria-label="Portada de la invitación">
        <div class="content" role="group" aria-roledescription="portada">
          {/* Nombres */}
          <h1 class="couple">
            <span class="name">{this.bride}</span>
            <span class="amp">&amp;</span>
            <span class="name">{this.groom}</span>
          </h1>

          {/* Subtítulo del evento */}
          <h2 class="subtitle-event">{this.eventLabel}</h2>

          {/* Separador */}
          <div class="divider" aria-hidden="true"></div>

          {/* Invitado / familia */}
          <p class="addressee">Para: <span class="who">{this.renderAddressee()}</span></p>

          {/* Pista para deslizar */}
          <p class="hint">{this.hintText}</p>

          <div class="swipe" aria-hidden="true">
            <span class="arrow">▾</span>
          </div>
        </div>
      </section>
    );
  }
}
