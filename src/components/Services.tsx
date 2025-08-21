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
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para serviços de limpeza.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Oferecemos soluções completas de limpeza para sua casa e empresa, 
            com profissionais qualificados e produtos de qualidade.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || HomeIcon
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Service Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      service.id === 'diarista-casa' ? '1581578731548-c64695cc6952' :
                      service.id === 'passadeira' ? '1582735689369-4b0a4c6d8e8c' :
                      '1497366216548-37526070297c'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-neutral-900">
                    {service.name}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <CheckCircleIcon className="h-4 w-4 text-secondary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  {service.pricing && (
                    <div className="pt-4 border-t border-neutral-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-600">A partir de</span>
                        <span className="text-lg font-semibold text-primary-600">
                          {service.pricing.type === 'hourly' && service.pricing.value
                            ? `R$ ${service.pricing.value}/${service.pricing.unit}`
                            : 'Sob consulta'
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
                    className="w-full btn-primary text-center inline-flex items-center justify-center group"
                  >
                    Solicitar Orçamento
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-8">
            Outros Serviços
          </h3>

          {/* Services Grid with Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                name: 'Portaria',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/architecture-2083687_640-300x200.jpg',
                href: '/gerente-predial'
              },
              {
                name: 'Recepcionista',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/Recepcionista-300x300.jpg',
                href: '/recepcionista'
              },
              {
                name: 'Vigilante',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/o-que-faz-um-vigilante-300x200.jpg',
                href: '/vigilante'
              },
              {
                name: 'Zelador',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/zelador-300x240.jpg',
                href: '/zelador'
              },
              {
                name: 'Passadeiras',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-18-at-18.02.36-300x200.jpeg',
                href: '/passadeiras'
              },
              {
                name: 'Motorista/Motociclista',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/Motorista-300x200.jpg',
                href: '/motorista'
              },
              {
                name: 'Auxiliar de Limpeza',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-18-at-18.02.32-300x300.jpeg',
                href: '/auxiliar-de-limpeza'
              },
              {
                name: 'Cuidador de idosos',
                image: 'https://majik.com.br/wp-content/uploads/2020/04/Cuidador-de-idosos-300x169.jpg',
                href: '/cuidador-de-idosos-2'
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-neutral-900 text-center">
                      {service.name}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/nossos-servicos"
              className="btn-outline inline-flex items-center"
            >
              <ArrowRightIcon className="mr-2 h-4 w-4" />
              Saiba Mais
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
