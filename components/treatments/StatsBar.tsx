import type { StatItem } from '@/types'

interface StatsBarProps {
  stats: StatItem[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '2.5rem 0',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-4 gap-6" style={{ textAlign: 'center' }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-gold)' }}>{stat.val}</div>
              <div style={{ fontSize: '0.875rem', color: '#94A3B8', fontWeight: 600, marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
