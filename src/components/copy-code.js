import * as React from "react"
import { CopyIcon, CheckIcon } from "./icons"

export default function CopyCode({ lines, label = "Terminal" }) {
  const [copied, setCopied] = React.useState(false)
  const text = lines.join("\n")

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      /* clipboard unavailable: the text is still selectable */
    }
  }

  return (
    <figure className="overflow-hidden rounded-xl border border-white/10 bg-brand-950 text-left shadow-xl">
      <figcaption className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{label}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white"
        >
          {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-gray-100 sm:text-sm">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="block whitespace-pre">
              {line.startsWith("#") ? (
                <span className="text-gray-500">{line}</span>
              ) : (
                <>
                  <span className="select-none text-brand-400">$ </span>
                  {line}
                </>
              )}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}
