import { ref } from 'vue'

const STORAGE_KEY = 'ecv-events:favorite-ids'

function readStoredFavorites(validIds: Set<number>): number[] {
  try {
    const parsedValue: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    if (!Array.isArray(parsedValue)) return []

    return [...new Set(parsedValue)].filter(
      (id): id is number => typeof id === 'number' && validIds.has(id),
    )
  } catch {
    return []
  }
}

export function useFavorites(validEventIds: number[]) {
  const validIds = new Set(validEventIds)
  const favoriteIds = ref(readStoredFavorites(validIds))

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds.value))
  }

  function isFavorite(eventId: number) {
    return favoriteIds.value.includes(eventId)
  }

  function toggleFavorite(eventId: number) {
    favoriteIds.value = isFavorite(eventId)
      ? favoriteIds.value.filter((id) => id !== eventId)
      : [...favoriteIds.value, eventId]
    persist()
  }

  return {
    favoriteIds,
    isFavorite,
    toggleFavorite,
  }
}

export { STORAGE_KEY }
