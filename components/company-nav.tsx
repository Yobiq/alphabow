import { Building2, Users, ArrowUpRight } from "lucide-react"

const companies = [
  {
    name: "Sword BV",
    tagline: "Premium Sourcing, Delivered Globally",
    description:
      "Hoogwaardige materialen en producten van betrouwbare leveranciers wereldwijd. Uw partner voor internationale sourcing.",
    url: "https://v0-sword-bv-website.vercel.app/",
    icon: Building2,
  },
  {
    name: "Goteam",
    tagline: "Het juiste talent voor uw organisatie",
    description:
      "Professioneel uitzendbureau voor nationale en internationale werknemers. Gekwalificeerd personeel voor elk project.",
    url: "http://v0-sword-bv-website-design.vercel.app/",
    icon: Users,
  },
]

export function CompanyNav() {
  return (
    <section id="companies" className="border-t border-border bg-muted/20 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Onze divisies</p>
          <h2 className="text-balance text-4xl font-extralight leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Gespecialiseerde expertise
            <br />
            <span className="font-semibold">onder één dak</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {companies.map((company) => {
            const Icon = company.icon
            return (
              <a key={company.name} href={company.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative h-full overflow-hidden border border-border bg-card p-10 transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl lg:p-12">
                  {/* Decorative corner */}
                  <div className="absolute right-0 top-0 size-24 translate-x-12 -translate-y-12 bg-foreground/5 transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="flex size-14 items-center justify-center border border-border bg-background transition-all duration-300 group-hover:border-foreground/30">
                          <Icon className="size-6 text-foreground" />
                        </div>
                        <h3 className="text-2xl font-medium tracking-tight text-foreground">{company.name}</h3>
                      </div>
                      <ArrowUpRight className="size-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                    </div>

                    <div className="space-y-4">
                      <p className="text-xl font-medium text-foreground">{company.tagline}</p>
                      <p className="leading-relaxed text-muted-foreground">{company.description}</p>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                      Bezoek website
                      <ArrowUpRight className="size-3" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
