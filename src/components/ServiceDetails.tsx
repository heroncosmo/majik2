'use client'

import { motion } from 'framer-motion'
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  StarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { Service } from '@/types'

interface ServiceDetailsProps {
  service: Service
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const benefits = [
    {
      icon: ClockIcon,
      title: 'Horários Flexíveis',
      description: 'Atendemos de acordo com sua disponibilidade, incluindo finais de semana.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Profissionais Verificados',
      description: 'Todos nossos colaboradores passam por rigoroso processo seletivo e verificação de antecedentes.'
    },
    {
      icon: SparklesIcon,
      title: 'Produtos Inclusos',
      description: 'Levamos todos os produtos de limpeza necessários, você não precisa se preocupar com nada.'
    },
    {
      icon: UserGroupIcon,
      title: 'Equipe Treinada',
      description: 'Nossos profissionais recebem treinamento contínuo para garantir a melhor qualidade.'
    }
  ]

  const processSteps = [
    'Agendamento rápido via WhatsApp ou telefone',
    'Confirmação do horário e detalhes do serviço',
    'Chegada pontual do profissional no local',
    'Execução do serviço com qualidade garantida',
    'Verificação final e sua aprovação'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Service Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-center text-neutral-900 mb-12">
            Por que escolher nosso <span className="text-gradient">{service.name}</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-6">
              O que está incluído
            </h3>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircleIcon className="h-5 w-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-6">
              Como funciona
            </h3>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-neutral-700">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg text-neutral-700 mb-4 italic">
            "Excelente serviço! A profissional foi muito cuidadosa e deixou minha casa impecável. 
            Recomendo para todos que precisam de um serviço de qualidade."
          </blockquote>
          <cite className="text-neutral-600 font-medium">
            - Maria Silva, Cliente há 2 anos
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
