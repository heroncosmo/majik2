import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import ServiceDetails from '@/components/ServiceDetails'
import BookingForm from '@/components/BookingForm'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service de Repassage à Goiânia | Majik Services',
  description: 'Service professionnel de repassage à Goiânia. Soin particulier pour les tissus délicats. Service à domicile. Réservez maintenant!',
  keywords: 'repassage Goiânia, repasser vêtements, service de repassage, soin des vêtements',
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
