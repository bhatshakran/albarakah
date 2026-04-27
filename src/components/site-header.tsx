import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <BrandMark className="h-11 w-auto" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-xl tracking-tight">
              Al Barakah
            </span>
            <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-muted-foreground">
              Décor · Design · Color
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/process", label: "Process" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-primary hidden md:inline-flex">
          Get a quote
        </Link>
      </div>
    </header>
  );
}
