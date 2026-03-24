import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">

        <div className="about__portrait reveal">
          <div className="about__portrait-frame">
            <div className="about__portrait-placeholder">
              <span>BG</span>
            </div>
            <div className="about__portrait-accent" />
          </div>
          <div className="about__credentials">
            <div className="about__cred-item">
              <span className="about__cred-label">License</span>
              <span className="about__cred-value">LCSW · Georgia</span>
            </div>
            <div className="about__cred-item">
              <span className="about__cred-label">Former Affiliation</span>
              <span className="about__cred-value">Emory University</span>
            </div>
            <div className="about__cred-item">
              <span className="about__cred-label">Format</span>
              <span className="about__cred-value">In Person & Telehealth</span>
            </div>
          </div>
        </div>

        <div className="about__text">
          <p className="about__eyebrow reveal">About Branka</p>
          <h2 className="about__heading reveal">
            Healing rooted in<br /><em>relationship</em>
          </h2>
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
          <blockquote className="about__quote reveal">
            <p>
              "Seeking therapy is an act of courage and self-love. Both our struggles
              and our healing are deeply connected to relationships — whether with others,
              or, most importantly, with ourselves."
            </p>
            <cite>— Branka Gajic, LCSW</cite>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
