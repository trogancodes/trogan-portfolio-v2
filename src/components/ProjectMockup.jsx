// Hand-built abstract mockups per project — no stock imagery, no placeholders.
// Each is a tiny stylised interface keyed to what the product actually does.

function Frame({ children, accent }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0c0c]">
      {/* faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.18 }}
      />
      <div className="relative h-full w-full p-5">{children}</div>
    </div>
  )
}

function CyclePay({ accent }) {
  return (
    <Frame accent={accent}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/50">
          <span>Wallet</span>
          <span style={{ color: accent }}>● settled</span>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Weight captured
          </p>
          <p className="font-display text-4xl font-extrabold text-white">
            12.4<span className="text-base text-white/50"> kg</span>
          </p>
          <div className="mt-3 flex items-end gap-1.5">
            {[40, 65, 30, 80, 55, 95, 70, 45].map((h, i) => (
              <span
                key={i}
                className="w-3 rounded-sm"
                style={{ height: `${h}%`, background: accent, opacity: 0.35 + i * 0.07 }}
              />
            ))}
          </div>
        </div>
        <div
          className="flex items-center justify-between rounded-lg px-3 py-2.5"
          style={{ background: accent }}
        >
          <span className="font-mono text-[11px] font-medium text-black">Credited</span>
          <span className="font-display text-sm font-bold text-black">₦ 4,960</span>
        </div>
      </div>
    </Frame>
  )
}



function Swift({ accent }) {
  return (
    <Frame accent={accent}>
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="rounded-2xl bg-white p-3">
          {/* faux QR */}
          <div
            className="grid h-24 w-24 gap-0.5"
            style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}
          >
            {Array.from({ length: 49 }).map((_, i) => (
              <span
                key={i}
                style={{ background: (i * 7 + i * i) % 3 === 0 ? '#000' : 'transparent' }}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: accent }}>
            Event Pass · Valid
          </p>
          <p className="font-display text-sm font-bold text-white">Lagos Founders Mixer</p>
        </div>
      </div>
    </Frame>
  )
}

function EnergyIQ({ accent }) {
  return (
    <Frame accent={accent}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/50">
          <span>Cost / kWh</span>
          <span style={{ color: accent }}>↓ switch to grid</span>
        </div>
        <svg viewBox="0 0 200 80" className="w-full" fill="none" preserveAspectRatio="none">
          <polyline
            points="0,60 25,55 50,40 75,48 100,30 125,38 150,18 175,26 200,12"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,70 25,66 50,68 75,60 100,62 125,55 150,58 175,50 200,52"
            stroke="#fff"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </svg>
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Grid', '₦68'],
            ['Gen', '₦240'],
            ['Inv', '₦0'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/10 px-2 py-2">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{k}</p>
              <p className="text-xs font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

const MAP = {
  cyclepay: CyclePay,
  'swift-passkit': Swift,
  energyiq: EnergyIQ,
}

export default function ProjectMockup({ slug, accent = '#C8F542' }) {
  const Cmp = MAP[slug]
  if (!Cmp) return <Frame accent={accent} />
  return <Cmp accent={accent} />
}
