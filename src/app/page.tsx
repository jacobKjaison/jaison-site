"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

   async function handleResumeSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await fetch("https://formspree.io/f/xjygpweg", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, _subject: "Resume Download Request" }),
    }).catch(() => {});
    const link = document.createElement("a");
    link.href = "/Jaison-Jacob-Resume.pdf";
    link.download = "Jaison-Jacob-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSubmitting(false);
    setDone(true);
    setTimeout(() => { setShowModal(false); setDone(false); setName(""); setEmail(""); }, 1500);
  }


 return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-2xl p-8" onClick={(e) => e.stopPropagation()}>
            {done ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                <p className="font-semibold text-neutral-900 dark:text-white">Downloading…</p>
                <p className="text-sm text-neutral-500">Thanks! Your download has started.</p>
              </div>
            ) : (
              <>
                <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700" aria-label="Close">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">One quick step</p>
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-1">Download Resume</h2>
                <p className="text-sm text-neutral-500 mb-6">Enter your details and the PDF will download instantly.</p>
                <form onSubmit={handleResumeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">Your Name</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sarah Ahmed"
                      className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">Work Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. sarah@company.com"
                      className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full rounded-xl bg-neutral-900 dark:bg-white px-5 py-3 text-sm font-semibold text-white dark:text-neutral-900 hover:bg-neutral-700 transition disabled:opacity-60">
                    {submitting ? "Please wait…" : "Download PDF →"}
                  </button>
                </form>
                <p className="mt-4 text-center text-[11px] text-neutral-400">Your details are kept private and never shared.</p>
              </>
            )}
          </div>
        </div>
      )}
     <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1fr_280px] items-start">
      
      <div className="space-y-6">
        <p className="text-sm text-neutral-500">
          Dubai, UAE • Digital Transformation & Delivery Leader
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
           className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white"
           >
            View Experience
            </Link>

          <Link
            href="#contact"
            className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white"
          >
          Contact
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition cursor-pointer"
          >
            Download Resume
          </button>

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
      
        </div>
        {/* Right: Image (top-aligned, sticky feel) */}
        <div className="md:pt-10">
          <div className="relative mx-auto w-56 md:w-full">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <Image
                src="/JaisonJ.jpg"
                alt="Jaison Jacob"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Optional: subtle caption */}
            <p className="mt-3 text-center text-xs text-neutral-500">
              Jaison Jacob • Technology & Transformation Leadership
            </p>
          </div>
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
              Executive-grade capabilities.
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
          Quantified wins ).
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
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
          Get in touch
        </p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
          Let's work together
        </h2>
        <p className="text-neutral-500 text-sm mb-8 max-w-lg">
          Open to leadership roles, advisory engagements, consulting, or collaboration.
          Based in Dubai, UAE — working globally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { label: "Email", value: "jacob.jaison@hotmail.com", href: "mailto:jacob.jaison@hotmail.com" },
            { label: "LinkedIn", value: "Jaison Jacob", href: "https://www.linkedin.com/in/jaisonkjacob/" },
            { label: "GitHub", value: "github/jacobjaison", href: "https://github.com/jacobjaison" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                {item.label}
              </p>
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100 break-all">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-sm text-neutral-500 shadow-sm dark:border-white/10 dark:bg-white/5">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span>
            <strong className="text-neutral-800 dark:text-neutral-100 font-semibold">Available</strong>
            {" "}for leadership roles, advisory, consulting, implementation or collaboration
          </span>
        </div>
      </section>
    </main>
   </>
  );
}
