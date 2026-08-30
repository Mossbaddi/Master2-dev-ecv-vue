import type { SchoolEvent } from '../types/event'

export const initialEvents: SchoolEvent[] = [
  {
    id: 1,
    title: 'Design systems en équipe',
    date: '2026-09-08T18:00:00',
    location: 'Auditorium 2',
    category: 'Design',
    description: 'Une table ronde sur les composants, les tokens et la collaboration design-dev.',
  },
  {
    id: 2,
    title: 'Vue.js sous le capot',
    date: '2026-09-10T17:30:00',
    location: 'Lab 4',
    category: 'Développement',
    description: 'Un atelier pour comprendre la réactivité et le rendu déclaratif de Vue 3.',
  },
  {
    id: 3,
    title: 'Portfolio review',
    date: '2026-09-15T12:30:00',
    location: 'Studio 1',
    category: 'Carrière',
    description: 'Des alumni relisent vos projets et partagent leurs conseils de présentation.',
  },
  {
    id: 4,
    title: 'Hackathon impact local',
    date: '2026-09-19T09:00:00',
    location: 'Campus ECV',
    category: 'Campus',
    description: 'Une journée pour prototyper un service utile aux associations du quartier.',
  },
]
