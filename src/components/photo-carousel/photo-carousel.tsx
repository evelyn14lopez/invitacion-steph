import { Component, h, State, Element, Listen } from '@stencil/core';

type Item = { url: string; caption?: string };

@Component({
  tag: 'photo-carousel',
  styleUrl: 'photo-carousel.css',
  shadow: true,
})
export class PhotoCarousel {
  @Element() host!: HTMLElement;

  @State() current = 0;

  @State() loaded = new Set<number>();

  private images: Item[] = [
     { url: 'assets/img/slide_novios2.jpg', caption: '' },
    { url: 'assets/img/slide_novios3.jpg', caption: '' },
    { url: 'assets/img/slide_novios4.jpg', caption: '' },
    { url: 'assets/img/slide_novios5.jpg', caption: '' },
    { url: 'assets/img/slide_novios6.jpg', caption: '' },
    { url: 'assets/img/slide_novios7.jpg', caption: '' },
    { url: 'assets/img/slide_novios8.jpg', caption: '' },
    { url: 'assets/img/slide_novios9.jpg', caption: '' },
    { url: 'assets/img/slide_novios11.jpg', caption: '' },
  ];

  private ph =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>';

  private io?: IntersectionObserver;

  componentDidLoad() {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            [this.current, this.idx(-1), this.idx(1)].forEach((i) => this.markLoaded(i));
          }
        });
      },
      { root: null, rootMargin: '200px 0px', threshold: 0.01 }
    );
    const stack = this.host.shadowRoot!.querySelector('.pc_stack');
    if (stack) this.io.observe(stack);
    // Marca la primera como cargada
    this.markLoaded(this.current);
  }

  disconnectedCallback() {
    this.io?.disconnect();
  }

  private markLoaded(i: number) {
    if (!this.loaded.has(i)) {
      const s = new Set(this.loaded);
      s.add(i);
      this.loaded = s;
    }
  }


  private idx(delta: number) {
    const n = this.images.length;
    return (this.current + delta + n) % n;
  }

  next = () => {
    this.current = this.idx(1);
    [this.current, this.idx(1), this.idx(2)].forEach((i) => this.markLoaded(i));
  };
  prev = () => {
    this.current = this.idx(-1);
    [this.current, this.idx(-1), this.idx(-2)].forEach((i) => this.markLoaded(i));
  };

  private startX = 0;
  private startY = 0;
  private swiping = false;

  private onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    this.startX = t.clientX;
    this.startY = t.clientY;
    this.swiping = false;
  };
  private onTouchMove = (e: TouchEvent) => {
    const t = e.touches[0];
    const dx = t.clientX - this.startX;
    const dy = t.clientY - this.startY;

    const H_THRESHOLD = 22;
    const DOMINANCE = 1.6;

    this.swiping = Math.abs(dx) > H_THRESHOLD && Math.abs(dx) >= DOMINANCE * Math.abs(dy);
  };
  private onTouchEnd = (e: TouchEvent) => {
    if (!this.swiping) return;
    const dx = (e.changedTouches?.[0]?.clientX ?? this.startX) - this.startX;
    const END_THRESHOLD = 36;
    if (dx < -END_THRESHOLD) this.next();
    else if (dx > END_THRESHOLD) this.prev();
    this.swiping = false;
  };


  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }


  private visibleIndexes(): number[] {
    return [-2, -1, 0, 1, 2].map((d) => this.idx(d));
  }

  render() {
    const idxs = this.visibleIndexes();

    return (
      <section class="pc_wrap" aria-roledescription="carrusel de fotos">
        <div class="pc_card">
          <h2 class="pc_title">Recuerdos</h2>

          <div
            class="pc_stack"
            role="group"
            aria-label="Galería"
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
            onTouchEnd={this.onTouchEnd}
          >
            {idxs.map((i, order) => {
              const img = this.images[i];
              const isCurrent = i === this.current;
              const z = order;
              const rotations = [-8, -4, 0, 4, 8];
              const offsetsY = [10, 5, 0, 5, 10];

              const src = this.loaded.has(i) ? img.url : this.ph;

              return (
                <figure
                  key={i}
                  class={{
                    pc_polaroid: true,
                    'is-current': isCurrent,
                  }}
                  style={{
                    zIndex: String(10 + z),
                    '--rot': `${rotations[order]}deg`,
                    '--offy': `${offsetsY[order]}px`,
                  }}
                >
                  <img
                    src={src}
                    loading="lazy"
                    decoding="async"
                    alt={img.caption || `Foto ${i + 1}`}
                    onLoad={() => this.markLoaded(i)}
                  />
                  <figcaption class="pc_caption">{img.caption || ''}</figcaption>
                </figure>
              );
            })}

            <button class="pc_nav pc_prev" onClick={this.prev} aria-label="Foto anterior">‹</button>
            <button class="pc_nav pc_next" onClick={this.next} aria-label="Foto siguiente">›</button>

            <div class="pc_hint" aria-hidden="true">
              Desliza para ver más fotos
            </div>
          </div>

          <div class="pc_dots" role="tablist" aria-label="Selección de foto">
            {this.images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === this.current ? 'true' : 'false'}
                class={`pc_dot ${i === this.current ? 'is-active' : ''}`}
                onClick={() => {
                  this.current = i;
                  [i, this.idx(1), this.idx(-1)].forEach((k) => this.markLoaded(k));
                }}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
