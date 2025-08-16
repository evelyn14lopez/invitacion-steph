import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'section-rsvp',
  styleUrl: 'section-rsvp.css',
  shadow: true,
})
export class SectionRsvp {
  /** Eventos que puedes escuchar desde app-root */
  @Event() confirmAttendance: EventEmitter<void>;
  @Event() cancelAttendance: EventEmitter<void>;
  @Event() pendingAttendance: EventEmitter<void>;

  private onConfirm = () => {
    console.log('✅ Confirmar asistencia');
    this.confirmAttendance.emit();
  };

  private onCancel = () => {
    console.log('❌ Cancelar asistencia');
    this.cancelAttendance.emit();
  };

  private onPending = () => {
    console.log('⏳ Pendiente');
    this.pendingAttendance.emit();
  };

  render() {
    return (
      <section class="rsvp">
        <div class="card">
          <h2>Confirma tu asistencia</h2>
          <p>Por favor selecciona una opción:</p>

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
      </section>
    );
  }
}
