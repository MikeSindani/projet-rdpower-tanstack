import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Headphones,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Settings2,
  Share2,
  ShieldCheck,
  ShoppingCart,
  SunMedium,
  Users,
  Wrench,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

const products = [
  {
    category: 'Panneau solaire',
    name: 'Panneau Solaire 450w Mono',
    tier: 'Premium Tier',
  },
  {
    category: 'Technologie bifaciale',
    name: 'Panneau Bifacial 600w',
    tier: 'High Efficiency',
  },
  {
    category: 'Onduleur hybride',
    name: 'Convertisseur Hybride 12kw',
    tier: 'Smart Control',
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0ugpKRCqu6AZQi0X2W5CpFu8smqw_A4aNHw1Qqy5eKwICVns-5teVsli3ZJJfC_E6a5j_iliPKPSDEC55Yh8ncZAB_L6pT4YsRLEgnnQ_SjGGpaPqg7NFM1PxOOLwBNZGVpym0siyohX3dliDrg29-u2opf7HDpHsFzAx6GaXd12c3nwOrzFDfUEEiI_a6XacwFfsZZOuDo-38d2GUKcapP_wHpy2HiDsbSle7uFmdxGuowQDV_kQpvTzHU',
  },
  {
    category: 'Stockage energie',
    name: 'Batterie Lithium 600Ah',
    tier: 'LiFePO4 Gen 3',
    image:
      'https://lh3.googleusercontent.com/aida/ADBb0uhJAwITZfJXTebCl0EcMbPtezYzsYJH-6nNYth-JNif7ZdoqU7rs3mGk35Kzpv-bseLDpS9_dGy7c0x-1801u89quYofo51IXRmM62LtXngsrlo9iYjkz6mQZkBOBFDMFFP4TEaEoq9s1nOueUoJ3dN4ikUk0LA1-ARg4S1xSeqeQcaVWQVYgSBjlhF7ptxpVMvxfoBOCDrcBlHxeBav-C0tRQoRQ9xEhiqHbjuxg6XZKsXtiI4NifzL78',
  },
]

const values = [
  'Equipements fiables de grade industriel',
  'Installation professionnelle certifiee',
  'Respect strict des normes de securite',
  'Soutien au developpement economique local',
]

const teamValues = [
  {
    icon: Users,
    title: 'Professionnalisme',
    text: 'Chaque membre de notre equipe est forme aux dernieres technologies photovoltaIques mondiales.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Nous recherchons continuellement les solutions les plus efficaces pour le contexte specifique du Katanga.',
  },
  {
    icon: ShieldCheck,
    title: 'Engagement',
    text: 'Nous accompagnons nos clients bien au dela de l installation, pour assurer la perennite de leur investissement.',
  },
]

const faqs = [
  {
    question: 'Le solaire est-il fiable pendant la saison des pluies en RDC ?',
    answer:
      'Oui. Nos panneaux captent aussi la lumiere diffuse, et nos systemes de stockage sont dimensionnes pour maintenir une bonne autonomie.',
  },
  {
    question: 'Combien de temps dure une installation complete ?',
    answer:
      'Pour un systeme residentiel standard, il faut generalement 2 a 4 jours apres validation technique. Les projets industriels suivent un planning dedie.',
  },
  {
    question: 'Quelle est la duree de vie des batteries lithium proposees ?',
    answer:
      'Nos batteries LiFePO4 sont concues pour plusieurs milliers de cycles, soit environ 10 a 15 ans selon l usage.',
  },
]

function RouteComponent() {
  return (
    <main className="bg-surface font-body-md text-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed dark:bg-primary dark:text-on-primary-fixed">
      <section
        className="relative flex h-screen min-h-[700px] items-center overflow-hidden pt-20"
        id="home"
      >
        <div className="absolute inset-0 z-0">
          <img
            alt="Industrial Solar Farm Lubumbashi"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhNFjhNYmgtLl5uursTH0SAIdKVFLWbnZXjnEoZ3B1e_lbyKt8YPHvdQVF1VmHjZ4nzRDBGuMXqOHzcLbBP8YDUnv0xEKvBVyPeCI5nEY1QKQ9a-3_SvW0jQ4e2DGwF-cDHizn7EEGTrP8OHZbORaCNyiUgHcMh55_gfTqnlJ5eUAyhuPy1g_j3ZCChM-mKoEs0Ma5AZfADsH2j5_vcB6K3bqEdHPa7RNfDHyzWrE5eYUEiYSIa-4fqwLch"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/35 dark:from-primary dark:via-primary/85 dark:to-primary-container/60" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-max-width px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl text-on-primary">
            <span className="mb-6 inline-block bg-secondary-container px-4 py-1 font-label-md text-label-md uppercase tracking-wider text-on-secondary-container">
              Energie Durable en RDC
            </span>
            <h1 className="mb-6 font-headline-xl text-headline-xl text-white">
              Electrifier l avenir de la RDC avec precision
            </h1>
            <p className="mb-10 font-body-lg text-body-lg text-primary-fixed">
              Nous apportons des solutions solaires de pointe au coeur du Katanga,
              garantissant une autonomie energetique robuste pour les industries et
              les residences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded bg-secondary px-8 py-4 font-bold text-on-primary transition-all hover:bg-secondary-container"
                href="#contact"
              >
                Demarrer votre projet
              </a>
              <a
                className="rounded border border-white px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                href="#about"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24 dark:bg-surface-container-low" id="about">
        <div className="mx-auto grid max-w-max-width grid-cols-1 items-center gap-16 px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
          <div className="relative">
            <img
              alt="Solar installers team"
              className="h-[500px] w-full rounded-xl border border-outline-variant object-cover shadow-lg dark:border-outline"
              src="https://lh3.googleusercontent.com/aida/ADBb0uj_dm8gjhiEhS3Ob2uVsVINsMa1juoK7mICdHS0D6EK5jxjt3p9TkcPUZcpq2u7VMK_wkyWm2yRhKtWaxv6EJ_OU_koGryjHw0RhmdvwxSyuAeqtgKd4l_7agkT0r7r_kRR1lOtmL966G0ffEKELDt2LY43f19iM9DMNGkras2_A2fUL0CL7S7rc1v3nZsmbvEhItAe0f2bFtfffh_zX0w3peGu57jGfTeIx8F_D2nrWlOBF1D-CXfpuD4"
            />
            <div className="absolute -bottom-6 -right-6 hidden bg-primary-container p-8 text-on-primary shadow-xl md:block dark:bg-secondary">
              <div className="mb-1 text-4xl font-bold">10+</div>
              <div className="text-sm opacity-80">Annees d expertise</div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 font-headline-lg text-headline-lg text-primary dark:text-white">
              Notre Engagement pour Lubumbashi
            </h2>
            <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant dark:text-on-surface-variant">
              Base a Lubumbashi, REPOWER-RDC est ne de la volonte de transformer
              le paysage energetique de la Republique Democratique du Congo. Notre
              histoire est celle d une passion pour l innovation technologique mise
              au service du developpement local.
            </p>
            <p className="mb-10 font-body-md text-body-md leading-relaxed text-on-surface-variant dark:text-on-surface-variant">
              Notre mission est d offrir des systemes solaires fiables qui repondent
              aux defis climatiques et industriels uniques de notre region.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-secondary" size={28} />
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Qualite</h4>
                  <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                    Materiel certifie internationalement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Headphones className="text-secondary" size={28} />
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Support Local</h4>
                  <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                    Equipe basee a Lubumbashi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 dark:bg-primary-container/30" id="services">
        <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary dark:text-white">
              Solutions Energetiques Completes
            </h2>
            <p className="mx-auto max-w-2xl text-on-surface-variant dark:text-on-surface-variant">
              Une expertise technique multidisciplinaire pour assurer votre transition
              energetique en toute serenite.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-4">
            <div className="group flex flex-col justify-between rounded-xl border border-outline-variant bg-primary-container p-8 text-on-primary md:col-span-2 dark:border-outline">
              <SunMedium className="mb-8 text-secondary" size={40} />
              <div>
                <h3 className="mb-4 font-headline-md text-headline-md">
                  Installation Solaire Industrielle
                </h3>
                <p className="mb-6 text-on-primary/70">
                  Conception et deploiement de parcs solaires haute performance
                  pour les entreprises du secteur minier et industriel.
                </p>
                <a className="inline-flex items-center gap-2 font-bold text-secondary" href="#contact">
                  Explorer
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-outline-variant bg-surface-container-high p-8 dark:border-outline dark:bg-surface-container">
              <BatteryCharging className="mb-6 text-primary dark:text-secondary-fixed" size={40} />
              <h3 className="mb-3 font-bold text-primary dark:text-white">Stockage Intelligent</h3>
              <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                Systemes de batteries lithium pour une autonomie garantie 24/7.
              </p>
            </div>

            <div className="rounded-xl border border-outline-variant bg-surface-container-high p-8 dark:border-outline dark:bg-surface-container">
              <Settings2 className="mb-6 text-primary dark:text-secondary-fixed" size={40} />
              <h3 className="mb-3 font-bold text-primary dark:text-white">
                Onduleurs & Regulateurs
              </h3>
              <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                Gestion electronique avancee pour une stabilite parfaite du courant.
              </p>
            </div>

            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-2 dark:border-outline dark:bg-surface-container-low">
              <div className="flex items-center gap-6">
                <Wrench className="text-primary dark:text-secondary-fixed" size={42} />
                <div>
                  <h3 className="mb-2 font-headline-md text-headline-md text-primary dark:text-white">
                    Maintenance & Support
                  </h3>
                  <p className="text-on-surface-variant dark:text-on-surface-variant">
                    Surveillance en temps reel et interventions rapides sur site a
                    Lubumbashi pour maximiser le rendement de vos installations.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-secondary-container p-8 text-on-secondary-container md:col-span-2">
              <div>
                <h3 className="mb-2 font-headline-md text-headline-md">
                  Besoin d un audit ?
                </h3>
                <p className="opacity-90">
                  Nos ingenieurs evaluent vos besoins gratuitement.
                </p>
              </div>
              <a
                className="rounded bg-primary px-8 py-3 font-bold text-on-primary transition-transform hover:scale-105 dark:bg-primary-container"
                href="#contact"
              >
                Demander un Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 dark:bg-surface-container-high/30" id="products">
        <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="mb-2 font-headline-lg text-headline-lg text-primary dark:text-white">
                Equipements de Classe Mondiale
              </h2>
              <p className="text-on-surface-variant dark:text-on-surface-variant">
                Selection rigoureuse pour les conditions climatiques de la RDC.
              </p>
            </div>
            <a className="flex items-center gap-2 font-bold text-secondary hover:underline" href="/nos-produits">
              Voir tout le catalogue
            </a>
          </div>

          <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                className="overflow-hidden rounded border border-outline-variant bg-surface-container-lowest transition-all hover:shadow-lg dark:border-outline dark:bg-surface-container"
                key={product.name}
              >
                <div className="relative h-64 bg-white dark:bg-surface-container-lowest">
                  {product.image ? (
                    <img
                      alt={product.name}
                      className="h-full w-full object-contain p-4"
                      src={product.image}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-container p-4 dark:bg-surface-container-high">
                      <SunMedium className="text-primary/30 dark:text-white/25" size={72} />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-container dark:text-secondary-fixed">
                    {product.category}
                  </span>
                  <h4 className="mt-1 font-bold text-primary dark:text-white">{product.name}</h4>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-secondary">{product.tier}</span>
                    <button className="rounded bg-primary-container p-2 text-white transition-colors hover:bg-secondary dark:bg-primary">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary dark:bg-primary-container" id="values">
        <div className="mx-auto flex max-w-max-width flex-col items-center gap-16 px-margin-mobile md:flex-row md:px-margin-desktop">
          <div className="md:w-1/2">
            <h2 className="mb-6 font-headline-lg text-headline-lg">
              Electrifier l avenir de la RDC
            </h2>
            <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-primary/80">
              Basee au coeur de Lubumbashi, notre entreprise s appuie sur quatre
              piliers fondamentaux pour garantir le succes de vos projets energetiques.
            </p>
            <ul className="space-y-4">
              {values.map((value) => (
                <li className="flex items-center gap-4" key={value}>
                  <CheckCircle2 className="text-secondary" size={20} />
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:w-1/2 md:grid-cols-2">
            {[
              ['98%', 'Disponibilite systeme'],
              ['500+', 'Installations reussies'],
              ['24/7', 'Assistance technique'],
              ['25Y', 'Garantie performance'],
            ].map(([value, label]) => (
              <div
                className="rounded border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
                key={label}
              >
                <div className="mb-2 text-4xl font-extrabold text-secondary">{value}</div>
                <p className="text-sm opacity-70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-highest py-24 dark:bg-surface-container" id="team">
        <div className="mx-auto max-w-max-width px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-primary dark:text-white">
            L Excellence Technique
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-on-surface-variant dark:text-on-surface-variant">
            Une equipe d ingenieurs et de techniciens passionnes par l innovation et
            engages pour un service client irreprochable.
          </p>
          <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-3">
            {teamValues.map(({ icon: Icon, title, text }) => (
              <div
                className="border border-outline-variant bg-white p-10 text-center dark:border-outline dark:bg-surface-container-lowest"
                key={title}
              >
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-surface-container dark:bg-surface-container-high">
                  <Icon className={title === 'Innovation' ? 'text-secondary' : 'text-primary dark:text-secondary-fixed'} size={40} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-primary dark:text-white">{title}</h4>
                <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24 dark:bg-surface-container-low" id="faq">
        <div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary dark:text-white">
              Questions Frequentes
            </h2>
            <p className="text-on-surface-variant dark:text-on-surface-variant">
              Tout ce que vous devez savoir sur le solaire en RDC.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div
                className="rounded border border-outline-variant p-6 transition-colors hover:bg-surface-container-low dark:border-outline dark:hover:bg-surface-container"
                key={faq.question}
              >
                <h4 className="flex items-center justify-between font-bold text-primary dark:text-white">
                  {faq.question}
                </h4>
                <p className="mt-4 text-on-surface-variant dark:text-on-surface-variant">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 dark:bg-primary-container/30" id="contact">
        <div className="mx-auto grid max-w-max-width grid-cols-1 gap-16 px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary dark:text-white">
              Contactez Nos Experts
            </h2>
            <p className="mb-10 text-on-surface-variant dark:text-on-surface-variant">
              Pret a passer a l energie solaire ? Notre equipe est a votre
              disposition pour toute question ou demande de devis.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-primary dark:text-white">
                    Nom Complet
                  </label>
                  <input
                    className="w-full rounded border border-outline-variant bg-surface-container-lowest p-3 focus:border-primary focus:ring-primary dark:border-outline dark:bg-surface-container"
                    placeholder="Votre nom"
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-primary dark:text-white">
                    Email
                  </label>
                  <input
                    className="w-full rounded border border-outline-variant bg-surface-container-lowest p-3 focus:border-primary focus:ring-primary dark:border-outline dark:bg-surface-container"
                    placeholder="votre@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-primary dark:text-white">
                  Type de Projet
                </label>
                <select className="w-full rounded border border-outline-variant bg-surface-container-lowest p-3 focus:border-primary focus:ring-primary dark:border-outline dark:bg-surface-container">
                  <option>Residentiel</option>
                  <option>Industriel / Minier</option>
                  <option>Commercial</option>
                  <option>Maintenance</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-primary dark:text-white">
                  Message
                </label>
                <textarea
                  className="w-full rounded border border-outline-variant bg-surface-container-lowest p-3 focus:border-primary focus:ring-primary dark:border-outline dark:bg-surface-container"
                  placeholder="Decrivez votre besoin..."
                  rows={4}
                />
              </div>
              <button
                className="w-full rounded bg-primary py-4 font-bold text-on-primary transition-all hover:bg-primary-container dark:bg-secondary dark:text-white"
                type="submit"
              >
                Envoyer la demande
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative h-80 overflow-hidden rounded-xl border border-outline-variant dark:border-outline">
              <div className="absolute inset-0 flex items-center justify-center bg-surface-container dark:bg-surface-container-low">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-secondary" size={42} />
                  <p className="font-bold text-primary dark:text-white">Lubumbashi, Katanga, RDC</p>
                  <p className="text-sm text-on-surface-variant dark:text-on-surface-variant">
                    Avenue Industrielle, Quartier Golf
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded border border-outline-variant bg-surface-container-high p-6 dark:border-outline dark:bg-surface-container">
                <h5 className="mb-2 font-bold text-primary dark:text-white">Telephone</h5>
                <p className="font-bold text-secondary">+243 81 000 0000</p>
              </div>
              <div className="rounded border border-outline-variant bg-surface-container-high p-6 dark:border-outline dark:bg-surface-container">
                <h5 className="mb-2 font-bold text-primary dark:text-white">Email Direct</h5>
                <p className="font-bold text-secondary">contact@repower-rdc.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary dark:bg-secondary"
                href="#"
              >
                <Share2 size={18} />
              </a>
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary dark:bg-secondary"
                href="mailto:contact@repower-rdc.com"
              >
                <Mail size={18} />
              </a>
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary dark:bg-secondary"
                href="tel:+243810000000"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
