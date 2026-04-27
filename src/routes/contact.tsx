import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Al Barakah · Srinagar Interior Design Studio" },
      {
        name: "description",
        content:
          "Start a project with Al Barakah. Call +91 70060 19179 or email umarysnbhat@gmail.com. Studio in Natipora, Srinagar, J&K. End-to-end interior execution.",
      },
      { property: "og:title", content: "Contact — Al Barakah" },
      {
        property: "og:description",
        content:
          "Book a consultation in Srinagar. Materials, labor and execution — fully managed.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-prose grid gap-16 pb-24 pt-16 md:grid-cols-12 md:gap-20 md:pb-32 md:pt-24">
        <div className="md:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="display-xl mt-8">
            Tell us about <span className="italic-accent">your space.</span>
          </h1>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            A short note is enough to get started. We&apos;ll reply within one
            working day to schedule a consultation — at our studio in Natipora
            or at your site.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Studio</dt>
              <dd className="mt-2 leading-relaxed">
                Al Barakah
                <br /> Natipora, Srinagar
                <br /> Jammu &amp; Kashmir 190015
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2">
                <a
                  href="mailto:umarysnbhat@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  umarysnbhat@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Phone &amp; WhatsApp</dt>
              <dd className="mt-2 space-y-1">
                <a
                  href="tel:+917006019179"
                  className="block transition-colors hover:text-accent"
                >
                  +91 70060 19179
                </a>
                <a
                  href="https://wa.me/917006019179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
                >
                  Chat on WhatsApp →
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-12 border-l-2 border-accent bg-card p-6 text-sm leading-relaxed">
            <p className="eyebrow text-accent">Important</p>
            <p className="mt-3">
              We provide end-to-end project execution including all materials
              and skilled labor. All labor management and associated expenses
              are fully handled by our team — a fully hassle-free experience.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = new FormData(e.currentTarget);

              const enquiry = `
          New Enquiry
          
          Name: ${form.get("name") || ""}
          Email: ${form.get("email") || ""}
          Phone: ${form.get("phone") || ""}
          City: ${form.get("city") || ""}
          Project Type: ${form.get("type") || ""}
          Details: ${form.get("message") || ""}
          `;

              // Copy to clipboard
              await navigator.clipboard.writeText(enquiry);

              // Open WhatsApp with message prefilled
              const whatsappUrl = `https://wa.me/917006019179?text=${encodeURIComponent(enquiry)}`;

              window.open(whatsappUrl, "_blank");

              setSent(true);
            }}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="City" name="city" />
            </div>

            <div>
              <label className="eyebrow block">Project type</label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Residential",
                  "Commercial",
                  "Renovation",
                  "Modular",
                  "Other",
                ].map((p) => (
                  <label
                    key={p}
                    className="cursor-pointer rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors hover:border-accent hover:text-accent has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-accent-foreground"
                  >
                    <input
                      type="radio"
                      name="type"
                      value={p}
                      className="sr-only"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="msg" className="eyebrow block">
                Tell us a bit
              </label>
              <textarea
                id="msg"
                name="message"
                rows={6}
                placeholder="Space, scope, timeline, anything inspiring you…"
                className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
              <p className="text-xs text-muted-foreground">
                We reply within 1 working day.
              </p>
              <button type="submit" className="btn-primary">
                Send enquiry →
              </button>
            </div>

            {sent && (
              <p className="reveal border-l-2 border-accent bg-card p-4 text-sm">
                Thank you — we&apos;ve received your note and will reach out
                shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
