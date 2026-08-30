import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('filtres du catalogue', () => {
  it('recherche sans tenir compte de la casse', async () => {
    const wrapper = mount(App)

    await wrapper.get('#event-search').setValue('VUE.JS')

    expect(wrapper.findAll('article')).toHaveLength(1)
    expect(wrapper.text()).toContain('Vue.js sous le capot')
  })

  it('filtre les événements par catégorie', async () => {
    const wrapper = mount(App)

    await wrapper.get('#category-filter').setValue('Campus')

    expect(wrapper.findAll('article')).toHaveLength(1)
    expect(wrapper.text()).toContain('Hackathon impact local')
  })

  it('explique une recherche sans résultat', async () => {
    const wrapper = mount(App)

    await wrapper.get('#event-search').setValue('conférence inexistante')

    expect(wrapper.findAll('article')).toHaveLength(0)
    expect(wrapper.get('.empty-state').text()).toContain('ne correspond')
  })
})
