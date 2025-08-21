'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { COMPANY_STATS } from '@/lib/constants'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
        {prefix}{count.toLocaleString('pt-BR')}{suffix}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const stats = [
    {
      label: 'Anos de Experiência',
      value: COMPANY_STATS.yearsExperience,
      suffix: '+',
      description: 'Mais de uma década servindo Goiânia'
    },
    {
      label: 'Clientes Atendidos',
      value: COMPANY_STATS.clientsServed,
      suffix: '+',
      description: 'Famílias e empresas satisfeitas'
    },
    {
      label: 'Horas de Experiência',
      value: COMPANY_STATS.hoursWorked / 1000,
      suffix: ' mil',
      description: 'Horas dedicadas à limpeza'
    }
  ]

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
            Números que <span className="text-gradient">Falam por Si</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Nossa experiência e dedicação se refletem nos números. 
            Cada estatística representa nosso compromisso com a excelência.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
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
              Crescimento Constante
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Crescimento Anual</h4>
                <p className="text-neutral-600 text-sm">
                  Expandimos nossos serviços continuamente para atender melhor nossos clientes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Satisfação do Cliente</h4>
                <p className="text-neutral-600 text-sm">
                  95% dos nossos clientes recomendam nossos serviços para amigos e familiares
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
