<script setup lang="ts">
import { ref } from 'vue'
import type { EventCategory, EventDraft } from '../types/event'

const emit = defineEmits<{
  submit: [event: EventDraft]
}>()

const categories: EventCategory[] = ['Design', 'Développement', 'Carrière', 'Campus']
const title = ref('')
const date = ref('')
const location = ref('')
const category = ref<EventCategory>('Développement')
const description = ref('')
const formError = ref('')

function resetForm() {
  title.value = ''
  date.value = ''
  location.value = ''
  category.value = 'Développement'
  description.value = ''
}

function submitEvent() {
  if (!title.value.trim() || !date.value || !location.value.trim() || !description.value.trim()) {
    formError.value = 'Complétez tous les champs obligatoires avant de proposer l’événement.'
    return
  }

  formError.value = ''
  emit('submit', {
    title: title.value.trim(),
    date: date.value,
    location: location.value.trim(),
    category: category.value,
    description: description.value.trim(),
  })
  resetForm()
}
</script>

<template>
  <section class="proposal" aria-labelledby="proposal-title">
    <div class="proposal-copy">
      <p class="eyebrow">Participer</p>
      <h2 id="proposal-title">Proposer un événement</h2>
      <p>Une idée de rencontre ou d'atelier ? Ajoutez-la au programme local de la promotion.</p>
    </div>

    <form class="event-form" @submit.prevent="submitEvent">
      <div class="field field-wide">
        <label for="event-title">Titre</label>
        <input id="event-title" v-model="title" name="title" required />
      </div>

      <div class="field">
        <label for="event-date">Date et heure</label>
        <input id="event-date" v-model="date" name="date" type="datetime-local" required />
      </div>

      <div class="field">
        <label for="event-location">Lieu</label>
        <input id="event-location" v-model="location" name="location" required />
      </div>

      <div class="field field-wide">
        <label for="event-category">Catégorie</label>
        <select id="event-category" v-model="category" name="category">
          <option v-for="option in categories" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div class="field field-wide">
        <label for="event-description">Description</label>
        <textarea id="event-description" v-model="description" name="description" rows="4" required />
      </div>

      <p v-if="formError" class="form-error" role="alert">{{ formError }}</p>
      <button class="primary-button field-wide" type="submit">Ajouter au programme</button>
    </form>
  </section>
</template>
