import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="over-ons" className="border-t border-border bg-muted/20 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column: Text content */}
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Over Alpha bouw</p>
            <h2 className="mb-10 text-balance text-4xl font-extralight leading-tight tracking-tight text-foreground md:text-5xl">
              Uw partner in
              <br />
              <span className="font-semibold">professioneel bouwen</span>
            </h2>
            <div className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Alpha bouw BV is uw betrouwbare partner voor alle bouwwerkzaamheden. Met een passie voor kwaliteit en
                vakmanschap realiseren wij projecten waar u trots op kunt zijn.
              </p>
              <p>
                Of het nu gaat om nieuwbouw, renovatie, of onderhoud — wij begeleiden u van begin tot eind met
                persoonlijke aandacht en transparante communicatie.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
            >
              Neem contact op
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Right column: Visual showcase */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] border border-border bg-gradient-to-br from-muted/50 to-muted p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Projecten</p>
                  <p className="mt-2 text-4xl font-extralight text-foreground">A–Z</p>
                </div>
                <div className="aspect-square border border-border bg-card p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Focus</p>
                  <p className="mt-4 text-lg font-medium leading-snug text-foreground">Kwaliteit & Vakmanschap</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square border border-border bg-card p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Aanpak</p>
                  <p className="mt-4 text-lg font-medium leading-snug text-foreground">Persoonlijk & Transparant</p>
                </div>
                <div className="aspect-[4/3] border border-border bg-gradient-to-br from-foreground to-foreground/90 p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-background/60">Resultaat</p>
                  <p className="mt-2 text-4xl font-extralight text-background">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
