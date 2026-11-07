import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/page-header"
import { LATEST_DOCS, LATEST_RELEASE, links } from "../data/site"
import { ArrowIcon, BookIcon, ServerIcon, LayersIcon, NetworkIcon, GaugeIcon } from "../components/icons"

const v = LATEST_DOCS
const topics = [
  { icon: ServerIcon, name: "Quickstart: EL", text: "Rocky, Alma, RHEL.", href: links.quickstart },
  { icon: ServerIcon, name: "Quickstart: SUSE", text: "SLES and openSUSE.", href: `/docs/${v}/getting-started/suse-quickstart.html` },
  { icon: ServerIcon, name: "Quickstart: Debian", text: "Debian and Ubuntu.", href: `/docs/${v}/getting-started/debian-quickstart.html` },
  { icon: LayersIcon, name: "Node images", text: "Import, build, and customize.", href: `/docs/${v}/images/images.html` },
  { icon: NetworkIcon, name: "Nodes and profiles", text: "Describe your cluster.", href: `/docs/${v}/nodes/nodes.html` },
  { icon: GaugeIcon, name: "Command reference", text: "Every wwctl command.", href: `/docs/${v}/reference/wwctl.html` },
]

const versions = [
  { version: "v4.7.x", label: "Latest stable", note: `Current release series (${LATEST_RELEASE}).`, primary: true },
  { version: "v4.6.x", label: "Previous", note: "Previous stable series." },
  { version: "v4.5.x", label: "Older", note: "Older series, for existing installs." },
  { version: "main", label: "Development", note: "Unreleased changes. May describe features not yet available." },
]

export default function DocsPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Documentation" title="Learn Warewulf">
        Guides, concepts, and the full command reference for every supported release.
      </PageHeader>

      <section className="container-page py-14" aria-labelledby="start">
        <h2 id="start" className="text-2xl font-bold tracking-tight">Start here <span className="text-base font-normal text-ink-muted dark:text-gray-400">({v})</span></h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(t => (
            <li key={t.name} className="card relative flex gap-4 !p-5 transition-shadow focus-within:ring-2 focus-within:ring-brand-600 hover:shadow-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-100">
                <t.icon className="h-5 w-5" />
              </span>
              <div>
                <a href={t.href} className="font-semibold after:absolute after:inset-0 focus:outline-none">{t.name}</a>
                <p className="text-sm text-ink-muted dark:text-gray-400">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-14 dark:border-white/10 dark:bg-black/20" aria-labelledby="versions">
        <div className="container-page">
          <h2 id="versions" className="text-2xl font-bold tracking-tight">All versions</h2>
          <p className="mt-2 text-ink-soft dark:text-gray-300">Pick the documentation that matches the version you run.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {versions.map(d => (
              <li key={d.version} className={`card relative !p-5 transition-shadow focus-within:ring-2 focus-within:ring-brand-600 hover:shadow-md ${d.primary ? "!border-brand-600 dark:!border-brand-400" : ""}`}>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${d.primary ? "bg-brand-700 text-white dark:bg-brand-400 dark:text-brand-950" : "bg-gray-100 text-ink-soft dark:bg-white/10 dark:text-gray-300"}`}>
                  {d.label}
                </span>
                <h3 className="mt-3 flex items-center gap-2 text-xl font-bold">
                  <BookIcon className="h-5 w-5 text-brand-700 dark:text-brand-300" />
                  <a href={`/docs/${d.version}/`} className="after:absolute after:inset-0 focus:outline-none">{d.version}</a>
                </h3>
                <p className="mt-2 text-sm text-ink-muted dark:text-gray-400">{d.note}</p>
                <ArrowIcon className="mt-4 h-4 w-4 text-brand-700 dark:text-brand-300" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Documentation" pathname="/docs/" description="Warewulf guides, concepts, and command reference for every supported release." />
