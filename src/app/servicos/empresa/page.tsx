import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import ServiceDetails from '@/components/ServiceDetails'
import BookingForm from '@/components/BookingForm'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Limpeza Empresarial em Goiânia | Majik Serviços',
  description: 'Serviços de limpeza para empresas em Goiânia. Ambiente profissional limpo e saudável. Equipe especializada e contratos flexíveis.',
  keywords: 'limpeza empresarial Goiânia, limpeza escritório, serviços corporativos, limpeza comercial',
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
