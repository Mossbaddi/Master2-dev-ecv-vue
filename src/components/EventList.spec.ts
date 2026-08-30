import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EventList from './EventList.vue'

describe('EventList', () => {
  it('explique la situation lorsque le catalogue est vide', () => {
    const wrapper = mount(EventList, { props: { events: [], favoriteIds: [] } })

    expect(wrapper.get('.empty-state').text()).toContain('Aucun événement')
    expect(wrapper.findAll('article')).toHaveLength(0)
  })
})
