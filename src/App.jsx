import { useEffect } from 'react'
import usePage from './usePage'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

const VIEWS = {
  home: Hero,
  about: About,
  services: Services,
  philosophy: Philosophy,
  contact: Contact,
}

// Re-run whenever the page changes so newly mounted sections animate in.
function useScrollReveal(page) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [page])
}

export default function App() {
  const page = usePage()
  const View = VIEWS[page]
  useScrollReveal(page)

  return (
    <>
      <Nav page={page} />
      <main className="page" key={page}>
        <View />
      </main>
      <Footer />
    </>
  )
}
