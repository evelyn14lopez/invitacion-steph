import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-rsvp',
  styleUrl: 'section-rsvp.css',
  shadow: true,
})
export class SectionRsvp {
  render() {
    return (
      <section class="rsvp">
        <div class="card">
          <h2>Confirmar asistencia</h2>
          <p>Por favor confirma tu asistencia con el siguiente enlace:</p>

          <a
            href="https://tu-formulario-de-confirmacion.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Confirmar
          </a>

          <small class="note">¡Gracias! Tu confirmación nos ayuda a organizar mejor todo 💕</small>
        </div>
      </section>
    );
  }
}
