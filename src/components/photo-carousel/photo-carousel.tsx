import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'photo-carousel',
  styleUrl: 'photo-carousel.css',
  shadow: true,
})
export class PhotoCarousel {
  @State() current = 0;

  private images = [
    { url: 'https://via.placeholder.com/800x600?text=Foto+1', caption: 'Un día inolvidable' },
    { url: 'https://via.placeholder.com/800x600?text=Foto+2', caption: 'Nuestra aventura' },
    { url: 'https://via.placeholder.com/800x600?text=Foto+3', caption: 'Amor eterno' },
  ];

  next = () => { this.current = (this.current + 1) % this.images.length; };
  prev = () => { this.current = (this.current - 1 + this.images.length) % this.images.length; };

  render() {
    return (
      <section class="carousel">
        <div class="card">
          <h2>Recuerdos</h2>

          <div class="slider">
            <button class="nav prev" onClick={this.prev} aria-label="Foto anterior">‹</button>

            <div class="frame">
              <img src={this.images[this.current].url} alt="Recuerdo" />
              <p class="caption">{this.images[this.current].caption}</p>
            </div>

            <button class="nav next" onClick={this.next} aria-label="Foto siguiente">›</button>
          </div>

          <div class="dots">
            {this.images.map((_, i) => (
              <button
                class={`dot ${i === this.current ? 'is-active' : ''}`}
                aria-label={`Ir a foto ${i + 1}`}
                onClick={() => (this.current = i)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
