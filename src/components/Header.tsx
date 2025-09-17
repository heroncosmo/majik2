'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '#sobre' },
  { name: 'Nos Services', href: '#servicos' },
  { name: 'Blog', href: '/blog' },
  { name: 'F.A.Q.', href: '/faq' },
  { name: 'Contact', href: '#contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappMessage = 'Bonjour! J\'aimerais demander un devis pour les services de nettoyage.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)



  return (
    <>
      {/* Top Bar - Professional Contact Info */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <a href="tel:+5562995605542" className="hover:text-blue-200 transition-colors">
                  +55 62 99560-5542
                </a>
              </div>
              <div className="hidden sm:flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" />
                <span>Lun - Ven: 8:00 - 18:00 | Consultez la Disponibilité</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/majikservicos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors text-xs"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/netmajik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors text-xs"
              >
                Instagram
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5562995605542"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors text-xs"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-neutral-100 sticky top-0 z-50">
        <nav className="container-custom flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">Majik</div>
                <div className="text-sm text-neutral-600">Rendant Votre Quotidien Meilleur</div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact & CTA Section */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
            {/* Phone Number */}
            <a
              href="tel:+5562995605542"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>

            {/* Single CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Demander un Devis
            </a>
          </div>
        </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 sm:rounded-l-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Majik - Page d'accueil</span>
                <img
                  src="/images/majik-logo.png"
                  alt="Majik"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-full p-2.5 text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu de navigation"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Hidden title for screen readers */}
            <h2 id="mobile-menu-title" className="sr-only">Menu de Navigation</h2>
            <div className="mt-8 flow-root">
              <div className="space-y-6">
                {/* Trust Badges - Mobile */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-xs font-semibold text-green-700">Vérifiée</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-xs font-semibold text-blue-700">15+ Ans</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-neutral-900">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-neutral-600">Appelez maintenant pour un devis gratuit</p>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full text-center block transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+5562995605542"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full text-center block transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>Appeler Maintenant</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
