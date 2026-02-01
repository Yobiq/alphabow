import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="border-t border-border py-32">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>

        <h2 className="text-balance text-4xl font-extralight leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Klaar om te bouwen aan
          <br />
          <span className="font-semibold">uw volgende project?</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Neem contact op voor een vrijblijvend gesprek over de mogelijkheden.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:info@alfabouwbv.nl"
            className="group inline-flex items-center justify-center gap-3 bg-foreground px-10 py-5 text-sm font-medium uppercase tracking-wider text-background transition-all duration-300 hover:bg-foreground/90"
          >
            <Mail className="size-4" />
            Contact opnemen
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+31123456789"
            className="inline-flex items-center justify-center gap-3 border border-border bg-background px-10 py-5 text-sm font-medium uppercase tracking-wider text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-muted/50"
          >
            <Phone className="size-4" />
            Bel ons direct
          </a>
        </div>
      </div>
    </section>
  )
}
