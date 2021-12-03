import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

/** Utility function to fetch JSON from a url. */
const fetchURL = (url: string): Promise<any> => fetch(url).then(data => data.json())
	
/** Represents a named factory that can generate URLs of image. */
interface ImageFactory {
	/** The name of the animal */
	name: ImageType;
	/** The factory for generating a random URL of the animal */
	url: () => Promise<string>;
	/** If the animal should be shown on the slideshow */
	enabled: boolean;
	/** The homepage of the API provider */
	provider: string;
}

export enum ImageType {
	FOX = "fox",
	BUNNY = "bunny",
	DOG = "dog",
	DUCK = "duck",
	CAT = "cat",
	RACCOON = "raccoon",
	KANGAROO = "kangaroo",
	BIRD = "bird",
	PANDA = "panda",
	KOALA = "koala",
	RED_PANDA = "red panda",
	GENERIC = "generic"
}

export let sources: Writable<ImageFactory[]> = writable([
	{
		name: ImageType.FOX,
		url: () => fetchURL("https://randomfox.ca/floof/").then(data => data.image),
		enabled: true,
		provider: "https://randomfox.ca/"
	},
	{
		name: ImageType.BUNNY,
		url: () => fetchURL("https://api.bunnies.io/v2/loop/random/?media=gif")
			.then(data => data.media.gif),
		enabled: true,
		provider: "https://www.bunnies.io/"
	},
	{
		name: ImageType.DOG,
		url: () => fetchURL("https://dog.ceo/api/breeds/image/random")
			.then(data => data.message),
		enabled: true,
		provider: "https://dog.ceo"
	},
	{
		name: ImageType.DUCK,
		url: async () => "https://random-d.uk/api/randomimg?" + new Date(),
		enabled: true,
		provider: "https://random-d.uk/"
	},
	{
		name: ImageType.CAT,
		url: async () => "https://cataas.com/cat?" + new Date(),
		enabled: true,
		provider: "https://cataas.com/"
	},
	{
		name: ImageType.RACCOON,
		url: () => fetchURL("https://some-random-api.ml/img/raccoon")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: ImageType.KANGAROO,
		url: () => fetchURL("https://some-random-api.ml/img/kangaroo")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: ImageType.BIRD,
		url: () => fetchURL("https://some-random-api.ml/img/birb")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: ImageType.PANDA,
		url: () => fetchURL("https://some-random-api.ml/img/panda")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: ImageType.KOALA,
		url: () => fetchURL("https://some-random-api.ml/img/koala")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: ImageType.RED_PANDA,
		url: () => fetchURL("https://some-random-api.ml/img/red_panda")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: ImageType.GENERIC,
		url: async () => "https://picsum.photos/500/600?" + new Date(),
		enabled: false,
		provider: "https://picsum.photos/"
	}
])