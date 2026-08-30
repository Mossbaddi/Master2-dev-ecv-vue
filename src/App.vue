<script setup lang="ts">
import { ref } from 'vue'
import EventList from './components/EventList.vue'
import { initialEvents } from './data/events'

const events = ref([...initialEvents])
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
</template>
