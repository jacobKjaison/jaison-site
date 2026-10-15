export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
        Get in touch
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
        Lets work together
      </h1>
      <p className="text-neutral-500 sm:text-base mb-12 max-w-lg">
        Open to leadership roles, advisory engagements, consulting, or collaboration.
        Based in Dubai, UAE — working globally.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {[
          {
            label: "Email",
            value: "jacob.jaison@hotmail.com",
            href: "mailto:jacob.jaison@hotmail.com",
          },
          {
            label: "LinkedIn",
            value: "Jaison Jacob",
            href: "https://www.linkedin.com/in/jaisonkjacob/",
          },
          {
            label: "GitHub",
            value: "github/jacobjaison",
            href: "https://github.com/jacobjaison",
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
              {item.label}
            </p>
            <p className="text-sm font-medium text-neutral-800 break-all">
              {item.value}
            </p>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-sm text-neutral-500 shadow-sm">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        <span>
          <strong className="text-neutral-800 font-semibold">Available</strong>
          {" "}for leadership roles, advisory, consulting, implementation or collaboration
        </span>
      </div>
    </main>
  );
}
