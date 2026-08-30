export type EventCategory = 'Design' | 'Développement' | 'Carrière' | 'Campus'

export interface SchoolEvent {
  id: number
  title: string
  date: string
  location: string
  category: EventCategory
  description: string
}
