import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/page-header"

const fmt = d =>
  new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

export default function NewsPage({ data }) {
  const byYear = data.allMarkdownRemark.nodes.reduce((acc, n) => {
    const y = n.frontmatter.date.slice(0, 4)
    ;(acc[y] = acc[y] || []).push(n)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <Layout>
      <PageHeader eyebrow="News" title="Releases and announcements">
        What's new in the Warewulf project.
      </PageHeader>
      <div className="container-page max-w-3xl py-12">
        {years.map(y => (
          <section key={y} aria-labelledby={`y${y}`} className="mb-12">
            <h2 id={`y${y}`} className="border-b border-gray-200 pb-2 text-xl font-bold dark:border-white/10">{y}</h2>
            <ul className="divide-y divide-gray-100 dark:divide-white/5">
              {byYear[y].map(p => (
                <li key={p.id} className="relative flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <time dateTime={p.frontmatter.date} className="w-28 shrink-0 text-sm text-ink-muted dark:text-gray-400">
                    {fmt(p.frontmatter.date)}
                  </time>
                  <Link to={p.frontmatter.slug} className="font-medium hover:text-brand-700 hover:underline dark:hover:text-brand-300 after:absolute after:inset-0">
                    {p.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="News" pathname="/news/" description="Warewulf release announcements and project news." />

export const query = graphql`
  query NewsList {
    allMarkdownRemark(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { frontmatter: { date: DESC } }
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
