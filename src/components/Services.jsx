import './Services.css'

const services = [
  {
    icon: '◌',
    title: 'Individual Therapy',
    desc: 'One-on-one sessions tailored to you. Together we explore the patterns, emotions, and experiences that shape your life, building toward clarity and relief.'
  },
  {
    icon: '◎',
    title: 'Anxiety & Depression',
    desc: 'Whether it\'s persistent worry, low mood, or feeling stuck, therapy offers tools and insight to help you find ground and move forward with more ease.'
  },
  {
    icon: '◑',
    title: 'Life Transitions',
    desc: 'Career changes, loss, identity shifts, new relationships — major transitions can unsettle us. This is a space to process change at your own pace.'
  },
  {
    icon: '◐',
    title: 'Grief & Loss',
    desc: 'Grief takes many forms. I offer a compassionate, unhurried space to honor what you\'ve lost and gently reconnect with life and meaning.'
  },
  {
    icon: '◉',
    title: 'Relationship Patterns',
    desc: 'Explore how early experiences shape the way you connect with others — and how greater self-understanding can open the door to healthier relationships.'
  },
  {
    icon: '○',
    title: 'Self-Discovery',
    desc: 'Sometimes therapy isn\'t about crisis — it\'s about growth. Deepen your understanding of yourself, your values, and the life you want to build.'
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <p className="services__eyebrow reveal">How I Can Help</p>
          <h2 className="services__heading reveal">
            Areas of <em>focus</em>
          </h2>
          <p className="services__intro reveal">
            Sessions are available both in person in Atlanta, GA and via secure
            telehealth — making quality care accessible wherever you are in Georgia.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
