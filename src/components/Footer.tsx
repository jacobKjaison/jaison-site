export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Jaison Jacob. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-neutral-900" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-neutral-900" href="https://github.com/jacobjaison" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
