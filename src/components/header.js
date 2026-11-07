import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import LogoDark from "../images/logo-dark.svg"
import { nav, links } from "../data/site"
import { GitHubIcon, MenuIcon, CloseIcon } from "./icons"

const linkClass = ({ isCurrent, isPartiallyCurrent }) => {
  const active = isPartiallyCurrent || isCurrent
  return {
    className: `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? "text-brand-800 dark:text-brand-200"
        : "text-ink-soft hover:text-brand-800 dark:text-gray-300 dark:hover:text-white"
    }`,
    "aria-current": active ? "page" : undefined,
  }
}

export default function Header() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = e => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-brand-950/85">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Warewulf" className="h-14 w-auto dark:hidden" />
          <img src={LogoDark} alt="Warewulf" className="hidden h-14 w-auto dark:block" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map(item => (
            <Link key={item.href} to={item.href} getProps={linkClass} partiallyActive>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={links.github}
            aria-label="Warewulf on GitHub"
            className="rounded-md p-2 text-ink-soft hover:text-brand-800 dark:text-gray-300 dark:hover:text-white"
          >
            <GitHubIcon />
          </a>
          <a href={links.intro} className="btn-primary !px-4 !py-2 !text-sm">
            Get started
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-gray-200 bg-white px-4 pb-6 pt-3 dark:border-white/10 dark:bg-brand-950 md:hidden"
        >
          <ul className="space-y-1">
            {nav.map(item => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  partiallyActive
                  getProps={p => ({ ...linkClass(p), className: linkClass(p).className + " block !text-base" })}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a href={links.github} className="block rounded-md px-3 py-2 text-base font-medium text-ink-soft dark:text-gray-300">
                GitHub
              </a>
            </li>
          </ul>
          <a href={links.intro} className="btn-primary mt-4 w-full">
            Get started
          </a>
        </nav>
      )}
    </header>
  )
}
