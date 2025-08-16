import { Component, h, State, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'guest-messages',
  styleUrl: 'guest-messages.css',
  shadow: true,
})
export class GuestMessages {
  @State() open = false;
  @State() text = '';
  @State() sending = false;
  @State() sent = false;

  @Prop() photoSrc: string = 'assets/img/slide_novios13.jpg';
  @Prop() photoAlt: string = '';

  @Event({ eventName: 'guest-message-submit' }) submitMessage!: EventEmitter<{ message: string }>;

  private maxLen = 280;

  private handleOpen = () => {
    this.open = true;
    this.sent = false;
    this.text = '';
  };

  private handleClose = () => {
    if (this.sending) return;
    this.open = false;
  };

  private async handleSubmit(e?: Event) {
    e?.preventDefault();
    if (!this.text.trim()) return;

    try {
      this.sending = true;
      this.submitMessage.emit({ message: this.text.trim() });

      await new Promise((r) => setTimeout(r, 600));
      this.sent = true;
      this.text = '';
    } finally {
      this.sending = false;
    }
  }

  render() {
    const remaining = this.maxLen - this.text.length;
    const disabled = !this.text.trim() || this.sending;

    return (
      <section class="guest">
        {/* Card arriba */}
        <div class="card">
          <h2>Deja tu mensaje</h2>
          <p>¡Déjanos un mensaje especial en el formulario!</p>

          <button class="btn" type="button" onClick={this.handleOpen}>
            Escribir mensaje
          </button>
        </div>

        {/* Foto abajo */}
       <figure class="photo" style={{ '--pos-x': '40%', '--pos-y': '50%' } as any}>
          <img src={this.photoSrc} alt={this.photoAlt} loading="lazy" decoding="async" />
        </figure>

        {/* MODAL */}
        <div
          class={{ modal: true, 'is-open': this.open }}
          role="dialog"
          aria-modal={this.open ? 'true' : 'false'}
          aria-labelledby="guestMsgTitle"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal')) this.handleClose();
          }}
        >
          <div class="sheet" role="document">
            <button class="close" aria-label="Cerrar" onClick={this.handleClose}>×</button>

            {!this.sent ? (
              <form class="form" onSubmit={(e) => this.handleSubmit(e)}>
                <h3 id="guestMsgTitle" class="title">Déjanos un mensaje lindo</h3>
                <p class="subtitle">Nos encantará leer tus palabras. 💌</p>

                <label class="sr-only" htmlFor="guestMessage">Mensaje</label>
                <textarea
                  id="guestMessage"
                  class="textarea"
                  placeholder="Escribe aquí tu mensaje…"
                  maxlength={this.maxLen}
                  value={this.text}
                  onInput={(e: any) => (this.text = e.target.value)}
                />

                <div class="meta">
                  <span class={{ counter: true, danger: remaining <= 15 }}>
                    {remaining} caracteres
                  </span>
                </div>

                <button class="send" type="submit" disabled={disabled}>
                  {this.sending ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </form>
            ) : (
              <div class="success">
                <h3 class="title">¡Gracias por tu mensaje! 🎉</h3>
                <p class="subtitle">Lo apreciamos muchísimo.</p>
                <button class="send" type="button" onClick={this.handleClose}>
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
