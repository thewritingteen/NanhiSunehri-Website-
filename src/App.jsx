import { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Ambient from './components/Ambient.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About from './components/About.jsx'
import LaunchForm from './components/LaunchForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('ns-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const favicon = document.getElementById('site-favicon')
    if (favicon) favicon.href = theme === 'light' ? '/favicon-light.png' : '/favicon-dark.png'
    try {
      localStorage.setItem('ns-theme', theme)
    } catch {}
  }, [theme])

  // loader: hold for a beat after the page is ready, then fade
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400)
    return () => clearTimeout(t)
  }, [])

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Loader done={loaded} />
      <Ambient />
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main id="top">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <About />
        <LaunchForm />
      </main>
      <Footer />
    </>
  )
}
