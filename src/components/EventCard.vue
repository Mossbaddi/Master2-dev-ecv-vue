<script setup lang="ts">
import type { SchoolEvent } from '../types/event'

defineProps<{
  event: SchoolEvent
}>()

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
})
</script>

<template>
  <article class="event-card">
    <div class="card-topline">
      <span class="category">{{ event.category }}</span>
      <time :datetime="event.date">{{ dateFormatter.format(new Date(event.date)) }}</time>
    </div>
    <h3>{{ event.title }}</h3>
    <p class="location">{{ event.location }}</p>
    <p class="description">{{ event.description }}</p>
  </article>
</template>
