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

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="text-center">
      <div className="text-3xl lg:text-4xl font-semibold text-blue-600 mb-2 tracking-tight">
        {prefix}{count.toLocaleString('pt-BR')}{suffix}
      </div>
    </div>
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
      label: 'Clientes Satisfeitos',
      value: COMPANY_STATS.clientsServed,
      suffix: '+',
      description: 'Famílias e empresas em toda Goiânia'
    },
    {
      label: 'Horas de Limpeza',
      value: COMPANY_STATS.hoursWorked / 1000,
      suffix: ' mil',
      description: 'Horas dedicadas à sua satisfação'
    },
    {
      label: 'Bairros Atendidos',
      value: 50,
      suffix: '+',
      description: 'Cobertura em toda região metropolitana'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Nossa experiência e dedicação se refletem nos números.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                {/* Number */}

                <div className="mb-4">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
