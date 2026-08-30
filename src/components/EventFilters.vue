<script setup lang="ts">
import type { EventCategory } from '../types/event'

defineProps<{
  query: string
  category: EventCategory | 'all'
}>()

const emit = defineEmits<{
  'update:query': [value: string]
  'update:category': [value: EventCategory | 'all']
}>()

const categories: EventCategory[] = ['Design', 'Développement', 'Carrière', 'Campus']

function updateQuery(event: Event) {
  emit('update:query', (event.target as HTMLInputElement).value)
}

function updateCategory(event: Event) {
  emit('update:category', (event.target as HTMLSelectElement).value as EventCategory | 'all')
}
</script>

<template>
  <div class="filters" aria-label="Filtres du catalogue">
    <div class="field filter-field">
      <label for="event-search">Rechercher</label>
      <input
        id="event-search"
        type="search"
        :value="query"
        placeholder="Titre, lieu ou mot-clé"
        @input="updateQuery"
      />
    </div>

    <div class="field filter-field">
      <label for="category-filter">Catégorie</label>
      <select id="category-filter" :value="category" @change="updateCategory">
        <option value="all">Toutes les catégories</option>
        <option v-for="option in categories" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>
