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
  title: 'Majik - Serviços de Limpeza em Goiânia | Diarista, Passadeira e Limpeza Empresarial',
  description: 'Serviços de limpeza de qualidade em Goiânia. Diarista para sua casa, serviço de passadeira e auxiliar para sua empresa. Mais de 15 anos de experiência e 1200+ clientes satisfeitos.',
  keywords: 'limpeza Goiânia, diarista Goiânia, serviço de limpeza, passadeira, limpeza empresarial, Majik',
  authors: [{ name: 'Majik Serviços' }],
  creator: 'Majik Serviços',
  publisher: 'Majik Serviços',
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
    title: 'Majik - Serviços de Limpeza em Goiânia',
    description: 'Serviços de limpeza de qualidade em Goiânia. Diarista para sua casa, serviço de passadeira e auxiliar para sua empresa.',
    url: 'https://majik.com.br',
    siteName: 'Majik Serviços',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Majik - Serviços de Limpeza em Goiânia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majik - Serviços de Limpeza em Goiânia',
    description: 'Serviços de limpeza de qualidade em Goiânia. Diarista para sua casa, serviço de passadeira e auxiliar para sua empresa.',
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
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
