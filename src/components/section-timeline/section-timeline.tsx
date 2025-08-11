import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-timeline',
  styleUrl: 'section-timeline.css',
  shadow: true,
})
export class SectionTimeline {
  render() {
    return (
      <section class="timeline-section">
        <h2>Itinerario</h2>
        <ul class="events">
          {/* 1) Ceremonia en la iglesia */}
          <li>
            <div class="content">
              <svg class="icon" viewBox="0 0 64 64" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {/* cruz */}
                  <path d="M32 10v6M28 16h8"/>
                  {/* cuerpo */}
                  <path d="M12 30l20-14 20 14v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V30z"/>
                  {/* puerta */}
                  <path d="M28 54V40h8v14"/>
                  {/* ventanas */}
                  <rect x="18" y="36" width="6" height="6" rx="1"/>
                  <rect x="40" y="36" width="6" height="6" rx="1"/>
                </g>
              </svg>
              <div class="text">
                <span class="time">4:00 p.m.</span>
                <span class="label">Ceremonia en la iglesia</span>
              </div>
            </div>
          </li>

          {/* 2) Recepción en el jardín (arco + puerta + hojas) */}
          <li>
            <div class="content">
              <svg class="icon" viewBox="0 0 64 64" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {/* arco */}
                  <path d="M14 48V30a18 18 0 0 1 36 0v18"/>
                  {/* puerta */}
                  <path d="M24 48V36h16v12"/>
                  <path d="M24 36h16M32 36v12"/>
                  {/* guirnaldas/hojas laterales */}
                  <path d="M18 28c3-6 8-9 14-9s11 3 14 9"/>
                  <path d="M18 32c1.5-3 4.5-5 8-5M46 27c3 0 5 2 6 5"/>
                </g>
              </svg>
              <div class="text">
                <span class="time">5:30 p.m.</span>
                <span class="label">Recepción en el jardín</span>
              </div>
            </div>
          </li>

          {/* 3) Comida y brindis (dos copas chocando + corazoncitos) */}
          <li>
            <div class="content">
              <svg class="icon" viewBox="0 0 64 64" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {/* copa izquierda */}
                  <path d="M20 12h12l-1.2 7a6 6 0 0 1-9.6 0L18.8 12H20z"/>
                  <path d="M26 22v10M22 36h8"/>
                  {/* copa derecha inclinada */}
                  <g transform="rotate(18 44 18)">
                    <path d="M38 12h10l-.9 6a5 5 0 0 1-8.2 0L38 12z"/>
                    <path d="M43 21v9M40 32h6"/>
                  </g>
                  {/* chispas/corazones */}
                  <path d="M30 9l1.3-2M34 9l1-2M26.5 9l-.9-2"/>
                  <path d="M40 10l2 2 2-2"/>
                </g>
              </svg>
              <div class="text">
                <span class="time">6:00 p.m.</span>
                <span class="label">Comida y brindis</span>
              </div>
            </div>
          </li>

          {/* 4) Baile de los novios (pareja bailando clara) */}
          <li>
            <div class="content">
              <svg class="icon" viewBox="0 0 64 64" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {/* cabezas */}
                  <circle cx="24" cy="16" r="3"/>
                  <circle cx="38" cy="15" r="3"/>
                  {/* abrazo */}
                  <path d="M26 19c3 2.4 9 2.4 12 0"/>
                  {/* él (piernas) */}
                  <path d="M22 20l-3 9 6 4-3 7"/>
                  {/* ella (vestido) */}
                  <path d="M40 20l3 6-2 4"/>
                  <path d="M36 27c4 1.4 8 4.8 9 10H30l-2.5-5"/>
                </g>
              </svg>
              <div class="text">
                <span class="time">7:00 p.m.</span>
                <span class="label">Baile de los novios</span>
              </div>
            </div>
          </li>

          {/* 5) Fiesta toda la noche (bola de disco + notas) */}
          <li>
            <div class="content">
              <svg class="icon" viewBox="0 0 64 64" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  {/* colgante */}
                  <path d="M32 10v6"/>
                  {/* disco */}
                  <circle cx="32" cy="30" r="10"/>
                  {/* rejilla */}
                  <path d="M22 30h20M32 20v20M26 22a14 14 0 0 0 12 0M26 38a14 14 0 0 1 12 0"/>
                  {/* destellos */}
                  <path d="M48 18l2-2M52 30h3M47 42l2 2M16 18l-2-2M12 30H9M17 42l-2 2"/>
                  {/* notas musicales */}
                  <path d="M49 24l6-1v5"/>
                  <path d="M50 40l6-1v5"/>
                </g>
              </svg>
              <div class="text">
                <span class="time">8:00 p.m.</span>
                <span class="label">Fiesta toda la noche</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
