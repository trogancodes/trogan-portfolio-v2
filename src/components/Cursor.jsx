import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// A custom cursor: a precise acid-lime dot plus a soft trailing ring that
// eases toward the pointer, leaving a short trail. Disabled entirely for
// touch devices and for users who prefer reduced motion.
export default function Cursor() {
  const reduce = useReducedMotion()
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (!finePointer || reduce) {
      document.body.classList.remove('custom-cursor-active')
      setEnabled(false)
      return
    }

    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    // Target (true pointer) vs ring (eased follower).
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { ...target }
    let raf = 0
    let hovering = false

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }

    // Grow the ring over interactive elements.
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        hovering = true
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        hovering = false
      }
    }

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      if (ringRef.current) {
        const s = hovering ? 2.2 : 1
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${s})`
        ringRef.current.style.opacity = hovering ? '0.9' : '0.45'
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, true)
    document.addEventListener('mouseout', onOut, true)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver, true)
      document.removeEventListener('mouseout', onOut, true)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [reduce])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      {/* eased trailing ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 rounded-full border border-accent will-change-transform"
        style={{ transition: 'opacity 0.25s ease' }}
      />
      {/* precise dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent will-change-transform"
      />
    </div>
  )
}
