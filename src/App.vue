<script setup lang="ts">
import { ref } from 'vue'
import { initialEvents } from './data/events'

const events = ref([...initialEvents])

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
})
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

    <p v-if="events.length === 0" class="empty-state">
      Aucun événement n'est encore programmé. Revenez bientôt.
    </p>

    <ul v-else class="event-grid">
      <li v-for="event in events" :key="event.id" class="event-card">
        <div class="card-topline">
          <span class="category">{{ event.category }}</span>
          <time :datetime="event.date">{{ dateFormatter.format(new Date(event.date)) }}</time>
        </div>
        <h3>{{ event.title }}</h3>
        <p class="location">{{ event.location }}</p>
        <p class="description">{{ event.description }}</p>
      </li>
    </ul>
  </main>
</template>
