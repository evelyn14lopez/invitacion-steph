import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'envelope-intro',
  styleUrl: 'envelope-intro.css',
  shadow: true,
})
export class EnvelopeIntro {
  @State() opened = false;
  @Element() el!: HTMLElement;

  private finishOpen = () => {
    setTimeout(() => {
      this.el.dispatchEvent(
        new CustomEvent('envelopeOpened', { bubbles: true, composed: true })
      );
    }, 500);
  };

  private handleOpen = () => {
    if (this.opened) return;
    this.opened = true;
    this.finishOpen();
  };

  private onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this.handleOpen();
    }
  };


  render() {
    return (
      <div
        class={`envelope-wrapper ${this.opened ? 'opened' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Abrir invitación"
        onClick={this.handleOpen}
        onKeyDown={this.onKeyDown}
      >
        <div class="envelope">
          <span class="emoji" aria-hidden="true">💌</span>
          <p>Haz clic para abrir la invitación</p>
          <small class="hint">(o presiona Enter/Espacio)</small>
        </div>
      </div>
    );
  }
}
