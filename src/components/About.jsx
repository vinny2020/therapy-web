import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">

        <figure className="about__portrait reveal">
          <img
            className="about__portrait-img"
            src="/branka-portrait.jpg"
            alt="Branka Gajic, LCSW"
            width="800"
            height="800"
            loading="eager"
            decoding="async"
          />
          <figcaption className="about__credentials">
            <span><b>License</b> LCSW · Georgia</span>
            <span><b>Former Affiliation</b> Emory University</span>
            <span><b>Format</b> In Person & Telehealth</span>
          </figcaption>
        </figure>

        <div className="about__text">
          <p className="about__eyebrow reveal">about branka</p>
          <h2 className="about__heading reveal">Healing rooted in relationship</h2>
          <p className="about__body reveal">
            I'm Branka Gajic, a Licensed Clinical Social Worker based in Atlanta, Georgia.
            I work with adults navigating anxiety, depression, life transitions, grief, and
            relationship challenges — offering a warm, reflective space where real change becomes possible.
          </p>
          <p className="about__body reveal">
            As a former Staff Clinician at Emory University's Center for Counseling and Wellbeing,
            I bring both clinical depth and genuine care to every session. My approach is
            relational and collaborative — we explore not just the symptoms, but the stories,
            patterns, and connections that shape who you are.
          </p>
          <p className="about__body reveal">
            “Seeking therapy is an act of courage and self-love. Both our struggles
            and our healing are deeply connected to relationships — whether with others,
            or, most importantly, with ourselves.”
          </p>
          <a href="#/contact" className="btn btn--primary reveal">Book a consultation</a>
        </div>

      </div>
    </section>
  )
}
