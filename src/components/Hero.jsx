import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <div className="hero__leaf hero__leaf--1" />
        <div className="hero__leaf hero__leaf--2" />
        <div className="hero__leaf hero__leaf--3" />
        <div className="hero__sprig hero__sprig--1" />
        <div className="hero__sprig hero__sprig--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Individual Therapy · In Person & Online</p>
          <h1 className="hero__heading">
            A space to heal,<br />
            <em>grow, and return<br />to yourself.</em>
          </h1>
          <p className="hero__sub">
            Compassionate, relationship-centered therapy for adults navigating
            life's transitions, grief, anxiety, and the quiet work of becoming.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Schedule a Consultation</a>
            <a href="#about" className="btn btn--ghost">Meet Branka</a>
          </div>
        </div>

        <div className="hero__badge-wrap">
          <div className="hero__badge">
            <div className="hero__badge-ring" />
            <div className="hero__badge-inner">
              <span className="hero__badge-name">Branka Gajic</span>
              <span className="hero__badge-title">LCSW</span>
              <span className="hero__badge-loc">Atlanta, GA · In Person & Telehealth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  )
}
