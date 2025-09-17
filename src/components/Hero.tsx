'use client'

import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Hero() {
  const whatsappMessage = 'Bonjour! J\'aimerais demander un devis pour les services de nettoyage.'
  const whatsappLink = generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage)

  return (
    <section className="relative bg-neutral-900 min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Professional Background Video/Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        {/* Dark Overlay for Professional Look */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ayez plus de temps libre!
          </h1>

          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Service de qualité, fiable, avec des professionnels spécialement sélectionnés et compétents. Engagez maintenant!
          </p>

          {/* Service Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Link
              href="/diarista-para-meu-lar"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Femme de Ménage pour Ma Maison
            </Link>
            <Link
              href="/servico-de-passadeira"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Service de Repassage
            </Link>
            <Link
              href="/limpeza-comercial"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Aide Pour Mon Entreprise
            </Link>
          </div>
          {/* Professional Section */}
          <div className="border-t border-white/20 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous êtes professionnel du nettoyage?
            </h2>

            <p className="text-white/90 mb-8 text-lg">
              Inscrivez-vous et recevez des offres de clients sur votre téléphone!
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/trabalhe-conosco"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Inscrivez-vous Maintenant
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Parler sur WhatsApp
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Ans d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1200+</div>
              <div className="text-white/80 text-sm">Clients Servis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm">Professionnels Vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80 text-sm">Support Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
