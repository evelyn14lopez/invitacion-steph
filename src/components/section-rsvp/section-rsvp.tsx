import { Component, h, Event, EventEmitter, State, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'section-rsvp',
  styleUrl: 'section-rsvp.css',
  shadow: true,
})
export class SectionRsvp {
  /** Imagen del QR */
  @Prop() qrSrc: string = 'assets/img/qr.jpg';
  @Prop() qrAlt: string = 'Código QR de acceso a la boda';

  /** Eventos */
  @Event() confirmAttendance: EventEmitter<void>;
  @Event() cancelAttendance: EventEmitter<void>;
  @Event() pendingAttendance: EventEmitter<void>;

  @State() qrOpen = false;

  private onConfirm = () => { this.confirmAttendance.emit(); };
  private onCancel = () => { this.cancelAttendance.emit(); };
  private onPending = () => { this.pendingAttendance.emit(); };

  private openQr = () => { this.qrOpen = true; };
  private closeQr = () => { this.qrOpen = false; };

  @Listen('keydown', { target: 'window' })
  handleKeydown(ev: KeyboardEvent) {
    if (this.qrOpen && ev.key === 'Escape') this.closeQr();
  }

  render() {
    return (
      <section class="rsvp">
        <div class="card">
          <h2>Confirma tu asistencia</h2>
          <p>Por favor selecciona una opción:</p>

          {/* 🔝 Botón de QR ahora arriba */}
          <button class="qr-trigger" onClick={this.openQr} aria-haspopup="dialog" aria-controls="qr-modal">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="qr-icon">
              <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm6-2h2v4h4V3h2v6h-8V3zm8 8h2v2h-2v-2zm-2 2h-2v-2h2v2zm-4 0h2v2h-2v-2zm4 2h2v4h-4v-2h2v-2zm-4 0v2h-2v2H9v-2h2v-2h2zM3 13h8v8H3v-8zm2 2v4h4v-4H5z"/>
            </svg>
            <span>Código QR de acceso</span>
          </button>

          {/* Botones de opciones */}
          <div class="btn-group">
            <button class="btn btn--confirm" onClick={this.onConfirm}>
              Confirmar asistencia
            </button>
            <button class="btn btn--cancel" onClick={this.onCancel}>
              Cancelar
            </button>
            <button class="btn btn--pending" onClick={this.onPending}>
              Pendiente
            </button>
          </div>

          <span class="note">Tu respuesta nos ayudará a organizar mejor la celebración ✨</span>
        </div>

        {/* Modal QR */}
        <div
          id="qr-modal"
          class={{ modal: true, 'is-open': this.qrOpen }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-title"
          onClick={(e) => { if (e.target === e.currentTarget) this.closeQr(); }}
        >
          <div class="sheet" role="document">
            <button class="close" onClick={this.closeQr} aria-label="Cerrar">×</button>
            <h3 id="qr-title" class="title">Tu código de acceso</h3>
            <p class="subtitle">
              Escanéalo y <strong>consérvalo</strong>. Será tu acceso a la boda.
            </p>

            <figure class="qr-wrap">
              <img class="qr-img" src={this.qrSrc} alt={this.qrAlt} loading="lazy" decoding="async" />
              <figcaption class="caption">Muestra este código en la entrada</figcaption>
            </figure>

            <div class="qr-actions">
              <a class="download" href={this.qrSrc} download="qr-acceso-boda.jpg">Descargar QR</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
