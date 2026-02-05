import { Mail, Phone, MapPin, Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-20 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center border border-background/20 bg-background/10">
                <Building2 className="size-5 text-background" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-background">Alpha bouw BV</h3>
            </div>
            <p className="max-w-sm text-pretty leading-relaxed text-background/70">
              Uw betrouwbare partner voor professionele bouwoplossingen. Van renovatie tot nieuwbouw, van A tot Z.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-xs uppercase tracking-widest text-background/60">Onze bedrijven</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://v0-sword-bv-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 transition-colors hover:text-background"
                >
                  Sword BV
                </a>
              </li>
              <li>
                <a
                  href="http://v0-sword-bv-website-design.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 transition-colors hover:text-background"
                >
                  Goteam
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-xs uppercase tracking-widest text-background/60">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@alfabouwbv.nl"
                  className="flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  <span>info@alfabouwbv.nl</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+31854015937"
                  className="flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span>+31 85 401 5937</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31634657014"
                  className="flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span>WhatsApp: +31 6 3465 7014</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>Marktplein 36, 7311 LR Apeldoorn, Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-mono text-xs uppercase tracking-widest text-background/50">
              © {new Date().getFullYear()} Alpha bouw BV
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-background/50">
              Bouw in alle zaken, van A tot Z
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
