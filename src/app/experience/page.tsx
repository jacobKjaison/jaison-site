export default function Experience() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Experience</h1>
      <p className="mt-5 max-w-3xl text-neutral-600 sm:text-lg leading-relaxed">
        Highlights of leadership across programs spanning AI, ERP, cloud platforms, and delivery excellence.
      </p>

      <div className="mt-8 grid gap-4">
        {[
          {
            title: "Program / Portfolio Delivery",
            bullets: [
              "Owned end-to-end delivery cadence, risk management, and stakeholder reporting.",
              "Aligned priorities through governance, phased plans, and decision logs.",
            ],
          },
          {
            title: "ERP & Platform Modernization",
            bullets: [
              "Defined requirements and process flows to improve adoption and reduce friction.",
              "Coordinated integration dependencies and release readiness.",
            ],
          },
          {
            title: "AI & Data Initiatives",
            bullets: [
              "Prioritized value-driven use cases and drove execution with measurable outcomes.",
              "Ensured operational and compliance alignment for rollout.",
            ],
          },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{x.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
              {x.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
