'use client'

import { motion } from 'framer-motion'
import {
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { PROCESS_STEPS } from '@/lib/constants'

const stepIcons = [
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  CreditCardIcon,
]

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
            Contrate em Apenas 3 Passos Simples
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Processo rápido e seguro. Agende seu serviço em menos de 2 minutos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Modern Process Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = stepIcons[index]

              return (
                <div
                  key={step.step}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-neutral-100">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold text-white">{step.step}</span>
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-neutral-900 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>


                  </div>

                  {/* Connection Arrow */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-blue-100">
                        <ArrowRightIcon className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust & Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-3xl p-12 max-w-5xl mx-auto border border-blue-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                Por que escolher a <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Majik</span>?
              </h3>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Mais de 15 anos de experiência garantindo qualidade e confiança em cada atendimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🛡️',
                  title: 'Segurança Total',
                  description: 'Profissionais verificados e com antecedentes checados'
                },
                {
                  icon: '⚡',
                  title: 'Processo Rápido',
                  description: 'Contratação em menos de 2 minutos pelo app ou site'
                },
                {
                  icon: '💎',
                  title: 'Qualidade Garantida',
                  description: 'Mais de 1200 clientes satisfeitos em Goiânia'
                },
                {
                  icon: '🔒',
                  title: 'Pagamento Seguro',
                  description: 'Múltiplas formas de pagamento com total segurança'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.4 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
                <span>Começar Agora</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
