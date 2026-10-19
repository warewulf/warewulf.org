import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import LogoDark from "../images/logo-dark.svg"
import { links, LATEST_DOCS, LATEST_RELEASE } from "../data/site"

const columns = [
  {
    title: "Project",
    items: [
      { name: "About", to: "/about/" },
      { name: "News", to: "/news/" },
      { name: "Charter", to: "/charter/" },
      { name: "Contribute", href: links.github },
    ],
  },
  {
    title: "Learn",
    items: [
      { name: "Documentation", to: "/docs/" },
      { name: "Quickstart", href: links.quickstart },
      { name: "Release notes", href: `/docs/${LATEST_DOCS}/release/${LATEST_RELEASE}.html` },
      { name: "Command reference", href: `/docs/${LATEST_DOCS}/reference/wwctl.html` },
    ],
  },
  {
    title: "Community",
    items: [
      { name: "Get help", to: "/help/" },
      { name: "Slack", href: links.slack },
      { name: "GitHub", href: links.github },
      { name: "YouTube", href: links.youtube },
    ],
  },
]

const itemClass = "text-sm text-ink-soft hover:text-brand-800 dark:text-gray-400 dark:hover:text-white"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/20">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src={Logo} alt="Warewulf" className="h-14 w-auto dark:hidden" />
          <img src={LogoDark} alt="Warewulf" className="hidden h-14 w-auto dark:block" />
          <p className="mt-4 max-w-xs text-sm text-ink-muted dark:text-gray-400">
            Open source, image-based cluster provisioning. Community-governed by the Warewulf Technical Steering Committee.
          </p>
        </div>
        {columns.map(col => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.items.map(item => (
                <li key={item.name}>
                  {item.to ? (
                    <Link to={item.to} className={itemClass}>{item.name}</Link>
                  ) : (
                    <a href={item.href} className={itemClass}>{item.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-ink-muted dark:border-white/10 dark:text-gray-500">
        &copy; {new Date().getFullYear()} The Warewulf Project. Warewulf is open source software.
      </div>
    </footer>
  )
}
