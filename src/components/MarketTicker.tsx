import { tickerItems } from '../data/portfolio'

/* Sits between Hero (white) and About (dark) — parchment band */
export default function MarketTicker() {
  const items = [...tickerItems, ...tickerItems, ...tickerItems]
  return (
    <div className="tile-parchment overflow-hidden" style={{ padding: '12px 0', borderTop: '1px solid #e0e0e0' }}>
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {items.map((tag, i) => (
          <div key={i} className="flex items-center gap-4 px-8 shrink-0">
            <span className="h-1 w-1 rounded-full" style={{ background: '#0066cc', flexShrink: 0 }} />
            <span className="t-nav" style={{ color: '#6e6e73', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
