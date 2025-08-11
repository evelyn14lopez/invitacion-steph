import { Component, h } from '@stencil/core';

@Component({
  tag: 'floral-intro',
  styleUrl: 'floral-intro.css',
  shadow: true,
})
export class FloralIntro {
  render() {
    return (
      <section class="intro">
        <div class="content">
          <h1>¡Estás invitado!</h1>
          <p>Desliza hacia abajo para descubrir la invitación</p>
        </div>
      </section>
    );
  }
}
