import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Branka Gajic</span>
          <span className="footer__cred">LCSW · Licensed Clinical Social Worker</span>
          <p className="footer__tagline">
            A space for healing, growth, and returning to yourself.
          </p>
        </div>

        <nav className="footer__nav">
          {['About', 'Services', 'Philosophy', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">{l}</a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href="tel:+14705676082" className="footer__link">(470) 567-6082</a>
          <a href="mailto:branka.gajic@emory.edu" className="footer__link">branka.gajic@emory.edu</a>
          <span className="footer__loc">Atlanta, GA · In Person & Telehealth</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__legal">
            © {new Date().getFullYear()} Branka Gajic, LCSW. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            This website is for informational purposes only and does not constitute
            medical advice or establish a therapeutic relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
