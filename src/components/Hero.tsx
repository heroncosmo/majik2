'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRightIcon, SparklesIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Hero() {
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento para serviços de limpeza.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-400"></div>
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-6"
            >
              <SparklesIcon className="h-4 w-4 mr-2" />
              Mais de 15 anos de experiência
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl mb-6"
            >
              Tenha mais{' '}
              <span className="relative">
                tempo livre!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-400" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-8 text-neutral-600 mb-8"
            >
              Serviço de qualidade, confiável, com profissionais especialmente selecionados e competentes. 
              Deixamos sua casa limpa e cheirosa para você aproveitar mais tempo com quem importa.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center text-sm text-neutral-600">
                <ClockIcon className="h-5 w-5 text-primary-500 mr-2" />
                Horários flexíveis
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <ShieldCheckIcon className="h-5 w-5 text-primary-500 mr-2" />
                Profissionais verificados
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <SparklesIcon className="h-5 w-5 text-primary-500 mr-2" />
                Produtos inclusos
              </div>
            </motion.div>

            {/* Service Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              <Link
                href="/diarista-para-meu-lar"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Diarista para Minha Casa
              </Link>
              <Link
                href="/servico-de-passadeira"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Serviço de Passadeira
              </Link>
              <Link
                href="/limpeza-comercial"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors"
              >
                Auxiliar Para Minha Empresa
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Profissional de limpeza da Majik trabalhando"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <SparklesIcon className="h-6 w-6 text-secondary-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">1200+ Clientes</p>
                  <p className="text-xs text-neutral-600">Satisfeitos com nossos serviços</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
