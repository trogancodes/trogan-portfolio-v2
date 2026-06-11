import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'

// Reset scroll on navigation. If the Nav sent us home with a target section
// (state.scrollTo), jump to it once the home page has mounted instead.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      // Wait a frame so the section exists in the DOM before scrolling.
      requestAnimationFrame(() => {
        const el = document.getElementById(target)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.state])

  return null
}

function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Process />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
