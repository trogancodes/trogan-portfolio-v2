import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import { getProject, getAdjacent } from '../data/projects'
import ProjectMockup from '../components/ProjectMockup'

// Shared reveal-on-scroll wrapper, tuned to the site's editorial easing.
function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  // Unknown slug → send back home (App also catches this, but be explicit).
  if (!project) return <Navigate to="/" replace />

  const { prev, next } = getAdjacent(slug)
  const { name, year, tags, accent, summary, context, overview, sections, facts, link } =
    project

  return (
    <main className="pt-28">
      {/* Back link */}
      <div className="rail">
        <Link
          to="/"
          state={{ scrollTo: 'work' }}
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-text-primary"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          All work
        </Link>
      </div>

      {/* Hero */}
      <header className="rail mt-12 sm:mt-16">
        <Reveal>
          <p
            className="font-mono text-xs uppercase tracking-[0.25em]"
            style={{ color: accent }}
          >
            {tags.join(' · ')}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-[clamp(3rem,12vw,9rem)] font-black leading-[0.86] tracking-extra-tight text-text-primary">
            {name}
            <span style={{ color: accent }}>.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex max-w-4xl flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-xl font-body text-xl leading-relaxed text-text-primary/85">
              {summary}
            </p>
            <span className="shrink-0 font-mono text-sm text-text-muted">{year}</span>
          </div>
        </Reveal>
      </header>

      {/* Context grid */}
      <section className="rail mt-16">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {[
              ['Role', context.role],
              ['Timeline', context.timeline],
              ['Platform', context.platform],
              ['Stack', context.stack],
            ].map(([k, v]) => (
              <div key={k} className="bg-bg p-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                  {k}
                </dt>
                <dd className="mt-3 font-display text-base font-bold leading-snug tracking-tightest text-text-primary">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Visual mockup band */}
      <section className="rail mt-16">
        <Reveal>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 sm:aspect-[2/1]">
            <ProjectMockup slug={slug} accent={accent} />
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="rail mt-20 sm:mt-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">Overview</p>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-9">
            <p className="font-display text-2xl font-medium leading-snug tracking-tightest text-text-primary sm:text-3xl sm:leading-snug">
              {overview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Narrative sections */}
      <section className="rail mt-20 sm:mt-28">
        <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {sections.map((s, i) => (
            <Reveal key={s.kicker} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-6 bg-bg p-8 sm:p-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <span
                    className="font-mono text-xs uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, '0')} — {s.kicker}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest text-text-primary sm:text-4xl">
                    {s.title}
                  </h2>
                </div>
                <div className="lg:col-span-8 lg:pt-1">
                  <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Facts + live link */}
      <section className="rail mt-20 sm:mt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">At a glance</p>
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {facts.map((f) => (
                <div key={f.k} className="flex items-center justify-between py-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                    {f.k}
                  </dt>
                  <dd className="font-display text-lg font-bold tracking-tightest text-text-primary">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {link && (
            <Reveal delay={0.05} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-surface p-8">
                <div>
                  <p className="eyebrow mb-4">Live</p>
                  <p className="font-display text-2xl font-bold leading-snug tracking-tightest text-text-primary">
                    This one shipped. Go see it running.
                  </p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 self-start rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-transform duration-300 hover:scale-[1.02]"
                  style={{ background: accent }}
                >
                  Visit live site
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Prev / next pager */}
      <nav className="rail mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-32 sm:grid-cols-2">
        <Link
          to={`/project/${prev.slug}`}
          className="group bg-bg p-8 transition-colors hover:bg-surface sm:p-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            ← Previous
          </span>
          <p className="mt-3 font-display text-3xl font-bold tracking-tightest text-text-primary transition-colors group-hover:text-accent">
            {prev.name}
          </p>
        </Link>
        <Link
          to={`/project/${next.slug}`}
          className="group bg-bg p-8 text-right transition-colors hover:bg-surface sm:p-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Next →
          </span>
          <p className="mt-3 font-display text-3xl font-bold tracking-tightest text-text-primary transition-colors group-hover:text-accent">
            {next.name}
          </p>
        </Link>
      </nav>

      {/* Soft CTA back to contact */}
      <section className="rail mb-24 mt-24 text-center sm:mb-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Like what you see?
          </p>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="mt-5 inline-block font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-extra-tight text-text-primary transition-colors hover:text-accent"
          >
            Let's talk<span className="text-accent">.</span>
          </Link>
        </Reveal>
      </section>
    </main>
  )
}
