import { Hammer, Wrench, PaintBucket, Ruler, Sparkles, Shield } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Nieuwbouw",
    description: "Complete bouwprojecten van fundering tot oplevering",
  },
  {
    icon: Wrench,
    title: "Renovatie",
    description: "Verbouwingen en modernisering van bestaande panden",
  },
  {
    icon: PaintBucket,
    title: "Onderhoud",
    description: "Regelmatig onderhoud en herstelwerkzaamheden",
  },
  {
    icon: Ruler,
    title: "Advies",
    description: "Professioneel advies voor al uw bouwprojecten",
  },
  {
    icon: Sparkles,
    title: "Interieur",
    description: "Creatieve ontwerpen en interieuroplossingen",
  },
  {
    icon: Shield,
    title: "Kwaliteit",
    description: "Strikte kwaliteitsbewaking bij elk project",
  },
]

export function Services() {
  return (
    <section id="diensten" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Onze diensten</p>
          <h2 className="max-w-4xl text-balance text-4xl font-extralight leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Complete dienstverlening
            <br />
            <span className="font-semibold">voor elk bouwproject</span>
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-background p-10 transition-all duration-500 hover:bg-muted/50"
              >
                {/* Animated border on hover */}
                <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-foreground/10" />

                <div className="relative">
                  <div className="mb-8 flex size-14 items-center justify-center border border-border bg-card transition-all duration-500 group-hover:scale-105 group-hover:border-foreground/30">
                    <Icon className="size-6 text-foreground transition-transform duration-500 group-hover:rotate-3" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium tracking-tight text-foreground">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
