import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CopyCode from "../components/copy-code"
import { links, LATEST_RELEASE } from "../data/site"
import {
  ArrowIcon, GaugeIcon, LayersIcon, PuzzleIcon, ShieldIcon, ServerIcon, NetworkIcon, UsersIcon,
} from "../components/icons"

const features = [
  {
    icon: LayersIcon,
    name: "Image-based and stateless",
    text: "Build a node image once, boot it everywhere. Import from any OCI container registry and keep every node identical and reproducible.",
  },
  {
    icon: GaugeIcon,
    name: "Scales to thousands",
    text: "A lightweight Go service provisions from tens to tens of thousands of nodes without a heavyweight management stack.",
  },
  {
    icon: PuzzleIcon,
    name: "Flexible by design",
    text: "Per-node and per-profile overlays use templates to shape configuration, so one image can serve many roles.",
  },
  {
    icon: ShieldIcon,
    name: "Secure by default",
    text: "Per-node asset keys, SELinux support, and TLS for the provisioning server keep your boot path trustworthy.",
  },
]

const steps = [
  {
    icon: ServerIcon,
    title: "Install the server",
    text: "Set up Warewulf on a head node and configure DHCP, TFTP, and NFS with a single command.",
  },
  {
    icon: LayersIcon,
    title: "Import an image",
    text: "Pull any OCI-compatible container image, or build your own, and use it as the OS for your nodes.",
  },
  {
    icon: NetworkIcon,
    title: "Add nodes and boot",
    text: "Describe nodes (or let discovery find them), power them on, and watch them provision over the network.",
  },
]

const demo = [
  "# on the head node",
  "wwctl configure --all",
  "wwctl image import docker://ghcr.io/warewulf/warewulf-rockylinux:9 rockylinux-9 --build",
  "wwctl node add n1 --ipaddr=10.0.2.1 --discoverable=true",
  "wwctl overlay build",
]

const fmt = d =>
  new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

export default function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white dark:from-brand-900/50 dark:via-brand-950 dark:to-brand-950">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <Link
              to="/news/"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-800 hover:bg-brand-50 dark:border-brand-700 dark:bg-brand-900/60 dark:text-brand-100 dark:hover:border-brand-500 dark:hover:bg-brand-800"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
              {LATEST_RELEASE} is out
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <h1 className="font-display mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Cluster provisioning, <span className="text-brand-700 dark:text-brand-300">simplified.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft dark:text-gray-300">
              Warewulf is the open source, stateless provisioning system trusted by research labs, universities, and
              enterprises to boot and manage bare metal and virtual HPC clusters from container images.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={links.quickstart} className="btn-primary">
                Quickstart guide <ArrowIcon className="h-5 w-5" />
              </a>
              <Link to="/docs/" className="btn-secondary">
                Browse the docs
              </Link>
            </div>
          </div>
          <CopyCode lines={demo} label="Provision a cluster in four commands" />
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-16 sm:py-24" aria-labelledby="features">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Warewulf</p>
          <h2 id="features" className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple to start. Built to scale.
          </h2>
          <p className="mt-4 text-lg text-ink-soft dark:text-gray-300">
            Over two decades of HPC experience, rebuilt in Go around containers, with the flexibility to fit any
            cluster.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map(f => (
            <li key={f.name} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-100">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.name}</h3>
              <p className="mt-2 text-ink-soft dark:text-gray-300">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16 dark:bg-black/20 sm:py-24" aria-labelledby="how">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 id="how" className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            From bare metal to booted in three steps
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white dark:bg-brand-500 dark:text-brand-950">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-ink-soft dark:text-gray-300">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Latest news */}
      <section className="container-page py-16 sm:py-24" aria-labelledby="latest">
        <div className="flex items-end justify-between gap-4">
          <h2 id="latest" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Latest news
          </h2>
          <Link to="/news/" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline dark:text-brand-300">
            All news <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map(p => (
            <li key={p.id} className="card relative transition-shadow focus-within:ring-2 focus-within:ring-brand-600 hover:shadow-md">
              <time dateTime={p.frontmatter.date} className="text-sm text-ink-muted dark:text-gray-400">
                {fmt(p.frontmatter.date)}
              </time>
              <h3 className="mt-2 text-lg font-semibold">
                <Link to={p.frontmatter.slug} className="after:absolute after:inset-0 focus:outline-none">
                  {p.frontmatter.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </section>

      {/* Community */}
      <section className="bg-brand-900 text-white" aria-labelledby="community">
        <div className="container-page flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <UsersIcon className="h-9 w-9 text-brand-300" />
            <h2 id="community" className="font-display mt-4 text-3xl font-bold tracking-tight">
              Built in the open, by the community
            </h2>
            <p className="mt-3 text-lg text-brand-100">
              Warewulf is governed by a public Technical Steering Committee that meets twice a month. Join the Slack,
              file an issue, or send a pull request.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={links.slack} className="btn bg-white text-brand-900 hover:bg-brand-50">Join Slack</a>
            <a href={links.github} className="btn border border-white/30 text-white hover:bg-white/10">View on GitHub</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo pathname="/" />

export const query = graphql`
  query HomeNews {
    allMarkdownRemark(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`
