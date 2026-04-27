import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import processImg from "@/assets/about-process.jpg";
import heroImg from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al Barakah Interior Design, Srinagar" },
      {
        name: "description",
        content:
          "Al Barakah is a Srinagar-based interior design studio combining design intelligence, premium materials and skilled craftsmanship for residential and commercial spaces.",
      },
      { property: "og:title", content: "About Al Barakah" },
      {
        property: "og:description",
        content:
          "Design intelligence, premium materials and skilled craftsmanship — based in Srinagar, J&K.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-prose pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="eyebrow">About the studio</p>
        <h1 className="display-xl mt-8 max-w-4xl">
          A studio for spaces with{" "}
          <span className="italic-accent">intention.</span>
        </h1>
      </section>

      <section className="container-prose grid gap-12 pb-24 md:grid-cols-12 md:gap-16 md:pb-32">
        <div className="md:col-span-5">
          <div className="img-frame aspect-[4/5]">
            <img
              src={processImg}
              alt="Designer reviewing fabric and material samples"
              loading="lazy"
              width={1280}
              height={1280}
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            We specialize in designing and transforming residential and
            commercial spaces with a perfect balance of creativity,
            functionality and modern aesthetics.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From concept design to final execution, we deliver seamless interior
            and décor solutions tailored to your lifestyle and business needs.
            Our expertise lies in combining design intelligence, premium
            materials and skilled craftsmanship to create spaces that are
            visually appealing and highly functional.
          </p>

          <div className="mt-10 border-l-2 border-accent bg-card p-6">
            <p className="eyebrow text-accent">
              Important — fully managed execution
            </p>
            <p className="mt-3 leading-relaxed">
              We provide end-to-end project execution, including all materials
              and skilled labor. All labor management and associated expenses
              are fully handled by our team, ensuring a hassle-free experience
              for our clients.
            </p>
          </div>

          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              ["120+", "Spaces transformed"],
              ["14", "Years of craft"],
              ["48", "Skilled partners"],
            ].map(([n, l]) => (
              <div key={l} className="border-t border-border pt-4">
                <dt className="font-display text-3xl">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-card py-24 md:py-32">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Key features</p>
            <h2 className="display-lg mt-6">
              What sets us <span className="italic-accent">apart.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border">
              {[
                "Personalized designs for every client",
                "Expert color and material selection",
                "Functional + aesthetic balance",
                "Fast and efficient execution",
                "Premium finish and detailing",
              ].map((f, i) => (
                <li key={f} className="flex items-baseline gap-6 py-5">
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-prose py-24 md:py-32">
        <div className="img-frame aspect-[16/7]">
          <img
            src={heroImg}
            alt="Atelier Maison signature interior"
            loading="lazy"
            width={1600}
            height={700}
          />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <h3 className="display-lg max-w-xl">Ready when you are.</h3>
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
