import { useState } from 'react'
import './Nav.css'

const left = ['About', 'Services', 'Philosophy']
const right = ['Contact']

export default function Nav({ page }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const link = (l) => {
    const key = l.toLowerCase()
    return (
      <a key={l} href={`#/${key}`}
         className={`nav__link${page === key ? ' nav__link--active' : ''}`}
         aria-current={page === key ? 'page' : undefined}
         onClick={close}>
        {l}
      </a>
    )
  }

  return (
    <header className="nav">
      <div className="nav__inner container">
        <nav className="nav__side nav__side--left" aria-label="Primary">
          {left.map(link)}
        </nav>

        <a href="#/" className="nav__logo" onClick={close}>
          Integration Practice Psychotherapy LLC
        </a>

        <nav className="nav__side nav__side--right" aria-label="Secondary">
          {right.map(link)}
          <a href="#/contact" className="nav__link nav__link--cta" onClick={close}>
            Begin Today
          </a>
        </nav>

        <button className={`nav__burger${open ? ' nav__burger--open' : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>

      <nav className={`nav__mobile${open ? ' nav__mobile--open' : ''}`} aria-label="Mobile">
        {[...left, ...right].map(link)}
        <a href="#/contact" className="btn btn--primary" onClick={close}>Begin Today</a>
      </nav>
    </header>
  )
}
