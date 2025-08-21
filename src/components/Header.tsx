'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Sobre',
    href: '#',
    submenu: [
      { name: 'Quem Somos', href: '/quem-somos' },
      { name: 'Terceirização', href: '/terceirizacao' },
      { name: 'Política de Privacidade', href: '/politica-privacidade' },
      { name: 'Termos de Uso', href: '/termos-uso' }
    ]
  },
  {
    name: 'Nossos Serviços',
    href: '#',
    submenu: [
      { name: 'Diarista para Meu Lar', href: '/diarista-para-meu-lar' },
      { name: 'Serviço de Passadeira', href: '/servico-de-passadeira' },
      { name: 'Auxiliar para Minha Empresa', href: '/limpeza-comercial' },
      { name: 'Outros Serviços', href: '/nossos-servicos' }
    ]
  },
  { name: 'Blog', href: '/blog' },
  {
    name: 'F.A.Q.',
    href: '#',
    submenu: [
      { name: 'Sou Cliente', href: '/faq-clientes' },
      { name: 'Sou Profissional', href: '/faq-profissionais' }
    ]
  },
  { name: 'Contato', href: '/fale-conosco' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para serviços de limpeza.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Majik</span>
            <img
              src="https://majik.com.br/wp-content/uploads/2020/04/LOGO-MAJIK-NOVO-slogan.png"
              alt="Majik - Tornando Seu Cotidiano Melhor"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-neutral-900">{CONTACT_INFO.phone}</p>
            <p className="text-xs text-neutral-600">{CONTACT_INFO.businessHours.weekdays}</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <PhoneIcon className="h-4 w-4 mr-2" />
            Consulte Disponibilidade
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Majik</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="text-xl font-heading font-bold text-gradient">Majik</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-neutral-900">{CONTACT_INFO.phone}</p>
                    <p className="text-xs text-neutral-600">{CONTACT_INFO.businessHours.weekdays}</p>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Consulte Disponibilidade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
