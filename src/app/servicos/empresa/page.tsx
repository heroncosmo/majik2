import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import ServiceDetails from '@/components/ServiceDetails'
import BookingForm from '@/components/BookingForm'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Nettoyage d\'Entreprise à Goiânia | Majik Services',
  description: 'Services de nettoyage pour entreprises à Goiânia. Environnement professionnel propre et sain. Équipe spécialisée et contrats flexibles.',
  keywords: 'nettoyage d\'entreprise Goiânia, nettoyage bureau, services corporatifs, nettoyage commercial',
}

export default function EmpresaPage() {
  const service = SERVICES.find(s => s.id === 'auxiliar-empresa')!

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
