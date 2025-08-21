import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import ServiceDetails from '@/components/ServiceDetails'
import BookingForm from '@/components/BookingForm'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Diarista para Casa em Goiânia | Majik Serviços de Limpeza',
  description: 'Contrate diarista profissional para sua casa em Goiânia. Limpeza completa, profissionais qualificados e produtos inclusos. Agende agora!',
  keywords: 'diarista Goiânia, limpeza residencial, diarista para casa, serviço doméstico',
}

export default function DiaristaPage() {
  const service = SERVICES.find(s => s.id === 'diarista-casa')!

  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <BookingForm service={service} />
      <Footer />
    </main>
  )
}
