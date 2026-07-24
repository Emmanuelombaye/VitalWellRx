interface SectionEyebrowProps {
  children: React.ReactNode
}

export default function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <span
      className="text-gold"
      style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}
    >
      {children}
    </span>
  )
}
