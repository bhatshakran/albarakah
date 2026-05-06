import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/process", label: "Process" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <BrandMark className="w-60" />
          {/* <span className="flex-col leading-none flex">
            <span className="font-display text-2xl tracking-tight">
              Craftronix
            </span>
            <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-muted-foreground">
              Décor · Design · Color
            </span>
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
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

        {/* Right side (CTA + Hamburger) */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link to="/contact" className="btn-primary hidden lg:inline-flex">
            Get a quote
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-6 w-6 lg:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 bg-foreground transition-transform ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 bg-foreground transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 bg-foreground transition-transform ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="container-prose flex flex-col gap-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/80"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
