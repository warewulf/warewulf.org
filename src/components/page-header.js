import * as React from "react"

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <div className="border-b border-gray-200 bg-gradient-to-b from-brand-50 to-white dark:border-white/10 dark:from-brand-900/40 dark:to-brand-950">
      <div className="container-page py-14 sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="font-display mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg text-ink-soft dark:text-gray-300">{children}</p>}
      </div>
    </div>
  )
}
