import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'photo-carousel',
  styleUrl: 'photo-carousel.css',
  shadow: true,
})
export class PhotoCarousel {
  @State() current = 0;

  private images = [
    { url: 'https://via.placeholder.com/300x200?text=Foto+1', caption: 'Un día inolvidable' },
    { url: 'https://via.placeholder.com/300x200?text=Foto+2', caption: 'Nuestra aventura' },
    { url: 'https://via.placeholder.com/300x200?text=Foto+3', caption: 'Amor eterno' },
  ];

  next = () => {
    this.current = (this.current + 1) % this.images.length;
  };

  prev = () => {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  };

  render() {
    return (
     <section class="carousel-section">
        <h2>Recuerdos</h2>
        <div class="carousel-slider">
          <button onClick={this.prev}>‹</button>
          <div class="image-wrapper">
            <img src={this.images[this.current].url} alt="Recuerdo" />
            <p class="caption">{this.images[this.current].caption}</p>
          </div>
          <button onClick={this.next}>›</button>
        </div>
      </section>

    );
  }
}
