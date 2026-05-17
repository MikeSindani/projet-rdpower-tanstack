import { useLocation } from '@tanstack/react-router'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'A propos', href: '/about' },
  { label: 'Services', href: '/nos-services' },
  { label: 'Produits', href: '/nos-produits' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDarkMode(savedTheme ? savedTheme === 'dark' : prefersDark)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const closeMobileMenu = () => setIsMenuOpen(false)

  const isActivePath = (href: string) => {
    const pathname = href.split('#')[0] || '/'
    return location.pathname === pathname
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 py-2 shadow-lg backdrop-blur-md dark:bg-gray-950/90'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-max-width items-center justify-between px-margin-mobile md:px-margin-desktop">
        <a
          href="/"
          aria-label="REPOWER-RDC accueil"
          onClick={closeMobileMenu}
          className="transition-transform hover:scale-105"
        >
          <img
            alt="REPOWER-RDC Logo"
            className="h-10 object-contain md:h-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1vT-0rx9iCFDDC22d563aKtyXfwa4IGAMRBuXndhEXtqyNfI_DLXRw4rTFL9xCViebyIkRqDMcYdr9Ot2FG7hsy2LbsrLJVt7wHOxJLYz47lYsRR_99ePAX51VA5LFTMhS8O-XcL-InW-U-x9_biSYcJ5UcJZzodF0K4-AulmSz34Tsrv0reRGons5-h46EuiyaxoO_VzYkYwsnF2yaLKrl2HY3glZg8SthT59Xy3WthLcttzOz1j8Vm9-wyliXVUxwHKPOa64QOP"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              className={`rounded-full px-4 py-2 font-label-md text-label-md transition-all ${
                isActivePath(href)
                  ? ' text-black bg-orange-600'
                  : 'text-on-surface hover:bg-surface-container dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          />
          <QuoteButton />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          />
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-secondary hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-orange-600"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X size={20} color='red' /> : <Menu color='white' size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-40 h-[calc(100vh-72px)] w-full bg-white transition-all duration-300 dark:bg-gray-950 lg:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2 p-6">
          {navLinks.map(({ label, href }) => (
            <a
              className={`flex items-center justify-between rounded-xl px-6 py-4 transition-all ${
                isActivePath(href)
                  ? 'bg-secondary/10 text-black dark:bg-orange-600/10 dark:text-orange-400'
                  : 'text-black hover:bg-surface-container dark:text-gray-200 dark:hover:bg-gray-900'
              }`}
              href={href}
              key={label}
              onClick={closeMobileMenu}
            >
              <span className="font-headline-md text-headline-md font-bold">
                {label}
              </span>
              <ArrowRight size={20} />
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <QuoteButton className="w-full justify-center py-5 text-lg" />
            <div className="mt-4 text-center">
              <p className="text-sm text-on-surface-variant dark:text-gray-400">
                Besoin d'aide ?
              </p>
              <a
                href="tel:+243810000000"
                className="font-bold text-secondary dark:text-orange-400"
              >
                +243 81 000 0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function ThemeToggle({
  isDarkMode,
  onClick,
}: {
  isDarkMode: boolean
  onClick: () => void
}) {
  return (
    <button
      aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-all hover:bg-secondary hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-orange-600"
      onClick={onClick}
      type="button"
    >
      {isDarkMode ? (
        <Sun size={20} className="transition-transform hover:rotate-45" />
      ) : (
        <Moon size={20} color='white' className="transition-transform hover:-rotate-12 " />
      )}
    </button>
  )
}

function QuoteButton({ className = '' }: { className?: string }) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-8 py-2.5 font-label-md text-label-md font-bold uppercase tracking-widest text-white transition-all hover:bg-secondary-container hover:shadow-lg active:scale-95 bg-orange-600 dark:hover:bg-orange-700 ${className}`}
      href="/demander-un-devis"
    >
      <span>Demander un devis</span>  
      <ArrowRight size={18} />
    </a>
  )
}

