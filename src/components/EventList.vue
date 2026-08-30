<script setup lang="ts">
import type { SchoolEvent } from '../types/event'
import EventCard from './EventCard.vue'

defineProps<{
  events: SchoolEvent[]
  emptyMessage?: string
}>()
</script>

<template>
  <p v-if="events.length === 0" class="empty-state">
    {{ emptyMessage ?? "Aucun événement n'est encore programmé. Revenez bientôt." }}
  </p>

  <ul v-else class="event-grid">
    <li v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </li>
  </ul>
</template>
