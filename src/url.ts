import { writable, get } from "svelte/store"
import { sources } from "./sources"

const fallbackURL = "https://picsum.photos/500/600.webp?blur=1"

export const randomURL = (): Promise<string> | string => {
		
	const selectedAnimals = get(sources).filter(it => it.enabled)

	if (selectedAnimals.length == 0) return "https://picsum.photos/500/600.webp?blur=1"

	return selectedAnimals[~~(Math.random() * selectedAnimals.length)].url()
}

export const url = writable(fallbackURL)