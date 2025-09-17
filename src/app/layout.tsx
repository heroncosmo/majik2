import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Majik - Services de Nettoyage à Goiânia | Femme de Ménage, Repassage et Nettoyage d\'Entreprise',
  description: 'Services de nettoyage de qualité à Goiânia. Femme de ménage pour votre maison, service de repassage et aide pour votre entreprise. Plus de 15 ans d\'expérience et 1200+ clients satisfaits.',
  keywords: 'nettoyage Goiânia, femme de ménage Goiânia, service de nettoyage, repassage, nettoyage d\'entreprise, Majik',
  authors: [{ name: 'Majik Services' }],
  creator: 'Majik Services',
  publisher: 'Majik Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://majik.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Majik - Services de Nettoyage à Goiânia',
    description: 'Services de nettoyage de qualité à Goiânia. Femme de ménage pour votre maison, service de repassage et aide pour votre entreprise.',
    url: 'https://majik.com.br',
    siteName: 'Majik Services',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Majik - Services de Nettoyage à Goiânia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majik - Services de Nettoyage à Goiânia',
    description: 'Services de nettoyage de qualité à Goiânia. Femme de ménage pour votre maison, service de repassage et aide pour votre entreprise.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
