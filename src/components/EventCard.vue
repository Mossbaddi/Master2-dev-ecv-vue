<script setup lang="ts">
import type { SchoolEvent } from '../types/event'

defineProps<{
  event: SchoolEvent
  isFavorite: boolean
}>()

defineEmits<{
  toggleFavorite: [eventId: number]
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
  <article class="event-card" :class="{ 'is-favorite': isFavorite }">
    <div class="card-topline">
      <span class="category">{{ event.category }}</span>
      <time :datetime="event.date">{{ dateFormatter.format(new Date(event.date)) }}</time>
    </div>
    <h3>{{ event.title }}</h3>
    <p class="location">{{ event.location }}</p>
    <p class="description">{{ event.description }}</p>
    <button
      class="favorite-button"
      type="button"
      :aria-pressed="isFavorite"
      :aria-label="`${isFavorite ? 'Retirer' : 'Ajouter'} ${event.title} ${isFavorite ? 'des' : 'aux'} favoris`"
      @click="$emit('toggleFavorite', event.id)"
    >
      <span aria-hidden="true">{{ isFavorite ? '★' : '☆' }}</span>
      {{ isFavorite ? 'Dans mes favoris' : 'Ajouter aux favoris' }}
    </button>
  </article>
</template>
