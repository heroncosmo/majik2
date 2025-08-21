import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import ServiceDetails from '@/components/ServiceDetails'
import BookingForm from '@/components/BookingForm'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Serviço de Passadeira em Goiânia | Majik Serviços',
  description: 'Serviço profissional de passar roupas em Goiânia. Cuidado especial com tecidos delicados. Atendimento em domicílio. Agende agora!',
  keywords: 'passadeira Goiânia, passar roupas, serviço de passadeira, cuidado com roupas',
}

export default function PassadeiraPage() {
  const service = SERVICES.find(s => s.id === 'passadeira')!

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
