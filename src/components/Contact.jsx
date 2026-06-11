import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Email', value: 'eddiepascal@gmail.com', href: 'mailto:eddiepascal04@gmail.com' },
  {
    label: 'LinkedIn',
    value: '/in/chiedozie-pascal',
    href: 'https://www.linkedin.com/in/chiedozie-pascal-a9506b248/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-36">
      <div className="rail">
        <p className="eyebrow mb-10">Contact — 04</p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,11vw,9rem)] font-black leading-[0.9] tracking-extra-tight text-text-primary"
        >
          Let's build
          <br />
          something<span className="text-accent">.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-md text-lg leading-relaxed text-text-muted">
              Have a product that needs sharp thinking and a builder who can take
              it from problem to production? I'd like to hear about it.
            </p>
            <a
              href="mailto:hello@trogan.design"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-accent px-7 py-4 font-mono text-sm uppercase tracking-[0.2em] text-bg transition-transform duration-300 hover:scale-[1.02]"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <ul className="md:col-span-5">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between border-t border-white/10 py-5 last:border-b"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                    {l.label}
                  </span>
                  <span className="font-display text-xl font-bold text-text-primary transition-colors group-hover:text-accent">
                    {l.value}
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
