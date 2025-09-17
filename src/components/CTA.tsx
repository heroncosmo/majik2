'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function CTA() {
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para serviços de limpeza.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <section className="py-16 lg:py-24 bg-blue-600">
      <div className="container-custom">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Faça Seu Agendamento Agora
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Não perca mais tempo com limpeza. Entre em contato conosco e
              tenha mais tempo livre para o que realmente importa.
            </p>
          </div>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp - Resposta Rápida
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Ligar Agora
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-white mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-blue-100">
                <p>{CONTACT_INFO.businessHours.weekdays}</p>
                <p>{CONTACT_INFO.businessHours.saturday}</p>
                <p className="text-sm">
                  📍 {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}-{CONTACT_INFO.address.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
