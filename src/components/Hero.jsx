import './Hero.css'

/*
  Hero background: drop a warm, natural-light photo of the office at
  public/hero.jpg and it appears automatically behind the gradient.
*/
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__eyebrow">individual therapy · in person + online</p>
        <h1 className="hero__heading">A space to heal, grow, and return to yourself.</h1>
        <p className="hero__sub">
          Compassionate, relationship-centered therapy for adults navigating
          life's transitions, grief, anxiety, and the quiet work of becoming.
        </p>
        <a href="#/contact" className="btn btn--cream">Book a consultation</a>
      </div>
    </section>
  )
}
