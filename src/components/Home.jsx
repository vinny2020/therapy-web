import Hero from './Hero'
import './Home.css'

const focus = [
  {
    word: 'Anxiety',
    tone: 'forest',
    title: 'Anxiety & Depression',
    body: 'Whether it\'s persistent worry, low mood, or feeling stuck, therapy offers tools and insight to help you find ground and move forward with more ease.',
  },
  {
    word: 'Grief',
    tone: 'slate',
    title: 'Grief & Loss',
    body: 'Grief takes many forms. I offer a compassionate, unhurried space to honor what you\'ve lost and gently reconnect with life and meaning.',
  },
  {
    word: 'Change',
    tone: 'rose',
    title: 'Life Transitions',
    body: 'Career changes, loss, identity shifts, new relationships — major transitions can unsettle us. This is a space to process change at your own pace.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Intro: portrait + welcome ── */}
      <section className="intro">
        <div className="container intro__inner">
          <figure className="intro__figure reveal">
            <img src="/branka-portrait.jpg" alt="Branka Gajic, LCSW"
                 width="800" height="800" loading="lazy" decoding="async" />
            <figcaption>Branka Gajic, LCSW · Atlanta, GA</figcaption>
          </figure>

          <div className="intro__text">
            <h2 className="intro__heading reveal">How I Can Help</h2>
            <p className="reveal">
              I'm Branka Gajic, a Licensed Clinical Social Worker based in Atlanta, Georgia.
              I work with adults navigating anxiety, depression, life transitions, grief, and
              relationship challenges.
            </p>
            <p className="reveal">
              My approach is relational and collaborative — we explore not just the symptoms,
              but the stories, patterns, and connections that shape who you are.
            </p>
            <p className="reveal">
              Sessions are available in person in Atlanta and via secure telehealth
              throughout Georgia.
            </p>
            <a href="#/about" className="btn btn--primary reveal">About Branka</a>
          </div>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section className="quote">
        <div className="container reveal">
          <blockquote className="quote__text">
            “Seeking therapy is an act of courage and self-love. Both our struggles
            and our healing are deeply connected to relationships — whether with others,
            or, most importantly, with ourselves.”
          </blockquote>
          <p className="quote__cite">— Branka Gajic, LCSW</p>
        </div>
      </section>

      {/* ── Areas of focus ── */}
      <section className="focus pastel">
        <div className="container">
          <h2 className="focus__heading reveal">Areas of Focus</h2>
          {focus.map((f, i) => (
            <article key={f.title}
                     className={`focus-row reveal${i % 2 ? ' focus-row--flip' : ''}`}>
              <div className={`focus-row__tile focus-row__tile--${f.tone}`} aria-hidden="true">
                <span>{f.word}</span>
              </div>
              <div className="focus-row__card">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <a href="#/services" className="btn btn--primary">Learn more</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Call to action ── */}
      <section className="cta">
        <div className="container">
          <div className="cta__box reveal">
            <h2>Ready to take the first step?</h2>
            <p>
              Reaching out is often the hardest part. Schedule a free 15-minute
              consultation and we'll see if we're a good fit.
            </p>
            <a href="#/contact" className="btn btn--dark">Book now</a>
          </div>
        </div>
      </section>
    </>
  )
}
