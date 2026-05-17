import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  CheckCircle2,
  Cpu,
  Phone,
  Shield,
  ShoppingCart,
  SunMedium,
} from 'lucide-react'

export const Route = createFileRoute('/nos-produits')({
  component: ProductsPage,
})

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
      'https://lh3.googleusercontent.com/aida/ADBb0uhNFjhNYmgtLl5uursTH0SAIdKVFLWbnZXjnEoZ3B1e_lbyKt8YPHvdQVF1VmHjZ4nzRDBGuMXqOHzcLbBP8YDUnv0xEKvBVyPeCI5nEY1QKQ9a-3_SvW0jQ4e2DGwF-cDHizn7EEGTrP8OHZbORaCNyiUgHcMh55_gfTqnlJ5eUAyhuPy1g_j3ZCChM-mKoEs0Ma5AZfADsH2j5_vcB6K3bqEdHPa7RNfDHyzWrE5eYUEiYSIa-4fqwLch',
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
      'https://lh3.googleusercontent.com/aida/ADBb0uhJAwITZfJXTebCl0EcMbPtezYzsYJH-6nNYth-JNif7ZdoqU7rs3mGk35Kzpv-bseLDpS9_dGy7c0x-1801u89quYofo51IXRmM62LtXngsrlo9iYjkz6mQZkBOBFDMFFP4TEaEoq9s1nOueUoJ3dN4ikUk0LA1-ARg4S1xSeqeQcaVWQVYgSBjlhF7ptxpVMvxfoBOCDrcBlHxeBav-C0tRQoRQ9xEhiqHbjuxg6XZKsXtiI4NifzL78',
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
      'https://lh3.googleusercontent.com/aida/ADBb0ugpKRCqu6AZQi0X2W5CpFu8smqw_A4aNHw1Qqy5eKwICVns-5teVsli3ZJJfC_E6a5j_iliPKPSDEC55Yh8ncZAB_L6pT4YsRLEgnnQ_SjGGpaPqg7NFM1PxOOLwBNZGVpym0siyohX3dliDrg29-u2opf7HDpHsFzAx6GaXd12c3nwOrzFDfUEEiI_a6XacwFfsZZOuDo-38d2GUKcapP_wHpy2HiDsbSle7uFmdxGuowQDV_kQpvTzHU',
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
      'https://lh3.googleusercontent.com/aida/ADBb0uj_dm8gjhiEhS3Ob2uVsVINsMa1juoK7mICdHS0D6EK5jxjt3p9TkcPUZcpq2u7VMK_wkyWm2yRhKtWaxv6EJ_OU_koGryjHw0RhmdvwxSyuAeqtgKd4l_7agkT0r7r_kRR1lOtmL966G0ffEKELDt2LY43f19iM9DMNGkras2_A2fUL0CL7S7rc1v3nZsmbvEhItAe0f2bFtfffh_zX0w3peGu57jGfTeIx8F_D2nrWlOBF1D-CXfpuD4',
    sourceUrl: 'https://www.mustpower.com/product/pc1800a-30a-40a/',
    products: protectionProducts,
  },
]

function ProductsPage() {
  return (
    <main className="bg-background px-margin-mobile pb-20 pt-40 text-on-background dark:bg-gray-950 dark:text-gray-200 md:px-margin-desktop">
      <div className="mx-auto max-w-max-width">
        <header className="mb-16">
          <h1 className="mb-4 font-headline-xl text-headline-xl text-primary dark:text-white">
            Catalogue de Solutions Energetiques
          </h1>
          <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant dark:text-gray-400">
            L excellence technique au service de votre autonomie. Decouvrez notre
            selection d equipements solaires, batteries, convertisseurs, cables et
            protections pour vos projets residentiels et industriels.
          </p>
        </header>

        {productSections.map((section) => (
          <section className="mb-20" id={section.id} key={section.id}>
            <div className="mb-8 flex items-center gap-4">
              <section.icon className="text-secondary dark:text-orange-400" size={28} />
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight">
                {section.title}
              </h2>
            </div>

            <div
              className={
                section.theme === 'dark'
                  ? 'grid grid-cols-1 gap-gutter-md border border-outline bg-primary-container p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-outline dark:bg-gray-900'
                  : 'grid grid-cols-1 gap-gutter-md border border-outline-variant bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-outline dark:bg-gray-900'
              }
            >
              <div className="flex flex-col">
                <span
                  className={
                    section.theme === 'dark'
                      ? 'mb-3 font-label-md text-label-md uppercase tracking-widest text-secondary-fixed dark:text-orange-400'
                      : 'mb-3 font-label-md text-label-md uppercase tracking-widest text-secondary dark:text-orange-400'
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
                          ? 'flex items-center justify-between border border-white/10 bg-white/5 p-4 dark:bg-gray-800/50'
                          : 'flex items-center justify-between border border-outline-variant bg-surface-container-lowest p-4 dark:border-outline dark:bg-gray-800/50'
                      }
                      key={product}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className={
                            section.theme === 'dark'
                              ? 'mt-0.5 shrink-0 text-secondary-fixed dark:text-orange-400'
                              : 'mt-0.5 shrink-0 text-primary dark:text-orange-400'
                          }
                          size={18}
                        />
                        <span className="font-body-md text-body-md">{product}</span>
                      </div>
                      <a
                        className={
                          section.theme === 'dark'
                            ? 'shrink-0 font-label-md text-label-md text-secondary-fixed hover:underline dark:text-orange-400'
                            : 'shrink-0 font-label-md text-label-md text-secondary hover:underline dark:text-orange-400'
                        }
                        href="#contact-catalogue"
                      >
                        Devis
                      </a>
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

          <div className="rounded-lg border border-outline-variant bg-white p-6 shadow-sm dark:border-outline dark:bg-gray-950/90">
            <h3 className="mb-3 font-headline-md text-headline-md text-primary dark:text-white">
              Devis rapide
            </h3>
            <p className="mb-5 text-on-surface-variant dark:text-on-surface-variant">
              Contactez-nous pour recevoir une proposition detaillee.
            </p>
            <div className="space-y-3">
              <a className="flex items-center gap-3 text-secondary hover:underline" href="tel:+243810000000">
                <Phone size={18} />
                +243 81 000 0000
              </a>
              <a className="flex items-center gap-3 text-secondary hover:underline" href="mailto:contact@repower-rdc.com">
                <ShoppingCart size={18} />
                contact@repower-rdc.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
