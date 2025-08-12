import { Component, h } from '@stencil/core';

@Component({
  tag: 'guest-messages',
  styleUrl: 'guest-messages.css',
  shadow: true,
})
export class GuestMessages {
  render() {
    return (
      <section class="guest">
        <div class="card">
          <h2>Deja tu mensaje</h2>
          <p>¡Déjanos un mensaje especial en el formulario!</p>

          <a
            href="https://tu-formulario.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Escribir mensaje
          </a>
        </div>
      </section>
    );
  }
}
