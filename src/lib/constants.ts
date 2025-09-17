import { ContactInfo, Service, Stats } from '@/types'

export const CONTACT_INFO: ContactInfo = {
  phone: '+55 62 99560-5542',
  whatsapp: '5562995605542',
  email: 'contact@majik.com.br',
  address: {
    street: 'Avenida Padre Monte, 1723',
    city: 'Goiânia',
    state: 'GO',
    zipCode: '74000-000'
  },
  businessHours: {
    weekdays: 'Lundi - Vendredi: 8h à 18h',
    saturday: 'Samedi: 8h à 12h',
    sunday: 'Dimanche: Fermé'
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/majikservicos/',
    instagram: 'https://www.instagram.com/netmajik/'
  }
}

export const SERVICES: Service[] = [
  {
    id: 'diarista-casa',
    name: 'Femme de Ménage pour Ma Maison',
    description: 'Service complet de nettoyage résidentiel avec des professionnels qualifiés et des produits de qualité. Nous laissons votre maison propre, organisée et parfumée.',
    shortDescription: 'Nettoyage complet de votre maison avec des professionnels qualifiés',
    icon: 'home',
    features: [
      'Nettoyage de toutes les pièces',
      'Organisation des espaces',
      'Produits de nettoyage inclus',
      'Professionnels formés et vérifiés',
      'Flexibilité des horaires',
      'Assurance contre les dommages'
    ],
    pricing: {
      type: 'hourly',
      value: 25,
      unit: 'heure'
    },
    image: '/images/house-cleaning.jpg',
    slug: 'femme-de-menage-maison'
  },
  {
    id: 'passadeira',
    name: 'Service de Repassage',
    description: 'Service spécialisé de repassage avec soin et attention aux détails. Vos vêtements sont impeccables et prêts à porter.',
    shortDescription: 'Service professionnel de repassage',
    icon: 'iron',
    features: [
      'Repassage de vêtements délicats et ordinaires',
      'Soin particulier pour les tissus',
      'Pliage et organisation des vêtements',
      'Service à domicile',
      'Horaires flexibles',
      'Prix compétitifs'
    ],
    pricing: {
      type: 'custom',
      unit: 'pièce'
    },
    image: '/images/ironing-service.jpg',
    slug: 'service-repassage'
  },
  {
    id: 'auxiliar-empresa',
    name: 'Aide pour Mon Entreprise',
    description: 'Services de nettoyage et maintenance pour entreprises, garantissant un environnement professionnel, propre et sain pour vos collaborateurs et clients.',
    shortDescription: 'Nettoyage professionnel pour entreprises',
    icon: 'building',
    features: [
      'Nettoyage de bureaux',
      'Entretien des sanitaires',
      'Nettoyage de vitres et fenêtres',
      'Désinfection des espaces',
      'Équipe spécialisée',
      'Contrats flexibles'
    ],
    pricing: {
      type: 'custom',
      unit: 'm²'
    },
    image: '/images/office-cleaning.jpg',
    slug: 'aide-entreprise'
  }
]

export const COMPANY_STATS: Stats = {
  yearsExperience: 15,
  clientsServed: 1200,
  hoursWorked: 50000,
  citiesCovered: 5
}

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Choisissez les Services',
    description: 'Remplissez les formulaires pour chaque service et nous choisissons le meilleur plan pour votre demande. C\'est simple et rapide.'
  },
  {
    step: 2,
    title: 'Vérifiez le Résumé de l\'Engagement',
    description: 'Vous pouvez vérifier et confirmer que les plans choisis correspondent à ce dont vous avez besoin pour le moment.'
  },
  {
    step: 3,
    title: 'Indiquez l\'Adresse et Effectuez le Paiement',
    description: 'À cette étape, vous indiquez l\'adresse où le service sera fourni et effectuez le paiement comme vous le souhaitez.'
  }
]
