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
	/** The homepage of the API provider */
	provider: string;
}

export let sources: Writable<AnimalFactory[]> = writable([
	{
		name: "fox",
		url: () => fetchURL("https://randomfox.ca/floof/").then(data => data.image),
		enabled: true,
		provider: "https://randomfox.ca/"
	},
	{
		name: "bunny",
		url: () => fetchURL("https://api.bunnies.io/v2/loop/random/?media=gif")
			.then(data => data.media.gif),
		enabled: true,
		provider: "https://www.bunnies.io/"
	},
	{
		name: "dog",
		url: () => fetchURL("https://dog.ceo/api/breeds/image/random")
			.then(data => data.message),
		enabled: true,
		provider: "https://dog.ceo"
	},
	{
		name: "duck",
		url: async () => "https://random-d.uk/api/randomimg?" + Date.now(),
		enabled: true,
		provider: "https://random-d.uk/"
	},
	{
		name: "cat",
		url: async () => "https://cataas.com/cat?" + Date.now(),
		enabled: true,
		provider: "https://cataas.com/"
	},
	{
		name: "raccoon",
		url: () => fetchURL("https://some-random-api.ml/img/raccoon")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: "kangaroo",
		url: () => fetchURL("https://some-random-api.ml/img/kangaroo")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: "bird",
		url: () => fetchURL("https://some-random-api.ml/img/birb")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: "panda",
		url: () => fetchURL("https://some-random-api.ml/img/panda")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: "koala",
		url: () => fetchURL("https://some-random-api.ml/img/koala")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: "red panda",
		url: () => fetchURL("https://some-random-api.ml/img/red_panda")
			.then(data => data.link),
		enabled: true,
		provider: "https://some-random-api.ml/"
	},
	{
		name: "generic",
		url: async () => "https://picsum.photos/500/600?" + Date.now(),
		enabled: false,
		provider: "https://picsum.photos/"
	}
])