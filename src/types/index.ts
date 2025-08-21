export interface Service {
  id: string
  name: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  pricing?: {
    type: 'fixed' | 'hourly' | 'custom'
    value?: number
    unit?: string
  }
  image: string
  slug: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  businessHours: {
    weekdays: string
    saturday: string
    sunday?: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  comment: string
  service: string
  date: string
  avatar?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface BookingForm {
  service: string
  name: string
  email: string
  phone: string
  address: string
  date: string
  time: string
  frequency: 'once' | 'weekly' | 'biweekly' | 'monthly'
  rooms?: number
  area?: number
  additionalInfo?: string
}

export interface Stats {
  yearsExperience: number
  clientsServed: number
  hoursWorked: number
  citiesCovered: number
}
