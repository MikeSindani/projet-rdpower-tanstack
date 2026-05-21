import { useLocation } from '@tanstack/react-router'
import { ArrowRight, Menu, Moon, Sun, X, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import image from '../../public/logo192.png'
import { useQuoteStore } from '../store/useQuoteStore'
import { CONTACT_INFO } from '../constants'

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

  const cleanPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')
  const isHeroPage = ['/', '/about', '/nos-services'].includes(cleanPath)

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
          ? 'bg-white/90 py-2 shadow-lg backdrop-blur-md dark:bg-[#191c1e]/90'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto grid w-full grid-cols-3 items-center px-margin-mobile md:px-margin-desktop lg:flex lg:max-w-max-width lg:justify-between lg:items-center">
        {/* Mobile Left action: Dark Mode Toggle */}
        <div className="flex justify-start lg:hidden">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          />
        </div>

        {/* Logo: Centered on mobile, left-aligned on desktop */}
        <div className="flex justify-center lg:justify-start">
          <a
            href="/"
            aria-label="REPOWER-RDC accueil"
            onClick={closeMobileMenu}
            className="transition-transform hover:scale-105"
          >
            <img
              alt="REPOWER-RDC Logo"
              className="h-10 object-contain md:h-12"
              src={image}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => {
            const isActive = isActivePath(href)
            let linkColorClass = ''

            if (isActive) {
              linkColorClass = 'bg-secondary text-white'
            } else if (isDarkMode) {
              linkColorClass = 'text-white hover:bg-white/10 hover:text-white'
            } else {
              // Light Mode
              if (scrolled) {
                linkColorClass = 'text-black hover:bg-surface-container/70 hover:text-black'
              } else {
                // Not scrolled
                if (isHeroPage) {
                  linkColorClass = 'text-white hover:bg-white/10 hover:text-white'
                } else {
                  linkColorClass = 'text-black hover:bg-black/5 hover:text-black'
                }
              }
            }

            return (
              <a
                className={`rounded-full px-4 py-2 font-label-md text-label-md transition-all ${linkColorClass}`}
                href={href}
                key={label}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode((current) => !current)}
          />
          <QuoteButton />
        </div>

        {/* Mobile Right action: Hamburger Menu Button */}
        <div className="flex justify-end lg:hidden">
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-secondary hover:text-white dark:bg-[#252b2e] dark:text-gray-200 dark:hover:text-white"
            style={{ '--hover-bg': 'var(--color-secondary-accent, #ff8a65)' } as React.CSSProperties}
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X size={20} color='red' /> : <Menu color='white' size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-40 h-[calc(100vh-72px)] w-full bg-white transition-all duration-300 dark:bg-[#191c1e] hover:text-white lg:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2 p-6">
          {navLinks.map(({ label, href }) => (
            <a
              className={`flex items-center justify-between rounded-xl px-6 py-4 transition-all ${
                isActivePath(href)
                  ? 'bg-secondary/10 text-black dark:bg-secondary/10 dark:text-secondary'
                  : 'text-black hover:bg-surface-container dark:text-gray-200 dark:hover:bg-[#1e2224]'
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
                href={`tel:${CONTACT_INFO.phone.value}`}
                className="font-bold text-secondary" style={{ color: 'var(--color-secondary-accent, #ff8a65)' }}
              >
                {CONTACT_INFO.phone.display}
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
      className={isDarkMode ? 
        `flex h-10 w-10 items-center justify-center rounded-full bg-white text-on-surface transition-all hover:bg-secondary hover:text-white` : 
        `flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-all hover:bg-secondary hover:text-white dark:bg-white dark:text-gray-200 dark:hover:text-white`}
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
  const { items } = useQuoteStore()

  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-8 py-2.5 font-label-md text-label-md font-bold uppercase tracking-widest text-white transition-all hover:bg-secondary-container hover:shadow-lg active:scale-95 ${className}`}
      style={{ backgroundColor: 'var(--color-secondary, #ff8a65)' }}
      href="/demander-un-devis"
    >
      <span>Demander un devis</span>
      {items.length > 0 && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-secondary" style={{ color: 'var(--color-secondary, #ff8a65)' }}>
          {items.length}
        </span>
      )}
      <ArrowRight size={18} />
    </a>
  )
}

