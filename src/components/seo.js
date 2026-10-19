import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Use from a page's `Head` export: export const Head = () => <Seo title="..." />
export default function Seo({ title, description, pathname = "", children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  const meta = site.siteMetadata
  const desc = description || meta.description
  const fullTitle = title ? `${title} | ${meta.title}` : `${meta.title} | Cluster provisioning`
  const url = `${meta.siteUrl}${pathname}`

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="theme-color" content="#1b6b25" />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${meta.siteUrl}/icons/icon-512x512.png`} />
      <meta name="twitter:card" content="summary" />
      {children}
    </>
  )
}
