import { ShieldCheck } from 'lucide-react'

interface CheckListProps {
  items: string[]
}

export default function CheckList({ items }: CheckListProps) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          <ShieldCheck size={18} className="text-gold" /> {item}
        </li>
      ))}
    </ul>
  )
}
