'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'
import type { Service } from '@/types'

interface BookingFormProps {
  service: Service
}

interface FormData {
  name: string
  phone: string
  email: string
  address: string
  neighborhood: string
  date: string
  time: string
  frequency: string
  rooms: string
  observations: string
}

interface FormErrors {
  [key: string]: string
}

export default function BookingForm({ service }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    neighborhood: '',
    date: '',
    time: '',
    frequency: 'unica',
    rooms: '2',
    observations: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const neighborhoods = [
    'Setor Bueno', 'Setor Oeste', 'Setor Sul', 'Setor Marista', 'Jardim Goiás',
    'Setor Nova Suiça', 'Setor Campinas', 'Alto da Glória', 'Setor Pedro Ludovico',
    'Park Lozandes', 'Setor Coimbra', 'Outro'
  ]

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório'
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório'
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório'
    if (!formData.address.trim()) newErrors.address = 'Endereço é obrigatório'
    if (!formData.neighborhood) newErrors.neighborhood = 'Bairro é obrigatório'
    if (!formData.date) newErrors.date = 'Data é obrigatória'
    if (!formData.time) newErrors.time = 'Horário é obrigatório'

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    // Phone validation
    const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido'
    }

    // Date validation (not in the past)
    if (formData.date) {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Data não pode ser no passado'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Create WhatsApp message
      const message = `🏠 *SOLICITAÇÃO DE ORÇAMENTO - ${service.name}*

👤 *Cliente:* ${formData.name}
📞 *Telefone:* ${formData.phone}
📧 *Email:* ${formData.email}

📍 *Endereço:*
${formData.address}
${formData.neighborhood}, Goiânia-GO

📅 *Agendamento:*
Data: ${new Date(formData.date).toLocaleDateString('pt-BR')}
Horário: ${formData.time}

🏠 *Detalhes do Serviço:*
Serviço: ${service.name}
Frequência: ${formData.frequency === 'unica' ? 'Única' : formData.frequency === 'semanal' ? 'Semanal' : 'Quinzenal'}
Cômodos: ${formData.rooms}

${formData.observations ? `📝 *Observações:*\n${formData.observations}` : ''}

*Aguardo confirmação e orçamento! 😊*`

      const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, message)
      
      // Simulate form processing delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank')
      
      setIsSubmitted(true)
      
      // Track conversion (you can integrate with analytics here)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'booking',
          event_label: service.id,
          value: 1
        })
      }

    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Erro ao enviar formulário. Tente novamente.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8"
          >
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Solicitação Enviada!
            </h3>
            <p className="text-neutral-600 mb-6">
              Sua solicitação foi enviada via WhatsApp. Nossa equipe entrará em contato em breve para confirmar o agendamento.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '', phone: '', email: '', address: '', neighborhood: '',
                  date: '', time: '', frequency: 'unica', rooms: '2', observations: ''
                })
              }}
              className="btn-outline"
            >
              Fazer Nova Solicitação
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
              Solicite Seu <span className="text-gradient">Orçamento Gratuito</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e receba seu orçamento personalizado em minutos. 
              Atendimento rápido via WhatsApp!
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <ClockIcon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-neutral-900">Resposta em 15min</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <CheckCircleIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-neutral-900">Orçamento Gratuito</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <UserIcon className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-neutral-900">Profissionais Verificados</div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{errors.submit}</span>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.name ? 'border-red-300' : 'border-neutral-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.phone ? 'border-red-300' : 'border-neutral-300'
                    }`}
                    placeholder="(62) 99999-9999"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-neutral-300'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Address Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Endereço Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.address ? 'border-red-300' : 'border-neutral-300'
                    }`}
                    placeholder="Rua, número, complemento"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Bairro *
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.neighborhood ? 'border-red-300' : 'border-neutral-300'
                    }`}
                  >
                    <option value="">Selecione o bairro</option>
                    {neighborhoods.map(neighborhood => (
                      <option key={neighborhood} value={neighborhood}>
                        {neighborhood}
                      </option>
                    ))}
                  </select>
                  {errors.neighborhood && <p className="text-red-500 text-sm mt-1">{errors.neighborhood}</p>}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Data Preferida *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.date ? 'border-red-300' : 'border-neutral-300'
                    }`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Horário Preferido *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.time ? 'border-red-300' : 'border-neutral-300'
                    }`}
                  >
                    <option value="">Selecione o horário</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Frequência
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => handleInputChange('frequency', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="unica">Única</option>
                    <option value="semanal">Semanal</option>
                    <option value="quinzenal">Quinzenal</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Número de Cômodos
                  </label>
                  <select
                    value={formData.rooms}
                    onChange={(e) => handleInputChange('rooms', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="1">1 cômodo</option>
                    <option value="2">2 cômodos</option>
                    <option value="3">3 cômodos</option>
                    <option value="4">4 cômodos</option>
                    <option value="5+">5+ cômodos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Observações
                  </label>
                  <textarea
                    value={formData.observations}
                    onChange={(e) => handleInputChange('observations', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Detalhes adicionais sobre o serviço..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary inline-flex items-center px-8 py-4 text-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      📱 Enviar via WhatsApp
                    </>
                  )}
                </button>
                
                <p className="text-sm text-neutral-500 mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp com sua solicitação preenchida.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
