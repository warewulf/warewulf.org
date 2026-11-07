import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/page-header"
import CtrlIQLogo from "../images/ctrliq.png"
import SUSELogo from "../images/suse.png"
import { links } from "../data/site"
import { BookIcon, ChatIcon, BugIcon, VideoIcon, ExternalIcon } from "../components/icons"

const community = [
  { icon: BookIcon, name: "Read the docs", text: "Quickstarts, concepts, and the full command reference. Most answers are here.", cta: "Open documentation", href: "/docs/" },
  { icon: ChatIcon, name: "Ask on Slack", text: "Talk with users and maintainers. Best for questions and troubleshooting.", cta: "Join the Slack", href: links.slack },
  { icon: BugIcon, name: "Report a bug", text: "Found a defect or want a feature? Search the tracker, then open an issue.", cta: "Open GitHub issues", href: `${links.github}/issues` },
  { icon: VideoIcon, name: "Watch the TSC", text: "Steering committee meetings are public and recorded, every 1st and 3rd Wednesday.", cta: "YouTube channel", href: links.youtube },
]

const vendors = [
  {
    name: "CIQ",
    logo: CtrlIQLogo,
    text: "Support and services from the project founder and core developers. CIQ also supports Apptainer and Rocky Linux.",
    href: links.ciq,
  },
  {
    name: "SUSE",
    logo: SUSELogo,
    text: "A core contributor to Warewulf. Commercial support is included with SUSE Linux Enterprise HPC and related products.",
    href: links.suse,
  },
]

export default function HelpPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Get help" title="We're here to help">
        Start with the community, which is quick and free. If you need guaranteed response times, commercial support is available.
      </PageHeader>

      <section className="container-page py-14" aria-labelledby="community">
        <h2 id="community" className="text-2xl font-bold tracking-tight">Community support</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {community.map(c => (
            <li key={c.name} className="card flex flex-col">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-100">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 flex-1 text-ink-soft dark:text-gray-300">{c.text}</p>
              <a href={c.href} className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline dark:text-brand-300">
                {c.cta} {c.href.startsWith("http") && <ExternalIcon className="h-4 w-4" />}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-14 dark:border-white/10 dark:bg-black/20" aria-labelledby="commercial">
        <div className="container-page">
          <h2 id="commercial" className="text-2xl font-bold tracking-tight">Commercial support</h2>
          <p className="mt-2 max-w-2xl text-ink-soft dark:text-gray-300">
            Organizations that depend on Warewulf in production can work directly with these project contributors.
          </p>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {vendors.map(s => (
              <li key={s.name} className="card flex flex-col !bg-white dark:!bg-white/5">
                <div className="flex h-20 w-40 items-center justify-center rounded-xl bg-white p-3 ring-1 ring-gray-200 dark:ring-white/20">
                  <img src={s.logo} alt={`${s.name} logo`} className="h-full w-full object-contain" />
                </div>
                <p className="mt-4 flex-1 text-ink-soft dark:text-gray-300">{s.text}</p>
                <a href={s.href} className="btn-secondary mt-5 self-start">
                  Contact {s.name} <ExternalIcon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Get help" pathname="/help/" description="Community and commercial support for Warewulf." />
