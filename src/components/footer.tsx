import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

const serviceLinks = [
  { href: '#products', label: 'Catalogue produits' },
  { href: '#services', label: 'Installation solaire' },
  { href: '#services', label: 'Maintenance & support' },
  { href: '#services', label: 'Audit energetique' },
]

const companyLinks = [
  { href: '#about', label: 'A propos de REPOWER-RDC' },
  { href: '#team', label: 'Notre equipe' },
  { href: '#contact', label: 'Parler a un conseiller' },
]

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-outline bg-tertiary text-tertiary-fixed dark:bg-tertiary-container dark:text-on-tertiary-container">
      <div className="mx-auto max-w-max-width px-margin-mobile py-12 md:px-margin-desktop md:py-16">
        <section className="py-24 bg-tertiary">
        <div className="px-margin-desktop max-w-max-width mx-auto text-center">
          <h2 className="font-headline-xl text-headline-xl text-white mb-8">
            Prêt à transformer votre consommation énergétique ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="bg-secondary text-white px-10 py-4 rounded font-label-md text-label-md hover:opacity-90 transition-opacity"
              href="#"
            >
              Contactez notre équipe
            </a>
            <a
              className="border border-white text-white px-10 py-4 rounded font-label-md text-label-md hover:bg-white hover:text-tertiary transition-all"
              href="#"
            >
              Découvrir nos projets
            </a>
          </div>
        </div>
      </section>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 font-headline-md text-headline-md font-extrabold text-white">
              REPOWER-RDC
            </div>
            <p className="mb-5 font-body-md text-body-md text-tertiary-fixed-dim">
              Solutions solaires pour residences, commerces et industries en RDC, avec une expertise ancree a Lubumbashi.
            </p>

            <div className="space-y-3 font-body-md text-body-md text-tertiary-fixed-dim">
              <a
                className="flex items-center gap-3 transition-colors hover:text-secondary-fixed"
                href="tel:+243000000000"
              >
                <Phone size={18} />
                +243 000 000 000
              </a>
              <a
                className="flex items-center gap-3 transition-colors hover:text-secondary-fixed"
                href="mailto:contact@repower-rdc.com"
              >
                <Mail size={18} />
                contact@repower-rdc.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0" size={18} />
                <span>Lubumbashi, Republique Democratique du Congo</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed">
              Produits & services
            </h3>
            {serviceLinks.map((link) => (
              <a
                className="font-body-md text-body-md text-tertiary-fixed-dim transition-colors hover:text-white"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed">
              Entreprise
            </h3>
            {companyLinks.map((link) => (
              <a
                className="font-body-md text-body-md text-tertiary-fixed-dim transition-colors hover:text-white"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed">
              Reseaux sociaux
            </h3>
            <p className="font-body-md text-body-md text-tertiary-fixed-dim">
              Suivez nos projets, conseils energie et nouveautes produits.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-tertiary-fixed transition-all hover:border-secondary-fixed hover:bg-secondary hover:text-white"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest text-secondary-fixed transition-colors hover:text-white"
              href="#contact"
            >
              Parler de votre projet
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-tertiary-fixed-dim md:flex-row md:items-center md:justify-between">
          <p>© 2026 REPOWER-RDC. Energie solaire durable pour la RDC.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition-colors hover:text-white" href="#">
              Politique de confidentialite
            </a>
            <a className="transition-colors hover:text-white" href="#">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
