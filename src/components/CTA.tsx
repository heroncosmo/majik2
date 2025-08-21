'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function CTA() {
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para serviços de limpeza.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-200"></div>
      </div>

      <div className="relative container-custom">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4">
              Faça Seu Agendamento Agora
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Não perca mais tempo com limpeza. Entre em contato conosco e 
              tenha mais tempo livre para o que realmente importa.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: 'Diarista para Minha Casa',
                description: 'Limpeza completa e organização',
                icon: '🏠'
              },
              {
                title: 'Serviço de Passadeira',
                description: 'Roupas impecáveis e bem cuidadas',
                icon: '👔'
              },
              {
                title: 'Auxiliar Para Minha Empresa',
                description: 'Ambiente profissional sempre limpo',
                icon: '🏢'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-100 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp - Resposta Rápida
            </a>
            
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Ligar Agora
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-primary-100">
                <p>{CONTACT_INFO.businessHours.weekdays}</p>
                <p>{CONTACT_INFO.businessHours.saturday}</p>
                <p className="text-sm">
                  📍 {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}-{CONTACT_INFO.address.state}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
