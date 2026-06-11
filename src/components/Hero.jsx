import { motion, useReducedMotion } from 'framer-motion'
import portrait from '../assests/trogan.jpg'

export default function Hero() {
  const reduce = useReducedMotion()

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.1 },
    },
  }

  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="top"
     className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-20 pb-10"
    >

      {/* ── Portrait image right panel ── */}
      <div className="pointer-events-none relative md:absolute md:right-0 md:top-0 md:h-full w-full md:w-[45%] h-64 mt-8 md:mt-0">
        <motion.img
          src={portrait}
          alt="Trogan — UX/Product Designer and Developer"
         className="h-full w-full object-cover object-top md:object-top object-center"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
        {/* left edge fade — blends into dark bg */}
        <div className="absolute inset-y-0 left-0 z-10 w-56 bg-gradient-to-r from-[#0D121C] via-[#0D121C]/60 to-transparent" />
        {/* bottom edge fade */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-[#0D121C] to-transparent" />
        {/* top edge fade */}
        <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#0D121C] to-transparent" />
        {/* overall dark tint so photo doesn't compete with text */}
        <div className="absolute inset-0 bg-[#0D121C]/25" />
      </div>

      {/* ── Decorative line — sits above portrait ── */}
   
      {/* ── Text content — sits above everything ── */}
     <div className="rail relative z-30 md:max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-8 flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          Portfolio — Trogan / 2026
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="select-none leading-[0.86]"
        >
          <motion.span
            variants={word}
            className="block text-[clamp(3.5rem,13vw,11rem)] font-extrabold tracking-extra-tight text-text-primary"
          >
            Product.
          </motion.span>
          <motion.span
            variants={word}
            className="block text-[clamp(3.5rem,13vw,11rem)] font-normal italic tracking-extra-tight text-text-primary/40"
            style={{ fontWeight: 400 }}
          >
            Design.
          </motion.span>
          <motion.span
            variants={word}
            className="block text-[clamp(3.5rem,13vw,11rem)] font-black tracking-extra-tight text-text-primary"
          >
            Code<span className="text-accent">.</span>
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex max-w-2xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md font-body text-lg leading-relaxed text-text-primary/80">
            UX/Product Designer &amp; Developer. Building for Africa's next
            generation of products.
          </p>

          <button
            onClick={scrollToWork}
            className="group flex shrink-0 items-center gap-3 font-mono text-sm uppercase tracking-widest"
          >
            See the work
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-accent">
              ↓
            </span>
          </button>
        </motion.div>
      </div>

      {/* ── Bottom meta rail ── */}
      <div className="rail relative z-30 mt-20 hidden items-center justify-between border-t border-white/10 pt-5 md:flex">
        {['Product Strategy', 'Design Systems', 'Frontend Engineering'].map((t) => (
          <span key={t} className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            {t}
          </span>
        ))}
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          Lagos, NG
        </span>
      </div>

    </section>
  )
}