import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'envelope-intro',
  styleUrl: 'envelope-intro.css',
  shadow: true,
})
export class EnvelopeIntro {
  @State() opened = false;
  @Element() el: HTMLElement;

  handleOpen = () => {
    this.opened = true;

    setTimeout(() => {
      this.el.dispatchEvent(
        new CustomEvent('envelopeOpened', {
          bubbles: true,
          composed: true,
        })
      );
    }, 800);
  };

  render() {
    return (
      <div
        class={`envelope-wrapper ${this.opened ? 'opened' : ''}`}
        onClick={this.handleOpen}
      >
        <div class="envelope">
          <span class="emoji">💌</span>
          <p>Haz clic para abrir la invitación</p>
        </div>
      </div>
    );
  }
}
