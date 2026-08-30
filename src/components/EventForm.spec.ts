import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EventForm from './EventForm.vue'

describe('EventForm', () => {
  it('émet un brouillon typé puis réinitialise les champs', async () => {
    const wrapper = mount(EventForm)

    await wrapper.get('#event-title').setValue('Atelier tests Vue')
    await wrapper.get('#event-date').setValue('2026-09-22T18:30')
    await wrapper.get('#event-location').setValue('Lab 2')
    await wrapper.get('#event-category').setValue('Développement')
    await wrapper.get('#event-description').setValue('Découvrir les tests de composants.')
    await wrapper.get('form').trigger('submit')

    const submittedEvents = wrapper.emitted('submit')
    expect(submittedEvents).toHaveLength(1)
    expect(submittedEvents?.[0]?.[0]).toEqual({
      title: 'Atelier tests Vue',
      date: '2026-09-22T18:30',
      location: 'Lab 2',
      category: 'Développement',
      description: 'Découvrir les tests de composants.',
    })
    expect((wrapper.get('#event-title').element as HTMLInputElement).value).toBe('')
  })
})
