// Single source of truth for links that appear in several places.
// Bump LATEST_DOCS when a new release series is published.
export const LATEST_DOCS = "v4.7.x"
export const LATEST_RELEASE = "v4.7.1"

export const links = {
  github: "https://github.com/warewulf/warewulf",
  slack:
    "https://join.slack.com/t/warewulf/shared_invite/zt-31b6o6gus-DpLkbJjyIdofPk5aJU4y8A",
  youtube: "https://www.youtube.com/@warewulfhpc",
  ciq: "https://ciq.com/products/warewulf/",
  suse: "https://www.suse.com/products/server/",
  quickstart: `/docs/${LATEST_DOCS}/getting-started/el-quickstart.html`,
  intro: `/docs/${LATEST_DOCS}/getting-started/introduction.html`,
}

export const nav = [
  { name: "Documentation", href: "/docs/" },
  { name: "News", href: "/news/" },
  { name: "Get help", href: "/help/" },
  { name: "About", href: "/about/" },
]
