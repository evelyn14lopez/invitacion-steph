import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'countdown-timer',
  styleUrl: 'countdown-timer.css',
  shadow: false,
})
export class CountdownTimer {
  @State() timeLeft = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  };

  private targetDate = new Date('2025-12-14T16:00:00').getTime();
  private intervalId: any;

  componentWillLoad() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      clearInterval(this.intervalId);
      this.timeLeft = {
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
      };
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    this.timeLeft = { days, hours, minutes, seconds };
  }

  render() {
    return (
      <section class="section">
        <h2>Faltan...</h2>
        <div class="countdown">
          <div>
            <div>{this.timeLeft.days}</div>
            <span>Días</span>
          </div>
          <div>
            <div>{this.timeLeft.hours}</div>
            <span>Horas</span>
          </div>
          <div>
            <div>{this.timeLeft.minutes}</div>
            <span>Minutos</span>
          </div>
          <div>
            <div>{this.timeLeft.seconds}</div>
            <span>Segundos</span>
          </div>
        </div>
      </section>
    );
  }
}
