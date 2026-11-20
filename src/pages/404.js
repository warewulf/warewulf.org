import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container-page py-24 text-center sm:py-32">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft dark:text-gray-300">
          That page doesn't exist or has moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">Go home</Link>
          <Link to="/docs/" className="btn-secondary">Documentation</Link>
          <Link to="/help/" className="btn-secondary">Get help</Link>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Page not found" />
