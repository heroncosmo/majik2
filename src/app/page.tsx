import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Services from '@/components/Services'
import ProfessionalSection from '@/components/ProfessionalSection'
import CTA from '@/components/CTA'
import FinalSteps from '@/components/FinalSteps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BeforeAfter />
      <Process />
      <Stats />
      <Testimonials />
      <About />
      <Services />
      <ProfessionalSection />
      <CTA />
      <FinalSteps />
      <Footer />
    </main>
  )
}
