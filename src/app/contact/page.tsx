export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Contact</h1>
      <p className="mt-5 text-neutral-600 sm:text-lg">
        For leadership roles, advisory, consulting, or collaboration.
      </p>

      <div className="mt-8 max-w-xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="grid gap-2 text-sm">
          <a className="font-semibold hover:underline" href="mailto:your.email@example.com">
            your.email@example.com
          </a>
          <a className="font-semibold hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="font-semibold hover:underline" href="https://github.com/jacobjaison" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
