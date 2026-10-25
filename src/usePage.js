import { useEffect, useState } from 'react'

export const PAGES = ['home', 'about', 'services', 'philosophy', 'contact']

function readPage() {
  const key = window.location.hash.replace(/^#\/?/, '').toLowerCase()
  return PAGES.includes(key) ? key : 'home'
}

// Tiny hash router: "#/about" -> "about". Works with back/forward and deep links.
export default function usePage() {
  const [page, setPage] = useState(readPage)

  useEffect(() => {
    const onChange = () => {
      setPage(readPage())
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return page
}
