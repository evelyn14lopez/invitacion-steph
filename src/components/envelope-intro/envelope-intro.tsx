import { Component, h, State, Element, Prop } from '@stencil/core';

type Stage = 'intro' | 'password' | 'done';

@Component({
  tag: 'envelope-intro',
  styleUrl: 'envelope-intro.css',
  shadow: true,
})
export class EnvelopeIntro {
  /** Contraseña requerida (personalizable como atributo: <envelope-intro password="XXXX" /> ) */
  @Prop() password: string = 'Steph-2025';

  @State() opened = false;     // controla la animación de salida del overlay
  @State() stage: Stage = 'intro';
  @State() inputValue = '';
  @State() errorMsg = '';

  @Element() el!: HTMLElement;

  private inputEl?: HTMLInputElement;

  private finishOpen = () => {
    setTimeout(() => {
      this.el.dispatchEvent(
        new CustomEvent('envelopeOpened', { bubbles: true, composed: true })
      );
    }, 500); // coincide con el transition del overlay
  };

  /** Paso 1 -> Mostrar cuadro de contraseña (sin afectar nada externo) */
  private handleOpen = () => {
    if (this.stage !== 'intro') return;
    this.stage = 'password';
    // Enfocar input apenas renderice
    setTimeout(() => this.inputEl?.focus(), 0);
  };

  /** Validación estricta (obligatoria) */
  private submitPassword = (ev?: Event) => {
    ev?.preventDefault();
    const expected = (this.password ?? '').trim();
    const got = (this.inputValue ?? '').trim();

    if (expected.length === 0) {
      // Si por accidente no configuran password, nunca dejamos pasar
      this.errorMsg = 'No hay contraseña configurada. Contacta a los anfitriones.';
      return;
    }

    if (got === expected) {
      this.errorMsg = '';
      this.stage = 'done';
      this.opened = true;  // activa fade-out
      this.finishOpen();   // luego lanza el evento para que el index remueva el overlay
    } else {
      this.errorMsg = 'Contraseña incorrecta. Intenta de nuevo.';
    }
  };

  private onKeyDown = (ev: KeyboardEvent) => {
    if (this.stage === 'intro' && (ev.key === 'Enter' || ev.key === ' ')) {
      ev.preventDefault();
      this.handleOpen();
    }
  };

  private closePasswordAndGoBack = () => {
    // Vuelve al sobre sin cerrar invitación
    this.stage = 'intro';
    this.inputValue = '';
    this.errorMsg = '';
  };

  private setInputRef = (el?: HTMLInputElement) => {
    this.inputEl = el;
  };

  render() {
    return (
      <div
        class={`envelope-wrapper ${this.opened ? 'opened' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Abrir invitación"
        onClick={this.stage === 'intro' ? this.handleOpen : undefined}
        onKeyDown={this.onKeyDown}
      >
        {/* Etapa 1: Sobre */}
        {this.stage === 'intro' && (
          <div class="envelope" aria-hidden="false">
            <span class="emoji" aria-hidden="true">💌</span>
            <p>Haz clic para abrir la invitación</p>
            <small class="hint">(o presiona Enter/Espacio)</small>
          </div>
        )}

        {/* Etapa 2: Password (bloquea salida hasta ser correcta) */}
        {this.stage === 'password' && (
          <div class="password-backdrop" role="dialog" aria-modal="true" aria-labelledby="pw-title">
            <form class="password-card" onSubmit={this.submitPassword}>
              <h2 id="pw-title" class="password-title">Acceso con contraseña</h2>
              <p class="password-desc">Por favor ingresa la contraseña para ver la invitación completa.</p>

              <div class="password-row">
                <input
                  ref={this.setInputRef}
                  class="password-input"
                  type="password"
                  required
                  placeholder="Contraseña"
                  value={this.inputValue}
                  onInput={(e: any) => (this.inputValue = e.target.value)}
                  aria-label="Contraseña"
                />
                <button class="btn btn-primary" type="submit">Entrar</button>
              </div>

              <div class="error" role="status" aria-live="polite">{this.errorMsg}</div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', marginTop: '.5rem' }}>
                <button type="button" class="btn btn-secondary" onClick={this.closePasswordAndGoBack}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Etapa 3: done -> sólo se maneja la transición por CSS y evento */}
      </div>
    );
  }
}
