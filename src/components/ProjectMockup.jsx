// Hand-built abstract mockups per project — no stock imagery, no placeholders.
// Each is a tiny stylised interface keyed to what the product actually does.
import cycleImg from '../assests/cycle.png'
import dashboardImg from '../assests/Dashboard.png'
import swiftImg from '../assests/swift.png'
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

function CyclePay() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0c0c]">
      <img
        src={cycleImg}
        alt="CyclePay app screenshot"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}


function Swift() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0c0c]">
      <img
        src={swiftImg}
        alt="Swift PassKit screenshot"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}

function EnergyIQ() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0c0c]">
      <img
        src={dashboardImg}
        alt="EnergyIQ dashboard screenshot"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
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
