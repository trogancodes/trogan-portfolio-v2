import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects, { featuredSlugs, getProject } from '../data/projects'
import ProjectMockup from './ProjectMockup'

// Asymmetric spans — deliberately not an equal-height card row.
const LAYOUT = {
  cyclepay: 'lg:col-span-6 min-h-[420px] lg:min-h-[560px]',
  'safewatch-ng': 'lg:col-span-6 min-h-[420px]',
  'swift-passkit': 'lg:col-span-6 min-h-[400px]',
  energyiq: 'lg:col-span-12 min-h-[400px]',
}

function Tile({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className={`group relative ${LAYOUT[project.slug] ?? 'lg:col-span-6 min-h-[400px]'}`}
    >
      <Link
        to={`/project/${project.slug}`}
        className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition-colors duration-500 hover:border-white/25 sm:p-8"
      >
        {/* Top meta */}
        <div className="relative z-20 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            {String(index + 1).padStart(2, '0')} / {project.tags.join(' · ')}
          </span>
          <span className="font-mono text-xs text-text-muted">{project.year}</span>
        </div>

        {/* Title + descriptor */}
        <div className="relative z-20 mt-auto">
          <h3 className="font-display text-4xl font-bold leading-none tracking-tightest text-text-primary transition-transform duration-500 ease-editorial group-hover:-translate-y-1 sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
            {project.descriptor}
          </p>
          <span
            className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: project.accent }}
          >
            View case study →
          </span>
        </div>

        {/* Preview slides up from the bottom on hover (pure CSS transform) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[62%] translate-y-full transition-transform duration-700 ease-editorial group-hover:translate-y-0"
        >
          <div className="h-full w-full overflow-hidden rounded-t-2xl border-t border-white/10 shadow-2xl">
            <ProjectMockup slug={project.slug} accent={project.accent} />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function Work() {
  const featured = featuredSlugs.map(getProject).filter(Boolean)

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="rail">
        <header className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Selected work — 01</p>
            <h2 className="font-display text-5xl font-extrabold tracking-tightest text-text-primary sm:text-6xl">
              The work,
              <br />
              <span className="text-text-muted">end to end.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-text-muted">
            Four products taken from strategy through design system to shipped
            frontend — each built for a real African market constraint.
          </p>
        </header>

     <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {featured.map((p, i) => (
            <Tile key={p.slug} project={p} index={i} />
          ))}
        </div>

        <p className="mt-10 font-mono text-xs text-text-muted">
          {projects.length} case studies · more on request
        </p>
      </div>
    </section>
  )
}
