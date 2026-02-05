import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-[url('/modern-construction-site-minimal-black-and-white.jpg')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="mb-16 inline-block border border-foreground/10 bg-background/30 px-8 py-4 backdrop-blur-sm">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">Alpha bouw BV</p>
        </div>

        <h1 className="mb-10 text-balance font-sans text-5xl font-extralight leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Bouw in alle zaken
          <br />
          <span className="font-semibold">van A tot Z</span>
        </h1>

        <p className="mx-auto mb-16 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Van renovatie tot nieuwbouw. Complete bouwoplossingen voor residentiële en commerciële projecten.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#companies"
            className="group inline-flex items-center justify-center bg-foreground px-12 py-5 text-sm font-medium uppercase tracking-wider text-background transition-all duration-300 hover:bg-foreground/90"
          >
            Onze bedrijven
            <ArrowRight className="ml-3 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#diensten"
            className="inline-flex items-center justify-center border border-foreground/20 bg-background/30 px-12 py-5 text-sm font-medium uppercase tracking-wider text-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/40 hover:bg-background/50"
          >
            Bekijk diensten
          </a>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <a href="#companies" className="group flex flex-col items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100">
            Scroll
          </span>
          <div className="relative h-16 w-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
            <div className="absolute top-0 h-8 w-px animate-pulse bg-foreground/60" />
          </div>
        </a>
      </div>
    </section>
  )
}
