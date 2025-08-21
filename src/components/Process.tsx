'use client'

import { motion } from 'framer-motion'
import { 
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  CreditCardIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { PROCESS_STEPS } from '@/lib/constants'

const stepIcons = [
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  CreditCardIcon,
]

export default function Process() {
  return (
    <section className="section-padding gradient-bg">
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
            Contrate em Apenas <span className="text-gradient">3 Passos Simples</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Processo 100% digital e seguro. Agende seu serviço em menos de 2 minutos
            e tenha profissionais verificados na sua casa ou empresa.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = stepIcons[index]
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Step Number Circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border-4 border-primary-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                      {step.step}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-6 text-primary-300">
                      <svg className="w-12 h-6" fill="currentColor" viewBox="0 0 24 12">
                        <path d="M18 6L16.59 4.59L19.17 2H2V4H19.17L16.59 7.41L18 9L24 6L18 6Z" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-6">
              Veja como é simples e fácil contratar nossos serviços:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: '1',
                  text: 'Escolha o serviço na data e hora que você quiser.'
                },
                {
                  number: '2', 
                  text: 'Escolha a forma de pagamento utilizando Métodos Seguros.'
                },
                {
                  number: '3',
                  text: 'Nós definimos o profissional para o atendimento.'
                },
                {
                  number: '4',
                  text: 'Escolha entre aguardar em casa ou deixar as chaves.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.number}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
