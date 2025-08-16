import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false, //Este es importante pero tiene implicaciones
})
export class AppRoot {
 render() {
  return (
    <div class="scroll-container">
      <background-music />
      <floral-intro />
      <section-welcome />
      <section-couple />
      <section-details />
      <section-timeline />
      <photo-carousel />
      <countdown-timer />
      <section-location />
      <section-rsvp />
      <section-message />
      <guest-messages />
      <section-gifts/>
    </div>
  );
}
}
