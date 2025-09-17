'use client'

import { motion } from 'framer-motion'
import { StarIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Setor Bueno, Goiânia",
      rating: 5,
      comment: "Excellent service! La femme de ménage a été très soigneuse et a laissé ma maison impeccable. J'ai déjà engagé plusieurs fois et je suis toujours satisfaite.",
      service: "Femme de Ménage pour Maison",
      date: "Il y a 2 semaines",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "João Santos",
      location: "Setor Oeste, Goiânia",
      rating: 5,
      comment: "J'ai engagé pour mon entreprise et le résultat a dépassé les attentes. Équipe ponctuelle, professionnelle et très efficace.",
      service: "Nettoyage d'Entreprise",
      date: "Il y a 1 semaine",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Costa",
      location: "Jardim Goiás, Goiânia",
      rating: 5,
      comment: "Le service de repassage est incroyable! Mes vêtements étaient parfaits. Je le recommande à toutes mes amies.",
      service: "Service de Repassage",
      date: "Il y a 3 jours",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Oliveira",
      location: "Setor Marista, Goiânia",
      rating: 5,
      comment: "J'utilise les services depuis plus d'1 an. Toujours ponctuels, honnêtes et font un travail impeccable. Confiance totale!",
      service: "Femme de Ménage pour Maison",
      date: "Il y a 5 jours",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Fernanda Lima",
      location: "Setor Sul, Goiânia",
      rating: 5,
      comment: "Professionnels très qualifiés! Ils ont pris soin de ma maison comme si c'était la leur. Prix juste et qualité exceptionnelle.",
      service: "Femme de Ménage pour Maison",
      date: "Il y a 1 semaine",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Mendes",
      location: "Setor Campinas, Goiânia",
      rating: 5,
      comment: "Excellent rapport qualité-prix! Le service est rapide et la qualité du service est toujours cohérente. Très satisfait.",
      service: "Nettoyage d'Entreprise",
      date: "Il y a 4 jours",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Plus de 1.200 familles et entreprises à Goiânia font confiance à Majik.
            Découvrez quelques témoignages réels de nos clients satisfaits.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white rounded-xl shadow-md px-8 py-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-semibold text-neutral-900 mb-1">4.9/5</div>
              <div className="text-sm text-neutral-600">Baseado em 1.200+ avaliações</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-neutral-600">{testimonial.date}</span>
              </div>

              {/* Comment */}
              <blockquote className="text-neutral-700 mb-4 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Service */}
              <div className="text-xs text-primary-600 font-medium mb-4 bg-primary-50 rounded-full px-3 py-1 inline-block">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="flex items-center text-xs text-neutral-600">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Reconhecimento e Certificações
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-xs text-neutral-600">Empresa do Ano<br/>Goiânia 2023</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-xs text-neutral-600">Certificação<br/>de Qualidade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✅</div>
                <div className="text-xs text-neutral-600">Verificado<br/>Google</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-xs text-neutral-600">Seguro<br/>Responsabilidade</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
