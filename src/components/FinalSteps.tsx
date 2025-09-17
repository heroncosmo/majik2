'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function FinalSteps() {
  const steps = [
    {
      title: "Escolha o serviço na data e hora que você quiser",
      description: "Flexibilidade total para agendar conforme sua necessidade",
      icon: "📅"
    },
    {
      title: "Escolha a forma de pagamento utilizando Métodos Seguros",
      description: "PIX, cartão de crédito, débito ou dinheiro - você decide",
      icon: "💳"
    },
    {
      title: "Nós definimos o profissional para o atendimento",
      description: "Profissionais verificados e qualificados para sua segurança",
      icon: "👥"
    },
    {
      title: "Escolha entre aguardar em casa ou deixar as chaves",
      description: "Total comodidade e flexibilidade no atendimento",
      icon: "🔑"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-200"></div>
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Veja como é <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">simples e fácil</span> contratar nossos serviços
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Em apenas 4 passos simples, você terá profissionais qualificados cuidando da sua casa ou empresa
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-blue-900">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Pronto para começar?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 1200 clientes satisfeitos em Goiânia e região metropolitana
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
                <span>Solicitar Orçamento</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircleIcon className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Sem compromisso • Resposta em 5 minutos</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
              <img
                src="https://majik.com.br/wp-content/uploads/2020/04/download.png"
                alt="Certificação"
                className="h-12 w-auto mx-auto opacity-90"
              />
            </div>
            <p className="text-blue-100 text-sm">Certificação</p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
              <img
                src="https://majik.com.br/wp-content/uploads/2020/04/76015_safebrowsinggoogle149409469251-1024x411.png"
                alt="Google Safe Browsing"
                className="h-12 w-auto mx-auto opacity-90"
              />
            </div>
            <p className="text-blue-100 text-sm">Navegação Segura</p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
              <img
                src="https://majik.com.br/wp-content/uploads/2020/04/img_site_seguro.png"
                alt="Site Seguro"
                className="h-12 w-auto mx-auto opacity-90"
              />
            </div>
            <p className="text-blue-100 text-sm">Site Seguro</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
