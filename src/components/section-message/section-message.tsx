import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'section-message',
  styleUrl: 'section-message.css',
  shadow: true,
})
export class SectionMessage {
  @State() title = 'De parte de los novios';
  @State() message =
    'Gracias por acompañarnos en este día tan especial. Tu presencia lo hace inolvidable y estamos muy felices de compartir nuestra alegría contigoqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
  @State() photoSrc = 'assets/img/slide_novios15.jpg';
  @State() photoAlt = 'Foto de los novios';

  @State() slicedMessage = '';
  @State() imgMax = 'min(58vh, 520px)';

  private slice400(txt: string) {
    const t = (txt || '').toString();
    return t.length > 400 ? t.slice(0, 400) : t;
  }

  private computeHeights(text: string) {
    const len = text.length;
    if (len <= 120)      this.imgMax = 'min(70vh, 560px)';
    else if (len <= 240) this.imgMax = 'min(58vh, 520px)';
    else                 this.imgMax = 'min(46vh, 480px)';
  }

  componentWillLoad() {
    this.slicedMessage = this.slice400(this.message);
    this.computeHeights(this.slicedMessage);
  }

  componentWillRender() {
    const sliced = this.slice400(this.message);
    if (sliced !== this.slicedMessage) {
      this.slicedMessage = sliced;
      this.computeHeights(this.slicedMessage);
    }
  }

  render() {
    return (
      <section class="message">
        <div class="container">
          <h2>{this.title}</h2>
          <p>{this.slicedMessage}</p>
        </div>
        <figure class="photo-card" aria-label="Foto de los novios">
          <div class="photo-frame">
            <img
              src={this.photoSrc}
              alt={this.photoAlt}
              loading="lazy"
              decoding="async"
              style={{ '--img-max': this.imgMax } as any}
            />
          </div>
        </figure>
      </section>
    );
  }
}
