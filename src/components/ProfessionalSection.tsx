'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProfessionalSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4"
          >
            Você é profissional de{' '}
            <span className="relative">
              limpeza?
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-400" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 mb-8"
          >
            Cadastre-se e receba ofertas de clientes no seu telefone!
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="https://apps.apple.com/us/app/majik/id1603933657"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://majik.com.br/wp-content/uploads/2025/02/App-Store-1024x328.png"
                alt="Download na App Store"
                className="h-16 w-auto"
              />
            </Link>
            
            <Link
              href="https://play.google.com/store/apps/details?id=com.majik.app&hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://majik.com.br/wp-content/uploads/2025/02/GooglePlay-1024x328.png"
                alt="Baixar no Google Play"
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
