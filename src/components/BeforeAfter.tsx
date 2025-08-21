'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'

export default function BeforeAfter() {
  const transformations = [
    {
      title: "Cozinha Residencial",
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Cozinha completamente higienizada e organizada"
    },
    {
      title: "Banheiro Completo",
      before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Banheiro desinfetado e com brilho impecável"
    },
    {
      title: "Escritório Comercial",
      before: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Ambiente profissional limpo e produtivo"
    }
  ]

  return (
    <section className="section-padding bg-white">
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
            Veja a <span className="text-gradient">Transformação</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Nossos profissionais transformam qualquer ambiente. 
            Veja alguns resultados reais dos nossos serviços em Goiânia.
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {transformations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-1">
                  {/* Before */}
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`${item.title} - Antes`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ANTES
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`${item.title} - Depois`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      DEPOIS
                    </div>
                  </div>
                </div>
                
                {/* Arrow Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <ArrowRightIcon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {item.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">Cliente satisfeito</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
            Resultados Garantidos em Goiânia
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-neutral-600">Satisfação Garantida</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">2-4h</div>
              <div className="text-sm text-neutral-600">Tempo Médio de Serviço</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">15+</div>
              <div className="text-sm text-neutral-600">Anos de Experiência</div>
            </div>
          </div>
          
          <p className="text-neutral-600 mb-6">
            Atendemos toda a região metropolitana de Goiânia com a mesma qualidade e dedicação.
          </p>
          
          <motion.a
            href="https://wa.me/5562995605542?text=Olá! Vi os resultados no site e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero Este Resultado na Minha Casa
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
