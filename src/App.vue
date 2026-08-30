<script setup lang="ts">
import { ref } from 'vue'
import EventForm from './components/EventForm.vue'
import EventList from './components/EventList.vue'
import { initialEvents } from './data/events'
import type { EventDraft } from './types/event'

const events = ref([...initialEvents])
const successMessage = ref('')

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
      <p class="event-count">{{ events.length }} événement{{ events.length > 1 ? 's' : '' }}</p>
    </div>

    <EventList :events="events" />
  </main>

  <aside class="shell">
    <p class="sr-only" role="status" aria-live="polite">{{ successMessage }}</p>
    <EventForm @submit="addEvent" />
  </aside>
</template>
