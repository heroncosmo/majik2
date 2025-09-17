'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { SERVICES, CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

const iconMap = {
  home: HomeIcon,
  building: BuildingOfficeIcon,
  iron: SparklesIcon,
}

export default function Services() {
  const whatsappMessage = 'Bonjour! J\'aimerais demander un devis pour les services de nettoyage.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  // Filter main domestic services
  const domesticServices = SERVICES.filter(service =>
    service.id === 'diarista-casa' || service.id === 'passadeira'
  )

  const commercialService = SERVICES.find(service => service.id === 'auxiliar-empresa')

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        {/* Header - Focused on Domestic Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
            Services de Nettoyage Domestique
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Professionnels qualifiés pour prendre soin de votre maison avec qualité et confiance.
          </p>
        </div>

        {/* Main Domestic Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {domesticServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || HomeIcon
            const isMainService = service.id === 'diarista-casa'

            return (
              <div
                key={service.id}
                className={`group ${isMainService ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-blue-200 overflow-hidden h-full ${isMainService ? 'ring-2 ring-blue-100' : ''}`}>
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        service.id === 'diarista-casa' ? '1581578731548-c64695cc6952' :
                        service.id === 'passadeira' ? '1582735689369-4b0a4c6d8e8c' :
                        '1497366216548-37526070297c'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {isMainService && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                          Plus Demandé
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900 leading-tight">
                      {service.name}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-neutral-700">
                          <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    {service.pricing && (
                      <div className="pt-3 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-600 text-sm">À partir de</span>
                          <span className="text-lg font-semibold text-blue-600">
                            {service.pricing.type === 'hourly' && service.pricing.value
                              ? `R$ ${service.pricing.value}/${service.pricing.unit}`
                              : 'Sur consultation'
                            }
                          </span>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center inline-flex items-center justify-center transition-colors"
                    >
                      Demander un Devis
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Commercial Service */}
        {commercialService && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-8 text-center">
              Nettoyage Commercial
            </h3>
            <div className="max-w-md mx-auto">
              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <BuildingOfficeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  {commercialService.name}
                </h4>
                <p className="text-neutral-600 mb-4 text-sm">
                  {commercialService.shortDescription}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Demander un Devis
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Services - Minimized */}
        <div className="text-center">
          <h3 className="text-xl font-medium text-neutral-700 mb-6">
            Outros Serviços Disponíveis
          </h3>

          {/* Simplified Services List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              'Portaria',
              'Recepcionista',
              'Vigilante',
              'Zelador',
              'Motorista',
              'Cuidador de Idosos'
            ].map((service, index) => (
              <div
                key={service}
                className="bg-neutral-50 rounded-lg p-4 text-center hover:bg-neutral-100 transition-colors"
              >
                <span className="text-sm font-medium text-neutral-700">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/nossos-servicos"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Ver Todos os Serviços
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
