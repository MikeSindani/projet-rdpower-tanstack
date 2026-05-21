import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  CheckCircle2,
  Cpu,
  MessageCircle,
  Phone,
  Plus,
  Shield,
  ShoppingCart,
  SunMedium,
  Trash2
} from 'lucide-react'
import { useQuoteStore } from '../store/useQuoteStore'
import { CONTACT_INFO } from '../constants'

export const Route = createFileRoute('/nos-produits')({
  component: ProductsPage,
})

const WHATSAPP_NUMBER = CONTACT_INFO.whatsapp.value

const panelProducts = [
  'Panneau solaire 450w',
  'Panneau solaire bifacial 600w',
]

const inverterProducts = [
  'Convertisseur hybride 6kw',
  'Convertisseur Deye 6kw',
  'Convertisseur hybride 8kw',
  'Convertisseur hybride 12kw',
]

const batteryProducts = [
  'Batterie gel 200Ah',
  'Batterie lithium 100Ah 48v 5,12kwh',
  'Batterie lithium 200Ah 10,24kwh',
  'Batterie lithium 300Ah 15,36kwh',
  'Batterie lithium 600Ah 30kwh',
]

const cableProducts = [
  'Cable solaire 6mm2',
  'Cable VTMB 3x2.5mm2',
  'Cable VTMB 4x4mm2',
  'Cable VTMB 4x6mm2',
  'Cable VOB 1,5mm2',
  'Cable VOB 2,5mm2',
  'Cable flexible 25mm2',
  'Cable flexible 35mm2',
  'Cable flexible 50mm2',
]

const protectionProducts = [
  'Disjoncteur DC 63A',
  'Disjoncteur DC 125A',
  'Controleur AVP',
  'Parafoudre DC 40kA 500V',
  'Parafoudre DC 40kA 1000V',
  'Parafoudre AC 2P 40kA 275V',
  'Parafoudre AC 4P 400V',
  'Tableau divisionnaire 8 modules',
  'Tableau divisionnaire 12 modules',
  'Tableau divisionnaire 18 modules',
]

const productSections = [
  {
    id: 'panneaux',
    title: 'Panneaux solaires',
    subtitle: 'High efficiency',
    description:
      'Modules solaires a haut rendement pour installations residentielles, commerciales et industrielles.',
    icon: SunMedium,
    theme: 'light',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm5LMoC1FI3Z4kFuPFGHP-V0V7lGW07LANd6W9fexes0heOlhfRjG239mw1_hB-G48c0QJwo-4uza0Hh5KM4ylHFRl9Pk2SsSx56oZdBM7AFX2nV1hW9REpJCCWnQkJDPX1Z35QcUhzhMM36utvFx4lp98muHVVDjmOQ40enoqkB11pD1XCusUsKIRxeJgmUbkzxCKVjDlII9n_358IHLKR8o_xUhzu2nXdHSX0EpAXIFKcf6JCANhjVR1HhZzZEvDAiKDIcwgDCud',
    sourceUrl: 'https://www.jasolar.com/',
    products: panelProducts,
  },
  {
    id: 'convertisseurs',
    title: 'Convertisseurs & onduleurs',
    subtitle: 'Performance controlee',
    description:
      'Solutions hybrides et references Deye pour assurer conversion, regulation et stabilite de votre installation.',
    icon: Cpu,
    theme: 'dark',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.ya5yv994aLiQZzOl6-ZHJgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3',
    sourceUrl: 'https://deye.com/product/sun-3-3-6-5-6k-sg04lp1-eu/',
    products: inverterProducts,
  },
  {
    id: 'batteries',
    title: 'Stockage d energie',
    subtitle: 'Lithium & gel',
    description:
      'Batteries de stockage pour autonomie domestique, commerciale et solutions rack de forte capacite.',
    icon: BatteryCharging,
    theme: 'light',
    image:
      'https://image.made-in-china.com/2f0j00bnJkciHtZrqR/Greensun-Touch-Screen-Battery-Backup-20kw-540kw-LiFePO4-Home-Energy-Storage-Battery.jpg',
    sourceUrl:
      'https://www.felicitysolar.com/products/fla48100-felicity-solar-48v-100ah-5kwh-lifepo4-power-battery-rechargeable-lithium-ion-batteries-for-solar-storage-system',
    products: batteryProducts,
  },
  {
    id: 'cables',
    title: 'Cablages & connectique',
    subtitle: 'Distribution propre',
    description:
      'Cables solaires, VTMB, VOB et flexibles pour des installations nettes, fiables et bien dimensionnees.',
    icon: Cable,
    theme: 'light',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.6B_VTz8sybh4oswRSlyECAHaD-?w=800&h=430&rs=1&pid=ImgDetMain&o=7&rm=3',
    sourceUrl: 'https://www.mustpower.com/product/pv9000-hm-3-6-12kw/',
    products: cableProducts,
  },
  {
    id: 'protection',
    title: 'Protection & tableaux',
    subtitle: 'Securite systeme',
    description:
      'Disjoncteurs, parafoudres, tableaux divisionnaires et controle de protection pour systemes durables.',
    icon: Shield,
    theme: 'dark',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.S3YgqEXZQysgRkRVneTLlgHaDa?rs=1&pid=ImgDetMain&o=7&rm=3',
    sourceUrl: 'https://www.mustpower.com/product/pc1800a-30a-40a/',
    products: protectionProducts,
  },
]

function ProductsPage() {
  const { addItem, removeItem, isInCart, items, clearCart } = useQuoteStore()

  const handleWhatsAppBuy = (productName: string) => {
    const message = encodeURIComponent(`Bonjour REPOWER-RDC, je souhaite acheter le produit suivant : ${productName}`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <main className="bg-background px-margin-mobile pb-20 pt-40 text-on-background dark:bg-[#191c1e] dark:text-gray-200 md:px-margin-desktop">
      {/* Panier flottant de devis */}
      {items.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2 animate-bounce">
          <a
            href="/demander-un-devis"
            className="flex items-center gap-3 rounded-full bg-secondary px-6 py-4 font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-secondary"
          >
            <ShoppingCart size={24} />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-secondary">
              {items.length}
            </span>
            Demander mon devis
          </a>
          <button
            onClick={clearCart}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-2xl transition-all hover:scale-105 hover:bg-red-600"
            title="Tout vider"
          >
            <Trash2 size={24} />
          </button>
        </div>
      )}

      <div className="mx-auto max-w-max-width">
        <header className="mb-16">
          <h1 className="mb-4 font-headline-xl text-headline-xl text-primary dark:text-white">
            Catalogue de Solutions Energetiques
          </h1>
          <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant dark:text-gray-400">
            L&apos;excellence technique au service de votre autonomie. Decouvrez notre
            selection d&apos;equipements solaires, batteries, convertisseurs, cables et
            protections pour vos projets residentiels et industriels.
          </p>
        </header>

        {productSections.map((section) => (
          <section className="mb-20" id={section.id} key={section.id}>
            <div className="mb-8 flex items-center gap-4">
              <section.icon className="text-secondary dark:text-secondary" size={28} />
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight">
                {section.title}
              </h2>
            </div>

            <div
              className={
                section.theme === 'dark'
                  ? 'grid grid-cols-1 gap-gutter-md border border-outline bg-primary-container p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-outline dark:bg-[#1e2224]'
                  : 'grid grid-cols-1 gap-gutter-md border border-outline-variant bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-outline dark:bg-[#1e2224]'
              }
            >
              <div className="flex flex-col">
                <span
                  className={
                    section.theme === 'dark'
                      ? 'mb-3 font-label-md text-label-md uppercase tracking-widest text-secondary-fixed dark:text-secondary'
                      : 'mb-3 font-label-md text-label-md uppercase tracking-widest text-secondary dark:text-secondary'
                  }
                >
                  {section.subtitle}
                </span>
                <h3
                  className={
                    section.theme === 'dark'
                      ? 'font-headline-md text-headline-md text-white'
                      : 'font-headline-md text-headline-md text-primary dark:text-white'
                  }
                >
                  {section.title}
                </h3>
                <p
                  className={
                    section.theme === 'dark'
                      ? 'mb-8 mt-4 font-body-md text-body-md text-primary-fixed dark:text-gray-300'
                      : 'mb-8 mt-4 font-body-md text-body-md text-on-surface-variant dark:text-gray-400'
                  }
                >
                  {section.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {section.products.map((product) => (
                    <div
                      className={
                        section.theme === 'dark'
                          ? 'flex flex-col border border-white/10 bg-white/5 p-4 dark:bg-[#252b2e]/50 sm:flex-row sm:items-center sm:justify-between'
                          : 'flex flex-col border border-outline-variant bg-surface-container-lowest p-4 dark:border-outline dark:bg-[#252b2e]/50 sm:flex-row sm:items-center sm:justify-between'
                      }
                      key={product}
                    >
                      <div className="mb-4 flex items-start gap-3 sm:mb-0">
                        <CheckCircle2
                          className={
                            section.theme === 'dark'
                              ? 'mt-0.5 shrink-0 text-secondary-fixed dark:text-secondary'
                              : 'mt-0.5 shrink-0 text-primary dark:text-secondary'
                          }
                          size={18}
                        />
                        <span className="font-body-md text-body-md">{product}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handleWhatsAppBuy(product)}
                          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-green-700"
                        >
                          <MessageCircle size={14} />
                          Acheter
                        </button>
                        
                        {isInCart(product) ? (
                          <button
                            onClick={() => removeItem(product)}
                            className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-500 transition-all hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 size={14} />
                            Retirer
                          </button>
                        ) : (
                          <button
                            onClick={() => addItem({ name: product, category: section.title })}
                            className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-bold text-secondary transition-all hover:bg-secondary hover:text-white dark:text-secondary dark:hover:text-white"
                          >
                            <Plus size={14} />
                            Ajouter au devis
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    className={
                      section.theme === 'dark'
                        ? 'inline-flex items-center gap-2 bg-white px-6 py-3 font-label-md text-label-md text-primary transition-all hover:bg-secondary hover:text-white'
                        : 'inline-flex items-center gap-2 bg-primary px-6 py-3 font-label-md text-label-md text-white transition-all hover:bg-secondary'
                    }
                    href="#contact-catalogue"
                  >
                    Demander un devis
                    <ArrowRight size={16} />
                  </a>
                  <a
                    className={
                      section.theme === 'dark'
                        ? 'inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-label-md text-label-md text-white transition-all hover:bg-white/10'
                        : 'inline-flex items-center gap-2 border border-outline-variant px-6 py-3 font-label-md text-label-md text-primary transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-outline dark:text-white'
                    }
                    href={section.sourceUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source visuelle
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex h-full flex-col gap-4">
                <img
                  alt={section.title}
                  className="h-[360px] w-full border border-outline-variant object-cover shadow-xl dark:border-outline"
                  src={section.image}
                />
                <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                  Visuel representatif de la famille de produits. Les references
                  exactes sont repertoriees ci-contre pour faciliter les demandes
                  de prix.
                </p>
              </div>
            </div>
          </section>
        ))}

        <section className="mb-20 bg-primary p-10 text-center text-white md:p-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-headline-xl text-headline-xl">
              Besoin d{"'"}un systeme complet ?
            </h2>
            <p className="mb-10 font-body-lg text-body-lg text-surface-variant">
              Nous pouvons assembler pour vous un kit complet incluant panneaux,
              convertisseurs, batteries, cables et protections adaptes a votre
              installation.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-10 py-5 font-headline-md text-headline-md text-white transition-all hover:bg-white hover:text-primary"
              href="#contact-catalogue"
            >
              Demande de devis pour ensemble de produits
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section
          className="grid grid-cols-1 gap-8 rounded-xl border border-outline-variant bg-surface-container-low p-8 dark:border-outline dark:bg-surface-container md:grid-cols-[1.2fr_0.8fr]"
          id="contact-catalogue"
        >
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary dark:text-white">
              Repertorions tout et chiffrons proprement
            </h2>
            <p className="mb-6 font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant">
              Envoyez-nous la liste des references qui vous interessent et nous
              preparons un devis adapte a votre besoin, avec alternatives si
              necessaire.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={18} />
                Prix par reference ou par ensemble
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={18} />
                Conseils de compatibilite
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={18} />
                Dimensionnement selon votre installation
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-outline-variant bg-white p-6 shadow-sm dark:border-outline dark:bg-[#191c1e]/90">
            <h3 className="mb-3 font-headline-md text-headline-md text-primary dark:text-white">
              Devis rapide
            </h3>
            <p className="mb-5 text-on-surface-variant dark:text-on-surface-variant">
              Contactez-nous pour recevoir une proposition detaillee.
            </p>
            <div className="space-y-3">
              <a className="flex items-center gap-3 text-secondary hover:underline" href={`tel:${CONTACT_INFO.phone.value}`}>
                <Phone size={18} />
                {CONTACT_INFO.phone.display}
              </a>
              <a className="flex items-center gap-3 text-secondary hover:underline" href={`mailto:${CONTACT_INFO.email}`}>
                <ShoppingCart size={18} />
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
