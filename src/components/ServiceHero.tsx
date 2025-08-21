'use client'

import { motion } from 'framer-motion'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Service } from '@/types'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface ServiceHeroProps {
  service: Service
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para ${service.name}.`
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <section className="relative gradient-bg overflow-hidden pt-20">
      <div className="container-custom section-padding">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Voltar para Início
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-heading font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
              {service.name}
            </h1>
            
            <p className="text-lg leading-8 text-neutral-600 mb-8">
              {service.description}
            </p>

            {/* Key Features */}
            <div className="space-y-3 mb-8">
              {service.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircleIcon className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Pricing */}
            {service.pricing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-8"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Preços</h3>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">A partir de</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {service.pricing.type === 'hourly' && service.pricing.value
                      ? `R$ ${service.pricing.value}/${service.pricing.unit}`
                      : 'Sob consulta'
                    }
                  </span>
                </div>
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-lg px-8 py-4"
              >
                Solicitar Orçamento Agora
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`https://images.unsplash.com/photo-${
                  service.id === 'diarista-casa' ? '1581578731548-c64695cc6952' :
                  service.id === 'passadeira' ? '1582735689369-4b0a4c6d8e8c' :
                  '1497366216548-37526070297c'
                }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={service.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
