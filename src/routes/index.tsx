import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-living.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import wallpaperImg from "@/assets/service-wallpaper.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import ceilingImg from "@/assets/service-ceiling.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Barakah — Interior Design & Décor Studio · Srinagar" },
      {
        name: "description",
        content:
          "Al Barakah crafts residential and commercial interiors in Srinagar, Kashmir. End-to-end execution — materials, skilled labor and design intelligence, fully managed.",
      },
      {
        property: "og:title",
        content: "Al Barakah — Transforming Spaces with Design & Color",
      },
      {
        property: "og:description",
        content:
          "Srinagar interior design studio. Residential & commercial. Materials and labor included.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Interior Design", image: kitchenImg, tag: "01" },
  { title: "Painting & Finishes", image: paintingImg, tag: "02" },
  { title: "Wallpapers", image: wallpaperImg, tag: "03" },
  { title: "False Ceiling & Light", image: ceilingImg, tag: "04" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose grid gap-12 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:pb-32 md:pt-20">
          <div className="reveal md:col-span-7 md:pt-12">
            <p className="eyebrow">
              Al Barakah · Interior Design Studio · Srinagar
            </p>
            <h1 className="display-xl mt-8">
              Transforming spaces
              <br /> with{" "}
              <span className="italic-accent">design &amp; color.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We design and transform residential and commercial spaces with a
              balance of creativity, functionality and modern aesthetics — from
              first sketch to final handover, in Srinagar and across Kashmir.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start your project
              </Link>
              <Link to="/services" className="btn-ghost">
                View services
              </Link>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              <Stat n="120+" label="Projects delivered" />
              <Stat n="100%" label="Turnkey execution" />
              <Stat n="J&K" label="Srinagar based" />
            </div>
          </div>

          <div className="reveal md:col-span-5">
            <div className="img-frame relative aspect-[4/5] rounded-sm shadow-[var(--shadow-lift)]">
              <img
                src={heroImg}
                alt="Modern living room with warm accent wall, cream sofa and brass pendant lights"
                width={1600}
                height={1280}
              />
              <div className="absolute -bottom-6 -left-6 hidden bg-background px-6 py-4 shadow-[var(--shadow-soft)] md:block">
                <p className="eyebrow">A signature project</p>
                <p className="mt-1 font-display text-xl">
                  The Arched Salon, Srinagar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-card py-6">
          <div className="marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-16 pr-16">
                {[
                  "Residential Interiors",
                  "Commercial Spaces",
                  "Modular Kitchens",
                  "False Ceilings",
                  "Designer Wallpapers",
                  "PVC Paneling",
                  "Painting & Finishes",
                  "Turnkey Renovation",
                ].map((t) => (
                  <span
                    key={t}
                    className="font-display text-2xl italic text-foreground/70"
                  >
                    {t} <span className="ml-16 text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE — end-to-end execution */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="eyebrow">A note from the studio</p>
            <h2 className="display-lg mt-6">
              Truly <span className="italic-accent">turnkey.</span>
              <br /> Truly hassle-free.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              We provide end-to-end project execution — including all materials
              and skilled labor. Every aspect of labor management and the
              associated expenses are fully handled by our team, ensuring a
              completely hassle-free experience for our clients.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Materials included",
                "Labor managed",
                "Single accountability",
                "Predictable pricing",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 border-l-2 border-accent bg-card px-4 py-3 text-sm"
                >
                  <span className="font-mono text-xs text-accent">→</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-card py-24 md:py-32">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display-lg mt-6 max-w-2xl">
                Seven disciplines.
                <br /> One <span className="italic-accent">studio.</span>
              </h2>
            </div>
            <Link to="/services" className="btn-ghost">
              All services
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} to="/services" className="group block">
                <div className="img-frame relative aspect-[3/4]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={1024}
                  />
                  <span className="absolute left-4 top-4 font-mono text-xs text-bone">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl transition-colors group-hover:text-accent">
                  {s.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-prose py-24 md:py-32">
        <p className="eyebrow">Why choose us</p>
        <h2 className="display-lg mt-6 max-w-3xl">
          Considered choices,
          <br /> <span className="italic-accent">crafted outcomes.</span>
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden bg-border md:grid-cols-3">
          {[
            [
              "End-to-end management",
              "From the first sketch to the final handover, one team owns the outcome.",
            ],
            [
              "Customized approach",
              "Designs tailored to how you actually live, work and host.",
            ],
            [
              "Skilled craftspeople",
              "Long-standing partners who treat detail as a discipline.",
            ],
            [
              "Premium materials",
              "Specified for longevity, sourced for character.",
            ],
            [
              "Transparent pricing",
              "Clear scope, clean numbers — no surprises.",
            ],
            ["On-time delivery", "Milestone-based execution and rigorous QA."],
          ].map(([title, body]) => (
            <div key={title} className="bg-background p-8">
              <p className="font-mono text-xs text-accent">
                / 0
                {[
                  "End-to-end management",
                  "Customized approach",
                  "Skilled craftspeople",
                  "Premium materials",
                  "Transparent pricing",
                  "On-time delivery",
                ].indexOf(title) + 1}
              </p>
              <h3 className="mt-4 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-24 md:py-32">
        <div className="relative overflow-hidden bg-ink px-8 py-20 text-bone md:px-20 md:py-28">
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow text-bone/60">Begin a project</p>
            <h2 className="display-lg mt-6">
              Let&apos;s shape a space
              <br />{" "}
              <span className="italic-accent">worth coming home to.</span>
            </h2>
            <p className="mt-6 text-bone/70">
              Tell us about your space, your timeline and the life you want to
              live inside it.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-bone px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-all hover:bg-accent hover:text-bone"
              >
                Book a consultation →
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 right-1/3 h-72 w-72 rounded-full bg-brass/20 blur-3xl" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
