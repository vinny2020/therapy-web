import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Services', 'Philosophy', 'Contact']

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-name">Branka Gajic</span>
          <span className="nav__logo-cred">LCSW</span>
        </a>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav__link"
               onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>
            Begin Today
          </a>
        </nav>

        <button className="nav__burger" onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
