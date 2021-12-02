import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

/** Utility function to fetch JSON from a url. */
const fetchURL = (url: string): Promise<any> => fetch(url).then(data => data.json())
	
/** Represents a named factory that can generate URLs of animals. */
interface AnimalFactory {
	/** The name of the animal */
	name: string;
	/** The factory for generating a random URL of the animal */
	url: () => Promise<string>;
	/** If the animal should be shown on the slideshow */
	enabled: boolean;
}

export let randomAnimals: Writable<AnimalFactory[]> = writable([
	{
		name: "fox",
		url: () => fetchURL("https://randomfox.ca/floof/").then(data => data.image),
		enabled: true
	},
	{
		name: "bunny",
		url: () => fetchURL("https://api.bunnies.io/v2/loop/random/?media=gif")
			.then(data => data.media.gif),
		enabled: true
	},
	{
		name: "dog",
		url: () => fetchURL("https://dog.ceo/api/breeds/image/random")
			.then(data => data.message),
		enabled: true
	},
	{
		name: "duck",
		url: async () => "https://random-d.uk/api/randomimg?" + Date.now(),
		enabled: true
	},
	{
		name: "cat",
		url: async () => "https://cataas.com/cat?" + Date.now(),
		enabled: true
	},
	{
		name: "raccoon",
		url: () => fetchURL("https://some-random-api.ml/img/raccoon")
			.then(data => data.link),
		enabled: true
	},
	{
		name: "kangaroo",
		url: () => fetchURL("https://some-random-api.ml/img/kangaroo")
			.then(data => data.link),
		enabled: true
	},
	{
		name: "bird",
		url: () => fetchURL("https://some-random-api.ml/img/birb")
			.then(data => data.link),
		enabled: true
	},
	{
		name: "panda",
		url: () => fetchURL("https://some-random-api.ml/img/panda")
			.then(data => data.link),
		enabled: true
	},
	{
		name: "koala",
		url: () => fetchURL("https://some-random-api.ml/img/koala")
			.then(data => data.link),
		enabled: true
	},
	{
		name: "red panda",
		url: () => fetchURL("https://some-random-api.ml/img/red_panda")
			.then(data => data.link),
		enabled: true
	},
	{
		name: "generic",
		url: async () => "https://picsum.photos/500/600?" + Date.now(),
		enabled: false
	}
])