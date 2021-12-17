import { writable, get, Writable } from "svelte/store"
import { sources, ImageType } from "./sources"
import { millis } from "./time"

interface ImageData {
	name: ImageType;
	url: string;
}

export const cachedURLs: Writable<ImageData[]> = writable([])

/** Preload all cachedURLs. */
cachedURLs.subscribe(newURLs => newURLs.forEach(newURL => {
	const image = new Image()
	image.src = newURL.url
}))

/** A generic blurred out image if no images are selected */
const fallbackURL = "https://picsum.photos/500/600.webp?blur=1"

/** Adds a random url to the cache. */
export const addToCache = async () => cachedURLs.set([...get(cachedURLs), await randomURL()])

const randomURL = async (): Promise<ImageData> => {
		
	const selectedImages = get(sources).filter(it => it.enabled)

	if (selectedImages.length == 0) return {
		url: fallbackURL,
		name: ImageType.GENERIC
	}

	const selectedImage = selectedImages[~~(Math.random() * selectedImages.length)];

	return {
		name: selectedImage.name,
		url: await selectedImage.url()
	}
}

export const randomURLOrCache = async () : Promise<ImageData> => {

	const selectedAnimalNames = get(sources).filter(it => it.enabled).map(it => it.name)

	const filteredURLCache = get(cachedURLs).filter(it => selectedAnimalNames.includes(it.name))

	// We found an element in the cache! Remove it and continue.
	if (filteredURLCache.length > 0) {
		cachedURLs.set(get(cachedURLs).filter((_, i) => i != 0))
		return filteredURLCache[0]
	}

	return randomURL()
}

export const imageData: Writable<ImageData> = writable({ name: ImageType.GENERIC, url: fallbackURL })

let timeout: NodeJS.Timeout | undefined = undefined

millis.subscribe(milli => {
	if (timeout !== undefined) clearTimeout(timeout)

	timeout = setTimeout(refreshImage, milli)
})

function refreshImage() {
	timeout = setTimeout(async () => {
		imageData.set(await randomURLOrCache())
		addToCache()
		refreshImage()
	}, get(millis))
}