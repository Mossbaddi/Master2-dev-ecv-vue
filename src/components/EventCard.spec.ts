import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EventCard from './EventCard.vue'
import type { SchoolEvent } from '../types/event'

const event: SchoolEvent = {
  id: 42,
  title: 'Revue de code collective',
  date: '2026-09-21T18:00:00',
  location: 'Lab 3',
  category: 'Développement',
  description: 'Un exercice de revue entre pairs.',
}

describe('EventCard', () => {
  it('affiche toutes les informations utiles de l’événement', () => {
    const wrapper = mount(EventCard, { props: { event } })

    expect(wrapper.get('h3').text()).toBe(event.title)
    expect(wrapper.text()).toContain(event.location)
    expect(wrapper.text()).toContain(event.category)
    expect(wrapper.text()).toContain(event.description)
    expect(wrapper.get('time').attributes('datetime')).toBe(event.date)
  })
})
