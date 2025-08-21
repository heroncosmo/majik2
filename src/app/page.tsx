import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProfessionalSection from '@/components/ProfessionalSection'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Services from '@/components/Services'
import FinalSteps from '@/components/FinalSteps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProfessionalSection />
      <Process />
      <Stats />
      <About />
      <CTA />
      <Services />
      <FinalSteps />
      <Footer />
    </main>
  )
}
