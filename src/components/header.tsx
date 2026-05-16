import { useLocation } from '@tanstack/react-router'
import { Menu, Moon, Sun, X } from 'lucide-react'
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
  const location = useLocation()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDarkMode(savedTheme ? savedTheme === 'dark' : prefersDark)
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
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant bg-surface shadow-sm dark:border-outline dark:bg-primary-container dark:shadow-md">
      <div className="mx-auto flex h-20 max-w-max-width items-center justify-between px-margin-mobile md:px-margin-desktop">
        <a href="/" aria-label="REPOWER-RDC accueil" onClick={closeMobileMenu}>
          <img
            alt="REPOWER-RDC Logo"
            className="h-12 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1vT-0rx9iCFDDC22d563aKtyXfwa4IGAMRBuXndhEXtqyNfI_DLXRw4rTFL9xCViebyIkRqDMcYdr9Ot2FG7hsy2LbsrLJVt7wHOxJLYz47lYsRR_99ePAX51VA5LFTMhS8O-XcL-InW-U-x9_biSYcJ5UcJZzodF0K4-AulmSz34Tsrv0reRGons5-h46EuiyaxoO_VzYkYwsnF2yaLKrl2HY3glZg8SthT59Xy3WthLcttzOz1j8Vm9-wyliXVUxwHKPOa64QOP"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              className={
                isActivePath(href)
                  ? 'border-b-2 border-secondary pb-1 font-body-md text-body-md font-bold text-secondary dark:text-secondary-fixed'
                  : 'font-body-md text-body-md text-on-surface transition-colors hover:text-secondary dark:text-on-surface-variant dark:hover:text-secondary-fixed'
              }
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          />
          <QuoteButton />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          />
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="rounded-lg border border-outline-variant p-2 text-on-surface transition-colors hover:border-secondary hover:text-secondary dark:border-outline dark:text-on-surface-variant dark:hover:border-secondary-fixed dark:hover:text-secondary-fixed"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-outline-variant bg-surface transition-[max-height,opacity] duration-300 dark:border-outline dark:bg-primary-container md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-margin-mobile py-4">
          {navLinks.map(({ label, href }) => (
            <a
              className={
                isActivePath(href)
                  ? 'rounded-lg bg-secondary-container px-4 py-3 font-body-md text-body-md font-bold text-on-secondary-container dark:bg-secondary-fixed dark:text-on-secondary'
                  : 'rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface transition-colors hover:bg-surface-container dark:text-on-surface-variant dark:hover:bg-surface-tint/20'
              }
              href={href}
              key={label}
              onClick={closeMobileMenu}
            >
              {label}
            </a>
          ))}
          <div className="pt-3">
            <QuoteButton className="w-full justify-center" />
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant text-on-surface transition-colors hover:border-secondary hover:text-secondary dark:border-outline dark:text-on-surface-variant"
      onClick={onClick}
      type="button"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

function QuoteButton({ className = '' }: { className?: string }) {
  return (
    <a
      className={`inline-flex rounded-lg bg-secondary-container px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-secondary-container transition-colors hover:bg-secondary ${className}`}
      href="/demander-un-devis"
      type="button"
    >
      Demander un devis
    </a>
  )
}
