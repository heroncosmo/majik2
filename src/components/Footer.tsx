'use client'

import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Footer() {
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços da Majik.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  const quickLinks = [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' },
    { name: 'Quem Somos', href: '/sobre' },
    { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  ]

  const services = [
    { name: 'Diarista para Meu Lar', href: '/servicos/diarista' },
    { name: 'Serviço de Passadeira', href: '/servicos/passadeira' },
    { name: 'Auxiliar para Minha Empresa', href: '/servicos/empresa' },
    { name: 'Outros Serviços', href: '/servicos' },
  ]

  return (
    <footer id="contato" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom py-20 relative">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img
                src="https://majik.com.br/wp-content/uploads/2020/04/LOGO-MAJIK-NOVO-branco-slogan.png"
                alt="Majik - Tornando Seu Cotidiano Melhor"
                className="h-20 w-auto mb-6"
              />
            </div>
            <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
              Provedor de Serviços Terceirizados há mais de 15 anos.
              Serviços de Diarista em Goiânia. Economize tempo e dinheiro
              contratando um serviço especializado, de qualidade garantida
              e profissionais de confiança.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {CONTACT_INFO.socialMedia.facebook && (
                <a
                  href={CONTACT_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border border-neutral-700"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {CONTACT_INFO.socialMedia.instagram && (
                <a
                  href={CONTACT_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 border border-neutral-700"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              )}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 border border-neutral-700"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Links Úteis</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-teal-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Nossos Serviços</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                  >
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Atendimento</h3>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700">
                <h4 className="text-white font-semibold mb-3">Horários</h4>
                <p className="text-neutral-300 mb-2">{CONTACT_INFO.businessHours.weekdays}</p>
                <p className="text-neutral-300">{CONTACT_INFO.businessHours.saturday}</p>
              </div>

              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700">
                <h4 className="text-white font-semibold mb-3">Localização</h4>
                <p className="text-neutral-300">
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}-{CONTACT_INFO.address.state} | Brasil
                </p>
              </div>

              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700">
                <h4 className="text-white font-semibold mb-3">Telefone</h4>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800/50 relative">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-neutral-400">
                © 2025 Majik. Todos os Direitos Reservados
              </p>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-neutral-400 text-sm">Online</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-neutral-400 text-sm">
                Desenvolvido com <span className="text-red-400 animate-pulse">❤️</span> para a Majik
              </p>

              <div className="flex items-center space-x-2 text-neutral-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>SSL Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
