const STEPS = [
  {
    n: '01',
    title: 'Discover',
    body: 'I start in the field, not in Figma. Real users, real constraints — the kind that only show up on a low-end phone with two bars of signal.',
  },
  {
    n: '02',
    title: 'Define',
    body: 'I narrow the noise down to the one problem worth solving, then write the success metric before a single screen exists.',
  },
  {
    n: '03',
    title: 'Design',
    body: 'I build a system, not screens — tokens, components, and rules that hold up across the whole product and survive handoff.',
  },
  {
    n: '04',
    title: 'Deploy',
    body: 'I ship it myself in React. Designing in code closes the gap between the prototype and the thing people actually use.',
  },
]

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
      <div className="rail">
        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Process — 03</p>
            <h2 className="font-display text-5xl font-extrabold tracking-tightest text-text-primary sm:text-6xl">
              How the work
              <br />
              <span className="text-text-muted">gets made.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-text-muted">
            Four moves, every project. Plain language, no theatre — drag or
            scroll across on desktop.
          </p>
        </header>
      </div>

      {/* Horizontal scroll track on desktop; stacked on mobile */}
      <div className="rail">
 {/* Auto-scrolling carousel */}
<div className="overflow-hidden relative">
  <ul
    className="flex gap-5 w-max"
    style={{
      animation: 'scroll-left 20s linear infinite',
    }}
    onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
    onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
  >
    {[...STEPS, ...STEPS].map((step, i) => (
      <li
        key={i}
        className="group relative flex shrink-0 flex-col justify-between rounded-2xl border border-white/10 p-6 w-[280px] min-h-[200px]"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-accent">{step.n}</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">Step</span>
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold tracking-tightest text-text-primary">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.body}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
</div>
    </section>
  )
}
