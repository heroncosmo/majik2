import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BeforeAfter from '@/components/BeforeAfter'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import FinalSteps from '@/components/FinalSteps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <Stats />
      <About />
      <Services />
      <FinalSteps />
      <Footer />
    </main>
  )
}
