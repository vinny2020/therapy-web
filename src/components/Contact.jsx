import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">

        <div className="contact__info reveal">
          <p className="contact__eyebrow">Get in Touch</p>
          <h2 className="contact__heading">
            Ready to take<br /><em>the first step?</em>
          </h2>
          <p className="contact__body">
            Reaching out is often the hardest part. Fill out the form and
            I'll be in touch within one to two business days to schedule
            a free 15-minute consultation.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-label">Phone</span>
              <a href="tel:+14705676082" className="contact__detail-value">(470) 567-6082</a>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <a href="mailto:branka.gajic@emory.edu" className="contact__detail-value">branka.gajic@emory.edu</a>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">Atlanta, GA · In Person & Telehealth</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Availability</span>
              <span className="contact__detail-value">By appointment</span>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✦</span>
              <h3>Thank you, {form.name}.</h3>
              <p>I'll be in touch soon. Reaching out takes courage — I'm glad you did.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required
                  placeholder="Jane Smith"
                  value={form.name} onChange={handle} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" required
                  placeholder="jane@example.com"
                  value={form.email} onChange={handle} />
              </div>
              <div className="form-group">
                <label htmlFor="message">What brings you here? <span>(optional)</span></label>
                <textarea id="message" name="message" rows="5"
                  placeholder="Share as much or as little as you'd like..."
                  value={form.message} onChange={handle} />
              </div>
              <button type="submit" className="btn btn--primary contact__submit">
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
