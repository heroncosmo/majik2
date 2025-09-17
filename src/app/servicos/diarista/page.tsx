import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import ServiceDetails from '@/components/ServiceDetails'
import BookingForm from '@/components/BookingForm'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Femme de Ménage pour Maison à Goiânia | Majik Services de Nettoyage',
  description: 'Engagez une femme de ménage professionnelle pour votre maison à Goiânia. Nettoyage complet, professionnels qualifiés et produits inclus. Réservez maintenant!',
  keywords: 'femme de ménage Goiânia, nettoyage résidentiel, femme de ménage maison, service domestique',
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
