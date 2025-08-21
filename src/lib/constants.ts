import { ContactInfo, Service, Stats } from '@/types'

export const CONTACT_INFO: ContactInfo = {
  phone: '+55 62 99560-5542',
  whatsapp: '5562995605542',
  email: 'contato@majik.com.br',
  address: {
    street: 'Avenida Padre Monte, 1723',
    city: 'Goiânia',
    state: 'GO',
    zipCode: '74000-000'
  },
  businessHours: {
    weekdays: 'Segunda - Sexta: 8h às 18h',
    saturday: 'Sábado: 8h às 12h',
    sunday: 'Domingo: Fechado'
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/majikservicos/',
    instagram: 'https://www.instagram.com/netmajik/'
  }
}

export const SERVICES: Service[] = [
  {
    id: 'diarista-casa',
    name: 'Diarista para Minha Casa',
    description: 'Serviço completo de limpeza residencial com profissionais qualificados e produtos de qualidade. Deixamos sua casa limpa, organizada e cheirosa.',
    shortDescription: 'Limpeza completa da sua casa com profissionais qualificados',
    icon: 'home',
    features: [
      'Limpeza de todos os cômodos',
      'Organização de ambientes',
      'Produtos de limpeza inclusos',
      'Profissionais treinados e verificados',
      'Flexibilidade de horários',
      'Seguro contra danos'
    ],
    pricing: {
      type: 'hourly',
      value: 25,
      unit: 'hora'
    },
    image: '/images/house-cleaning.jpg',
    slug: 'diarista-para-casa'
  },
  {
    id: 'passadeira',
    name: 'Serviço de Passadeira',
    description: 'Serviço especializado de passar roupas com cuidado e atenção aos detalhes. Suas roupas ficam impecáveis e prontas para uso.',
    shortDescription: 'Serviço profissional de passar roupas',
    icon: 'iron',
    features: [
      'Passar roupas delicadas e comuns',
      'Cuidado especial com tecidos',
      'Dobrar e organizar roupas',
      'Atendimento em domicílio',
      'Horários flexíveis',
      'Preços competitivos'
    ],
    pricing: {
      type: 'custom',
      unit: 'peça'
    },
    image: '/images/ironing-service.jpg',
    slug: 'servico-passadeira'
  },
  {
    id: 'auxiliar-empresa',
    name: 'Auxiliar para Minha Empresa',
    description: 'Serviços de limpeza e manutenção para empresas, garantindo um ambiente profissional, limpo e saudável para seus colaboradores e clientes.',
    shortDescription: 'Limpeza profissional para empresas',
    icon: 'building',
    features: [
      'Limpeza de escritórios',
      'Manutenção de banheiros',
      'Limpeza de vidros e janelas',
      'Desinfecção de ambientes',
      'Equipe especializada',
      'Contratos flexíveis'
    ],
    pricing: {
      type: 'custom',
      unit: 'm²'
    },
    image: '/images/office-cleaning.jpg',
    slug: 'auxiliar-empresa'
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
    title: 'Escolha os Serviços',
    description: 'Preencha os formulários em cada serviço e nós escolhemos o melhor plano para a sua demanda. É simples e rápido.'
  },
  {
    step: 2,
    title: 'Confira o Resumo da Contratação',
    description: 'Você pode conferir e verificar se os planos escolhidos estão de acordo com o que você precisa para o momento.'
  },
  {
    step: 3,
    title: 'Informe Endereço e Faça o Pagamento',
    description: 'Nesta fase você informa o endereço onde o serviço será prestado e efetua o pagamento como achar melhor.'
  }
]
