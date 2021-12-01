<script lang="ts">
	let url = "https://picsum.photos/500/600.webp?blur=1"

	/** Utility function to fetch JSON from a url. */
	const randomJSONAPI = (url: string): Promise<any> => fetch(url).then(data => data.json())
	
	/** Represents a named factory that can generate URLs of animals. */
	interface AnimalFactory {
		/** The name of the animal */
		name: string;
		/** The factory for generating a random URL of the animal */
		url: () => Promise<string>;
		/** If the animal should be shown on the slideshow */
		enabled: boolean;
	}

	const randomAnimals: AnimalFactory[] = [
		{
			name: "fox",
			url: () => randomJSONAPI("https://randomfox.ca/floof/").then(data => data.image),
			enabled: true
		},
		{
			name: "bunny",
			url: () => randomJSONAPI("https://api.bunnies.io/v2/loop/random/?media=gif")
				.then(data => data.media.gif),
			enabled: true
		},
		{
			name: "dog",
			url: () => randomJSONAPI("https://dog.ceo/api/breeds/image/random")
				.then(data => data.message),
			enabled: true
		},
		{
			name: "duck",
			url: async () => "https://random-d.uk/api/randomimg?" + new Date(),
			enabled: true
		},
		{
			name: "cat",
			url: async () => "https://cataas.com/cat?" + new Date(),
			enabled: true
		}
	]

	const randomAnimal = async (): Promise<string> => {
		
		const selectedAnimals = randomAnimals.filter(it => it.enabled)

		if (selectedAnimals.length == 0) return "https://picsum.photos/500/600.webp?blur=1"

		return await selectedAnimals[~~(Math.random() * selectedAnimals.length)].url()
	}

	/** How much time to take before grabbing another image from the factory. */
	let timeInterval = 3000

	async function showAnimal() {
		url = await randomAnimal()
		setTimeout(showAnimal, timeInterval)
	}

	showAnimal()

</script>

<main>
	<div id="bigParent" style="background-image: url('{url}')"></div>
	<div id="settings">
		{#each randomAnimals as animal, i}
			<div class="animal">
				<span
					tabindex={i + 1}
					on:click={() => animal.enabled = !animal.enabled}
					on:keyup={event => { if (event.key == "Enter") animal.enabled = !animal.enabled }}
					class={animal.enabled ? "enabled" : "disabled"}
				>{animal.name}</span>
			</div>
		{/each}
		<label><span>timing</span> <input tabindex={randomAnimals.length + 1} type="number" min="500" max="50000" bind:value={timeInterval}></label>
	</div>
</main>

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

		input {
			background: rgba(0, 0, 0, 0);
			font-family: inherit;
			font-size: inherit;
			padding: 3px;
			box-sizing: border-box;
			border: 0px solid;
			border-bottom: 1px solid white;
			color: white;
			text-align: center;
			border-radius: 2px;
			margin-left: 3px;
			vertical-align: middle;
		}

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
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