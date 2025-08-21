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
      description: 'Sua casa é o seu refúgio e quando você nos confia a sua casa para cuidarmos, selecionamos rigorosamente os colaboradores para o atendimento. Treinados, com referências e sem antecedentes criminais.'
    },
    {
      icon: ChartBarIcon,
      title: 'Nossos números não mentem',
      description: 'Com mais de 15 anos de experiência em prestação de serviço e terceirização de mão de obra, já deixamos mais de 1200 clientes satisfeitos com nossos atendimentos. O atendimento de qualidade faz parte da Política de Atendimento da Majik.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Incentivamos a remuneração justa',
      description: 'Queremos a todo momento que todos sejam remunerados de acordo com a importância da função. E com a chegada da pandemia, a limpeza se tornou, ainda mais, uma das profissões mais importantes em qualquer lugar.'
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-white">
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
            Por Que Você Pode <span className="text-gradient">Confiar na Majik</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Nosso segredo está em buscar a satisfação entre o cliente e o colaborador. 
            Alinhamos a qualidade no atendimento para que o cliente retorne. 
            Igualmente nos preocupamos com a satisfação do prestador em empenhar suas funções no time da Majik.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="mx-auto mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                Nossos Valores e Compromissos
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Cuidado e Atenção</h4>
                    <p className="text-neutral-600 text-sm">
                      Tratamos cada casa como se fosse nossa, com o máximo cuidado e atenção aos detalhes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
                      <UserGroupIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Equipe Qualificada</h4>
                    <p className="text-neutral-600 text-sm">
                      Nossos profissionais passam por rigoroso processo seletivo e treinamento contínuo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                      <StarIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Excelência no Atendimento</h4>
                    <p className="text-neutral-600 text-sm">
                      Buscamos sempre superar as expectativas dos nossos clientes em cada atendimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Equipe Majik"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating testimonial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 mb-2">
                  "Excelente serviço! Profissionais muito cuidadosos e pontuais."
                </p>
                <p className="text-xs text-neutral-500 font-medium">
                  - Maria Silva, Cliente há 2 anos
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
