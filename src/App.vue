<script setup lang="ts">
import { computed, ref } from 'vue'
import EventForm from './components/EventForm.vue'
import EventFilters from './components/EventFilters.vue'
import EventList from './components/EventList.vue'
import { initialEvents } from './data/events'
import type { EventCategory, EventDraft } from './types/event'

const events = ref([...initialEvents])
const successMessage = ref('')
const query = ref('')
const selectedCategory = ref<EventCategory | 'all'>('all')

const filteredEvents = computed(() => {
  const normalizedQuery = query.value.trim().toLocaleLowerCase('fr-FR')

  return events.value.filter((event) => {
    const matchesCategory = selectedCategory.value === 'all' || event.category === selectedCategory.value
    const searchableContent = [event.title, event.location, event.description]
      .join(' ')
      .toLocaleLowerCase('fr-FR')
    const matchesQuery = normalizedQuery === '' || searchableContent.includes(normalizedQuery)

    return matchesCategory && matchesQuery
  })
})

function addEvent(eventDraft: EventDraft) {
  const nextId = Math.max(0, ...events.value.map((event) => event.id)) + 1
  events.value = [{ id: nextId, ...eventDraft }, ...events.value]
  successMessage.value = `L’événement « ${eventDraft.title} » a été ajouté au programme.`
}
</script>

<template>
  <header class="hero shell">
    <p class="eyebrow">Master 2 Développement · ECV</p>
    <h1>ECV Events</h1>
    <p class="intro">Les prochains rendez-vous pour apprendre, rencontrer et construire ensemble.</p>
  </header>

  <main class="shell catalogue">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Agenda</p>
        <h2>Événements à venir</h2>
      </div>
      <p class="event-count">
        {{ filteredEvents.length }} résultat{{ filteredEvents.length > 1 ? 's' : '' }}
      </p>
    </div>

    <EventFilters v-model:query="query" v-model:category="selectedCategory" />
    <EventList
      :events="filteredEvents"
      empty-message="Aucun événement ne correspond à ces critères. Essayez un autre filtre."
    />
  </main>

  <aside class="shell">
    <p class="sr-only" role="status" aria-live="polite">{{ successMessage }}</p>
    <EventForm @submit="addEvent" />
  </aside>
</template>
