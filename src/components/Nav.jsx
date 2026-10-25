import { useState, useEffect } from 'react'
import './Nav.css'

const links = ['About', 'Services', 'Philosophy', 'Contact']

export default function Nav({ page }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Inner pages have no full-bleed hero behind the nav, so keep it solid.
  const solid = scrolled || page !== 'home'

  return (
    <header className={`nav${solid ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#/" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__logo-name">Integration Practice Psychotherapy LLC</span>
        </a>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`}>
          {links.map(l => {
            const key = l.toLowerCase()
            return (
              <a key={l} href={`#/${key}`}
                 className={`nav__link${page === key ? ' nav__link--active' : ''}`}
                 aria-current={page === key ? 'page' : undefined}
                 onClick={() => setOpen(false)}>
                {l}
              </a>
            )
          })}
          <a href="#/contact" className="nav__cta" onClick={() => setOpen(false)}>
            Begin Today
          </a>
        </nav>

        <button className="nav__burger" onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
