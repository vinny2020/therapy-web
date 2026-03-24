import './Philosophy.css'

const pillars = [
  { num: '01', title: 'Relational', body: 'Healing happens in connection. Our therapeutic relationship is itself a place of practice — one of safety, respect, and genuine care.' },
  { num: '02', title: 'Collaborative', body: 'You are the expert on your own life. I bring clinical knowledge; you bring your story. Together we chart the path forward.' },
  { num: '03', title: 'Compassionate', body: 'There is no judgment here. Whatever you are carrying, you deserve a space where you feel seen, heard, and accepted as you are.' },
  { num: '04', title: 'Evidence-Based', body: 'I draw on approaches grounded in research — including psychodynamic therapy, CBT, and mindfulness-informed techniques — adapted to your unique needs.' },
]

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy__top">
        <div className="container">
          <p className="philosophy__eyebrow reveal">My Approach</p>
          <h2 className="philosophy__heading reveal">
            How we work <em>together</em>
          </h2>
          <p className="philosophy__intro reveal">
            Therapy is not a one-size-fits-all process. My practice is guided by
            four principles that shape every conversation we have.
          </p>
        </div>
      </div>

      <div className="container philosophy__pillars">
        {pillars.map((p, i) => (
          <div key={i} className="pillar reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="pillar__num">{p.num}</span>
            <div className="pillar__divider" />
            <h3 className="pillar__title">{p.title}</h3>
            <p className="pillar__body">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="container philosophy__process">
        <h3 className="philosophy__process-heading reveal">What to expect</h3>
        <div className="philosophy__steps">
          {[
            { step: 'Free Consultation', desc: 'A 15-minute call to see if we\'re a good fit — no commitment required.' },
            { step: 'First Session', desc: 'We get to know each other. You share what\'s brought you here; I listen deeply.' },
            { step: 'Ongoing Work', desc: 'Weekly or bi-weekly sessions at a pace that works for your life and goals.' },
            { step: 'Growth & Closure', desc: 'We celebrate progress, navigate setbacks, and when you\'re ready — honor completion.' },
          ].map((s, i) => (
            <div key={i} className="process-step reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="process-step__num">{i + 1}</div>
              <div>
                <p className="process-step__title">{s.step}</p>
                <p className="process-step__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
