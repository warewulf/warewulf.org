import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/page-header"
import { ArrowIcon } from "../components/icons"

// Renders both news posts (have a date) and static pages like /about and /charter.
export default function Template({ data }) {
  const { frontmatter, html, tableOfContents } = data.markdownRemark
  const isPost = !!frontmatter.date
  const showToc = !isPost && tableOfContents && tableOfContents.includes("<li>")

  return (
    <Layout>
      {isPost ? (
        <div className="border-b border-gray-200 bg-gradient-to-b from-brand-50 to-white dark:border-white/10 dark:from-brand-900/40 dark:to-brand-950">
          <div className="container-page max-w-3xl py-12 sm:py-16">
            <Link to="/news/" className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline dark:text-brand-300">
              <ArrowIcon className="h-4 w-4 rotate-180" /> All news
            </Link>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{frontmatter.title}</h1>
            <time dateTime={frontmatter.date} className="mt-3 block text-ink-muted dark:text-gray-400">
              {frontmatter.dateLong}
            </time>
          </div>
        </div>
      ) : (
        <PageHeader title={frontmatter.title} />
      )}

      <div className={`container-page py-12 ${showToc ? "grid gap-12 lg:grid-cols-[1fr_16rem]" : "max-w-3xl"}`}>
        <article
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:tracking-tight"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {showToc && (
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24 text-sm">
              <p className="font-semibold">On this page</p>
              <div
                className="mt-3 space-y-1 border-l border-gray-200 pl-4 text-ink-soft dark:border-white/10 dark:text-gray-400 [&_a:hover]:text-brand-700 dark:[&_a:hover]:text-brand-300 [&_li]:py-1 [&_ul_ul]:pl-3"
                dangerouslySetInnerHTML={{ __html: tableOfContents }}
              />
            </nav>
          </aside>
        )}
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    pathname={data.markdownRemark.frontmatter.slug + "/"}
    description={data.markdownRemark.excerpt}
  />
)

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
      tableOfContents(maxDepth: 2)
      frontmatter {
        date
        dateLong: date(formatString: "MMMM D, YYYY")
        slug
        title
      }
    }
  }
`
