import { writable, get, Writable } from "svelte/store"
import { sources, ImageType } from "./sources"
import { millis } from "./time"

interface ImageData {
	name: ImageType;
	url: string;
}

export const availableURLs: Writable<ImageData[]> = writable([])

availableURLs.subscribe(newURLs => newURLs.forEach(newURL => {
	const image = new Image()
	image.src = newURL.url
}))

const fallbackURL = "https://picsum.photos/500/600.webp?blur=1"

export const addToCache = async () => availableURLs.set([...get(availableURLs), await randomURL()])

const randomURL = async (): Promise<ImageData> => {
		
	const selectedImages = get(sources).filter(it => it.enabled)

	if (selectedImages.length == 0) return {
		url: "https://picsum.photos/500/600.webp?blur=1",
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

	const filteredURLCache = get(availableURLs).filter(it => selectedAnimalNames.includes(it.name))

	if (filteredURLCache.length > 0) {
		availableURLs.set(get(availableURLs).filter((_, i) => i != 0))
		return filteredURLCache[0]
	}

	return randomURL()
}

export const imageData = writable({ name: ImageType.GENERIC, url: fallbackURL })

let timeout: NodeJS.Timeout | undefined = undefined

millis.subscribe(milli => {
	if (timeout !== undefined) clearTimeout(timeout)

	timeout = setTimeout(refreshImage, milli)
})

async function refreshImage() {
	imageData.set(await randomURLOrCache())
	addToCache()
	timeout = setTimeout(refreshImage, get(millis))
}

refreshImage()