import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'section-couple',
  styleUrl: 'section-couple.css',
  shadow: true,
})
export class SectionCouple {
  /* 1) Verso bíblico */
  @Prop() verse: string = 'Mejores son dos que uno, pues juntos superan cualquier desafío, se levantan cuando caen y se fortalecen con su amor.';
  @Prop() verseRef: string = 'Eclesiastés 4:9-10';

  /* 2) Nombres de los novios */
  @Prop() bride: string = 'Stephanie Santana Zambrano';
  @Prop() groom: string = 'Brandon Jesús Garcia Garcia';

  /* 3) Padres */
  @Prop() brideParents: string[] = ['Norma Angeliza Zambrano Mendoza', 'José Santana Arenas'];
  @Prop() groomParents: string[] = ['Viviana Garcia Rito', 'Mauricio Garcia Aguilar'];

  render() {
    return (
      <section class="couple">
        <div class="wrap">

          {/* Panel 1: Verso */}
          <article class="panel verse">
            <div class="icon" aria-hidden="true">✦</div>
            <blockquote class="text">“{this.verse}”</blockquote>
            <div class="ref">{this.verseRef}</div>
          </article>

          {/* Panel 2: Nombres de los novios */}
          <article class="panel names">
            <h2 class="title">
              <span class="bride">{this.bride}</span>
              <span class="heart" aria-hidden="true">♥</span>
              <span class="groom">{this.groom}</span>
            </h2>
          </article>

          {/* Panel 3: Padres */}
          <article class="panel parents">
            <h3 class="section">Con la bendición de Dios y nuestros queridos padres unimos nuestras vidas</h3>

            <div class="cols">
              <div class="col">
                <div class="col-title">Padres de la Novia</div>
                <ul class="list">
                  {this.brideParents.map((p, i) => <li class="item" key={`bp-${i}`}>{p}</li>)}
                </ul>
              </div>

              <div class="col">
                <div class="col-title">Padres del Novio</div>
                <ul class="list">
                  {this.groomParents.map((p, i) => <li class="item" key={`gp-${i}`}>{p}</li>)}
                </ul>
              </div>
            </div>
          </article>

        </div>
      </section>
    );
  }
}
