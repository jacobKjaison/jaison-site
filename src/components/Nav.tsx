import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand / Name */}
        <Link href="/" className="text-sm font-semibold tracking-tight text-neutral-900">
          Jaison Jacob
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <a className="hover:text-neutral-900" href="/about">About</a>
          <a className="hover:text-neutral-900" href="/experience">Experience</a>
          <a className="hover:text-neutral-900" href="/contact">Contact</a>

          {/* Optional external link */}
          <a
            href="https://github.com/jacobjaison"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
