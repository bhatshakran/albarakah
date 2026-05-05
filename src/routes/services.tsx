import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import kitchenImg from "@/assets/service-kitchen.jpg";
import wallpaperImg from "@/assets/service-wallpaper.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import ceilingImg from "@/assets/service-ceiling.jpg";
import pvcImg from "@/assets/service-pvc.jpg";
import modularImg from "@/assets/service-modular.jpg";
import heroImg from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Craftronix Interior & Décor, Srinagar" },
      {
        name: "description",
        content:
          "Craftronix offers full-service interior design: residential & commercial, modular kitchens, wardrobes, false ceilings, painting, wallpapers, PVC paneling and turnkey renovation in Srinagar.",
      },
      { property: "og:title", content: "Services — Craftronix" },
      {
        property: "og:description",
        content:
          "Interior design, modular, ceilings, painting, wallpapers, PVC paneling and turnkey renovation.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Interior Design",
    image: heroImg,
    items: [
      "Residential & commercial interiors",
      "Space planning & layout optimization",
      "3D design & visualization",
      "Theme-based design concepts",
    ],
  },
  {
    n: "02",
    title: "Painting & Decorative Finishes",
    image: paintingImg,
    items: [
      "Interior & exterior painting",
      "Texture & designer wall finishes",
      "Wall art & custom paint effects",
      "Waterproofing & surface protection",
    ],
  },
  {
    n: "03",
    title: "Wallpaper Solutions",
    image: wallpaperImg,
    items: [
      "Designer wallpaper installation",
      "3D & customized wallpapers",
      "Vinyl, fabric & luxury wallpapers",
      "Wall preparation & finishing",
    ],
  },
  {
    n: "04",
    title: "PVC Paneling Services",
    image: pvcImg,
    items: [
      "PVC wall & ceiling paneling",
      "Decorative panel designs",
      "Waterproof & termite-resistant solutions",
      "Easy-maintenance, durable finishes",
    ],
  },
  {
    n: "05",
    title: "False Ceiling & Lighting",
    image: ceilingImg,
    items: [
      "Gypsum & POP ceiling designs",
      "LED & ambient lighting solutions",
      "Modern ceiling concepts",
      "Cove & decorative lighting",
    ],
  },
  {
    n: "06",
    title: "Modular Solutions",
    image: kitchenImg,
    items: [
      "Modular kitchen design & installation",
      "Wardrobes & storage solutions",
      "TV units & custom furniture",
      "Made-to-measure cabinetry",
    ],
  },
  {
    n: "07",
    title: "Renovation & Makeovers",
    image: modularImg,
    items: [
      "Complete home / office renovation",
      "Space remodeling & upgrades",
      "Turnkey interior execution",
      "Phased delivery for occupied spaces",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-prose pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="eyebrow">Services</p>
        <h1 className="display-xl mt-8 max-w-4xl">
          A full studio of <span className="italic-accent">disciplines.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Every service is delivered turnkey — materials, skilled labor and
          project management included. One brief, one team, one outcome.
        </p>
      </section>

      <section className="container-prose pb-24 md:pb-32">
        <div className="space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.title}
                className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16"
              >
                <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                  <div className="img-frame aspect-[5/4]">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1280}
                      height={1024}
                    />
                  </div>
                </div>
                <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                  <p className="font-mono text-xs text-accent">/ {s.n}</p>
                  <h2 className="display-lg mt-4">{s.title}</h2>
                  <ul className="mt-8 divide-y divide-border border-t border-border">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-4 py-4 text-sm"
                      >
                        <span className="mt-2 h-px w-6 shrink-0 bg-accent" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-prose pb-24 md:pb-32">
        <div className="border-l-2 border-accent bg-card p-8 md:p-12">
          <p className="eyebrow text-accent">
            Important — end-to-end execution
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            We provide end-to-end project execution including all materials and
            skilled labor. All labor management and associated expenses are
            fully handled by our team — ensuring a hassle-free experience for
            our clients.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Discuss your project
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
