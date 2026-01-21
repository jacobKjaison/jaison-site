import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
     
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-sm text-neutral-500">
          Dubai, UAE • CTO-in-Transition • Digital Transformation Leader
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl leading-tight">
          Building future-ready enterprises through{" "}
          <span className="text-neutral-900 dark:text-white">strategy</span>,{" "}
          <span className="text-neutral-900 dark:text-white">execution</span>, and{" "}
          <span className="text-neutral-900 dark:text-white">technology leadership</span>.
        </h1>

        <p className="max-w-2xl text-base text-neutral-600 dark:text-neutral-300 sm:text-lg leading-relaxed">
          I lead complex, cross-functional programs spanning AI, ERP, cloud platforms, and
          digital products—turning ambiguity into measurable outcomes with governance,
          delivery rigor, and stakeholder alignment.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="#experience"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
          >
            View Experience
          </Link>

          <Link
            href="#contact"
            className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact
          </Link>

          <a
             href="/Jaison-Jacob-Resume.pdf"
             className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
              target="_blank"
              rel="noreferrer"
          >
            Download Resume
          </a>

        </div>

        <div className="flex flex-wrap gap-2 pt-4 text-xs text-neutral-500">
          {[
            "Digital Transformation",
            "Program/Portfolio Delivery",
            "AI Strategy",
            "ERP & Platforms",
            "Governance & Risk",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 dark:border-white/10 dark:bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mt-14 sm:mt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              What I do
            </h2>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Executive-grade capabilities, written for hiring leaders.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Transformation Leadership",
              desc: "Roadmaps, operating models, governance, and execution across multi-stream programs.",
            },
            {
              title: "AI & Data Initiatives",
              desc: "Use-case prioritization, delivery planning, adoption, and measurable outcomes—beyond prototypes.",
            },
            {
              title: "ERP & Enterprise Platforms",
              desc: "Process standardization, requirements clarity, integrations, and stakeholder enablement.",
            },
            {
              title: "Delivery Excellence",
              desc: "Predictable cadence, risk management, vendor coordination, and outcome-driven reporting.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mt-14 sm:mt-20">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Featured outcomes
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Replace these with your strongest quantified wins (I can rewrite them in CTO tone).
        </p>

        <div className="mt-6 grid gap-4">
          {[
            {
              title: "Enterprise program delivery across stakeholders",
              meta: "Portfolio / Governance",
              bullets: [
                "Owned end-to-end delivery cadence, risks, and reporting across concurrent initiatives.",
                "Aligned stakeholders on priorities and timelines through structured governance.",
                "Improved predictability with phased plans, decision logs, and clear metrics.",
              ],
            },
            {
              title: "Platform & process modernization",
              meta: "ERP / Platforms",
              bullets: [
                "Defined requirements and process flows to reduce delivery friction and improve adoption.",
                "Coordinated dependencies across teams for release readiness and integration alignment.",
              ],
            },
            {
              title: "Operational & compliance readiness",
              meta: "Risk / Controls",
              bullets: [
                "Ensured documentation and controls alignment to support compliant delivery and audit readiness.",
                "Drove cross-team coordination to close gaps before rollout.",
              ],
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-base font-semibold">{x.title}</h3>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {x.meta}
                </span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-14 sm:mt-20">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Contact
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          For leadership roles, advisory, consulting, or collaboration.
        </p>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-2 text-sm">
            <a className="font-semibold hover:underline" href="mailto:jacob.jaison@hotmail.com">
              Email : jacob.jaison@hotmail.com
            </a>
            <a className="font-semibold hover:underline" href="https://www.linkedin.com/in/jaisonkjacob/" target="_blank" rel="noreferrer">
              LinkedIn : Jaison Jacob
            </a>
            <a className="font-semibold hover:underline" href="https://github.com/jacobKjaison" target="_blank" rel="noreferrer">
              GitHub : JaisonkJacob
            </a>
          </div>
        </div>
      </section>
    </main>
   </>
  );
}
