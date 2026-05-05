import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-card">
      <div className="container-prose grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <BrandMark className="h-12 w-auto" />
            <div className="leading-none">
              <p className="font-display text-2xl">Craftronix</p>
              <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                Décor · Design · Color
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md font-display text-xl italic text-foreground/80">
            Transforming spaces with design &amp; color.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Residential and commercial interiors crafted in Srinagar, Kashmir —
            where design intelligence meets premium materials and skilled
            craftsmanship.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-clay">
            End-to-end execution · Materials &amp; labor included
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/process", label: "Process" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-foreground/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-5">Studio</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              <a
                href="mailto:umarysnbhat@gmail.com"
                className="transition-colors hover:text-accent"
              >
                umarysnbhat@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919149675010"
                className="transition-colors hover:text-accent"
              >
                +91 9149675010
              </a>
            </li>
            <li className="leading-relaxed text-muted-foreground">
              Natipora, Srinagar
              <br /> Jammu &amp; Kashmir 190015
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Craftronix. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">
            Developed by Shaqran Bhat · Srinagar, J&amp;K
          </p>
        </div>
      </div>
    </footer>
  );
}
