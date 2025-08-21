'use client'

import { motion } from 'framer-motion'

export default function FinalSteps() {
  const steps = [
    "Escolha o serviço na data e hora que você quiser.",
    "Escolha a forma de pagamento utilizando Métodos Seguros.",
    "Nós definimos o profissional para o atendimento.",
    "Escolha entre aguardar em casa ou deixar as chaves."
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4">
            Veja como é simples e fácil contratar nossos serviços:
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-900">{index + 1}</span>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-semibold text-white leading-relaxed">
                  {step}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <img
            src="https://majik.com.br/wp-content/uploads/2020/04/download.png"
            alt="Certificação"
            className="h-16 w-auto opacity-80"
          />
          <img
            src="https://majik.com.br/wp-content/uploads/2020/04/76015_safebrowsinggoogle149409469251-1024x411.png"
            alt="Google Safe Browsing"
            className="h-16 w-auto opacity-80"
          />
          <img
            src="https://majik.com.br/wp-content/uploads/2020/04/img_site_seguro.png"
            alt="Site Seguro"
            className="h-16 w-auto opacity-80"
          />
        </motion.div>
      </div>
    </section>
  )
}
