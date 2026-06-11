import { motion } from 'framer-motion'

const SKILLS = [
  'Design Systems',
  'Figma',
  'React / Vite',
  'Tailwind CSS',
  'Supabase',
  'IoT UX',
  'Product Strategy',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
      <div className="rail">
        <p className="eyebrow mb-14">About — 02</p>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — bio */}
          <div className="lg:col-span-7">
            {/* Geometric initial placeholder (no photo supplied) */}
            <div className="mb-10 flex items-center gap-5">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-highlight">
                <span className="font-display text-4xl font-black text-text-primary">T</span>
                <span className="absolute bottom-0 right-0 h-6 w-6 -translate-x-1 -translate-y-1 rounded-full bg-accent" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-text-primary">Trogan</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                  Designer / Developer
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 font-body text-xl leading-relaxed text-text-primary/85 sm:text-2xl sm:leading-relaxed"
            >
              <p>
                I'm a UX/product designer and developer working at the seam
                where strategy, design systems, and frontend code meet — most of
                it through an African and Nigerian market lens.
              </p>
              <p className="text-text-muted">
                I don't hand off flat screens. I define the problem, design the
                system, and build the thing — so the product that ships is the
                product that was designed. Constraints like low-end Android,
                patchy power, and cash-first habits aren't edge cases to me;
                they're the brief.
              </p>
            </motion.div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/5 px-5 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-primary">
                Currently open to product design roles &amp; freelance projects
              </span>
            </div>
          </div>

          {/* Right — skills & tools */}
          <div className="lg:col-span-5 lg:pl-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Skills &amp; tools
            </p>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {SKILLS.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-center justify-between py-4"
                >
                  <span className="font-display text-2xl font-bold tracking-tightest text-text-primary transition-colors group-hover:text-accent">
                    {skill}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 p-4">
                <p className="font-display text-3xl font-black text-text-primary">6+</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                  Products shipped
                </p>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="font-display text-3xl font-black text-text-primary">E2E</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                  Strategy → code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
