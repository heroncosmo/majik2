'use client'

import { motion } from 'framer-motion'
import { 
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function About() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Processo Seletivo Rigoroso',
      description: 'Selecionamos rigorosamente os colaboradores para o atendimento. Treinados, com referências e sem antecedentes criminais.'
    },
    {
      icon: ChartBarIcon,
      title: 'Nossos números não mentem',
      description: 'Com mais de 15 anos de experiência, já deixamos mais de 1200 clientes satisfeitos com nossos atendimentos.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Incentivamos a remuneração justa',
      description: 'Queremos que todos sejam remunerados de acordo com a importância da função de limpeza.'
    }
  ]

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
            Por Que Você Pode Confiar na Majik
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Nosso segredo está em buscar a satisfação entre o cliente e o colaborador.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-blue-200 group-hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {feature.description}
                </p>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-3xl p-12 lg:p-16 border border-blue-100"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-8">
                Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Valores e Compromissos</span>
              </h3>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <HeartIcon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-3 text-xl">Cuidado e Atenção</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Tratamos cada casa como se fosse nossa, com o máximo cuidado e atenção aos detalhes.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <UserGroupIcon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-3 text-xl">Equipe Qualificada</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Nossos profissionais passam por rigoroso processo seletivo e treinamento contínuo.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <StarIcon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-3 text-xl">Excelência no Atendimento</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Buscamos sempre superar as expectativas dos nossos clientes em cada atendimento.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Equipe Majik"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-neutral-900">15+ Anos de Experiência</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating testimonial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-neutral-100"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-3 font-medium">
                  "Excelente serviço! Profissionais muito cuidadosos e pontuais. Recomendo!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MS</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Maria Silva</p>
                    <p className="text-xs text-neutral-500">Cliente há 2 anos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
