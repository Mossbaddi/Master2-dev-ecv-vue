import { beforeEach, describe, expect, it } from 'vitest'
import { STORAGE_KEY, useFavorites } from './useFavorites'

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('restaure uniquement les identifiants encore valides', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([1, 99]))

    const { favoriteIds } = useFavorites([1, 2])

    expect(favoriteIds.value).toEqual([1])
  })

  it('bascule un favori et persiste la nouvelle sélection', () => {
    const { favoriteIds, toggleFavorite } = useFavorites([1, 2])

    toggleFavorite(2)
    expect(favoriteIds.value).toEqual([2])
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')).toEqual([2])

    toggleFavorite(2)
    expect(favoriteIds.value).toEqual([])
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')).toEqual([])
  })
})
