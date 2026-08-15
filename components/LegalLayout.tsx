import type { ReactNode } from 'react'
import Link from 'next/link'
import { legalLinks, legalLastUpdated } from '@/data/legal'

type LegalLayoutProps = {
  title: string
  lede: string
  children: ReactNode
  updated?: string
}

export default function LegalLayout({
  title,
  lede,
  children,
  updated = legalLastUpdated,
}: LegalLayoutProps) {
  return (
    <main className="legal-page">
      <section className="container legal-page__hero">
        <p className="legal-page__eyebrow">Legal</p>
        <h1 className="legal-page__title">{title}</h1>
        <p className="legal-page__lede">{lede}</p>
        <p className="legal-page__updated">Last updated: {updated}</p>
      </section>

      <section className="container legal-page__body">
        <aside className="legal-page__nav" aria-label="Legal pages">
          <p className="legal-page__nav-label">Documents</p>
          <nav>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="legal-page__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="legal-prose">{children}</div>
      </section>
    </main>
  )
}
