import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LINKS = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Smooth-scroll to a section. If we're on a project page, route home first.
  const goToSection = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-bg/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="rail flex items-center justify-between py-5"
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group font-display text-lg font-extrabold tracking-tightest text-text-primary"
        >
          Trogan
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => goToSection(l.id)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 hover:text-text-primary"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="mailto:eddiepascal@gmail.com"
              className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-text-primary transition-transform duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-text-primary transition-transform duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 origin-top bg-bg transition-all duration-500 ease-editorial md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="rail flex h-full flex-col justify-center gap-2">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => goToSection(l.id)}
                className="font-display text-5xl font-bold tracking-tightest text-text-primary"
              >
                <span className="mr-4 font-mono text-sm text-text-muted">
                  0{i + 1}
                </span>
                {l.label}
              </button>
            </li>
          ))}
          <li className="mt-8">
            <a
              href="mailto:eddiepascal@gmail.com"
              className="font-mono text-sm uppercase tracking-[0.2em] text-accent"
            >
              eddiepascal@gmail.com →
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
