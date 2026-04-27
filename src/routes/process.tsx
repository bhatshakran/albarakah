import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How We Work | Al Barakah" },
      {
        name: "description",
        content:
          "Al Barakah's five-step process: consultation, design planning & 3D visualization, material selection, execution and final handover.",
      },
      { property: "og:title", content: "Our Process — Al Barakah" },
      {
        property: "og:description",
        content:
          "From consultation to handover — a transparent, milestone-based process.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    title: "Consultation & requirement analysis",
    body: "We listen first. Site visit, lifestyle conversation, brief building and a clear understanding of scope, timeline and budget.",
  },
  {
    n: "02",
    title: "Design planning & 3D visualization",
    body: "Layouts, mood boards, material palettes and photoreal 3D walkthroughs — so you experience the space before we build it.",
  },
  {
    n: "03",
    title: "Material selection",
    body: "We curate finishes, fixtures and furnishings together. Premium specifications, sourced for both character and longevity.",
  },
  {
    n: "04",
    title: "Execution & installation",
    body: "Our in-house team handles all materials, skilled labor and on-site coordination. Single-point ownership, milestone-based delivery.",
  },
  {
    n: "05",
    title: "Final handover & quality check",
    body: "A rigorous walkthrough, snag list resolution and styling — we hand over a space that is genuinely ready to live in.",
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-prose pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="eyebrow">How we work</p>
        <h1 className="display-xl mt-8 max-w-4xl">
          A clear path from brief to{" "}
          <span className="italic-accent">handover.</span>
        </h1>
      </section>

      <section className="container-prose pb-24 md:pb-32">
        <ol className="relative border-l border-border">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative grid gap-6 py-10 pl-10 md:grid-cols-12 md:gap-10 md:py-14 md:pl-16"
            >
              <span className="absolute -left-[7px] top-12 h-3 w-3 rounded-full border border-accent bg-background" />
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-accent">/ {s.n}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-prose pb-24 md:pb-32">
        <div className="grid gap-10 bg-card p-8 md:grid-cols-12 md:items-center md:gap-16 md:p-16">
          <div className="md:col-span-7">
            <p className="eyebrow">Important</p>
            <h3 className="display-lg mt-6">
              All materials. All labor.{" "}
              <span className="italic-accent">Fully managed.</span>
            </h3>
            <p className="mt-6 leading-relaxed text-foreground/80">
              We provide end-to-end project execution — including all materials
              and skilled labor. All labor management and associated expenses
              are fully handled by our team, ensuring a hassle-free experience
              for our clients.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Link to="/contact" className="btn-primary">
              Begin a project
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
