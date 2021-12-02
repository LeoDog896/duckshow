<script lang="ts">
	let url = "https://picsum.photos/500/600.webp?blur=1"

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

	let randomAnimals: AnimalFactory[] = [
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
	]

	const randomAnimal = (): Promise<string> | string => {
		
		const selectedAnimals = randomAnimals.filter(it => it.enabled)

		if (selectedAnimals.length == 0) return "https://picsum.photos/500/600.webp?blur=1"

		return selectedAnimals[~~(Math.random() * selectedAnimals.length)].url()
	}

	/** How much time to take before grabbing another image from the factory. */
	let timeInterval = 3

	function keyPress(event: KeyboardEvent, index: number) {
		if (event.key == "Enter" && event.shiftKey) {
			randomAnimals = randomAnimals.map(item => {
				if (item == randomAnimals[index]) return Object.assign({}, item, { enabled: true })
				
				return Object.assign({}, item, { enabled: false })
 			})
			return
		}

		if (event.key == "Enter") {
			randomAnimals[index].enabled = !randomAnimals[index].enabled
		}
	}

	async function showAnimal() {
		url = await randomAnimal()
		setTimeout(showAnimal, Math.max(Math.min(timeInterval * 1000, 60000), 500))
	}

	showAnimal()

</script>

<div id="bigParent" style="background-image: url('{url}')"></div>
<div id="settings">
	{#each randomAnimals as animal, i}
		<div class="animal">
			<span
				tabindex={i + 1}
				on:click={() => animal.enabled = !animal.enabled}
				on:keydown={event => keyPress(event, i)}
				class={animal.enabled ? "enabled" : "disabled"}
			>{animal.name}</span>
		</div>
	{/each}
	<label><input tabindex={randomAnimals.length + 1} bind:value={timeInterval}><span>s</span></label>
</div>

<style lang="scss">

	#settings {
		background: rgba(0, 0, 0, 0.65);
		box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.52);
		position: fixed;
		top: 10px;
		left: 50%;
		right: 0;
		border-radius: 10px;
		transform: translateX(-50%);
		text-align: center;
		color: white;
		width: 80vw;

		input {
			background: rgba(0, 0, 0, 0);
			font-family: inherit;
			font-size: inherit;
			padding: 3px;
			border: 0px solid;
			border-bottom: 1px solid white;
			color: white;
			text-align: center;
			border-radius: 2px;
			margin-left: 3px;
			vertical-align: middle;
			width: 2ch;
		}

		.animal {
			margin: 10px;
			display: inline-block;
			color: white;
			cursor: pointer;

			span.enabled {
				color: white;
			}

			span.disabled {
				color: rgb(200, 200, 200);
			}
		}

	}

	#bigParent {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgb(50, 50, 50);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>