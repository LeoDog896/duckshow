<script lang="ts">
	let url = "https://random-d.uk/api/randomimg"

	/** Utility function to fetch JSON from a url. */
	async function randomJSONAPI(url: string): Promise<any> {
		const response = await fetch(url);
		return await response.json()
	}
	
	/** Represents a named factory that can generate URLs of animals. */
	interface AnimalFactory {
		name: string;
		usage: () => Promise<string>;
		enabled: boolean;
	}

	const randomAnimals: AnimalFactory[] = [
		{
			name: "fox",
			usage: async () => {
				const data = await randomJSONAPI("https://randomfox.ca/floof/")
				return data.image
			},
			enabled: true
		},
		{
			name: "bunny",
			usage: async () => {
				const data = await randomJSONAPI("https://api.bunnies.io/v2/loop/random/?media=gif")
				return data.media.gif
			},
			enabled: true
		},
		{
			name: "dog",
			usage: async () => {
				const data = await randomJSONAPI("https://dog.ceo/api/breeds/image/random")
				return data.message
			},
			enabled: true
		},
		{
			name: "duck",
			usage: async () => "https://random-d.uk/api/randomimg?" + new Date(),
			enabled: true
		},
		{
			name: "cat",
			usage: async () => "https://cataas.com/cat?" + new Date(),
			enabled: true
		}
	]

	$: selectedAnimals = randomAnimals.filter(it => it.enabled)

	const randomAnimal = async () => await selectedAnimals[~~(Math.random() * selectedAnimals.length)].usage()

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
		{#each randomAnimals as animal}
			<div class="animal">
				<input type="checkbox" name="animal" bind:checked={animal.enabled} value={animal.name}/>{animal.name}
			</div>
		{/each}
		timing: <input type="number" min="500" max="50000" bind:value={timeInterval}>
	</div>
</main>

<style lang="scss">

	#settings {
		background: rgba(0, 0, 0, 0.5);
		color: white;
		position: fixed;
		top: 10px;
		left: 50%;
		right: 0;
		border-radius: 10px;
		transform: translateX(-50%);
		text-align: center;

		.animal {
			margin: 10px;
			display: inline-block;

			input {
				margin-right: 3px;
			}

		}

	}

	#bigParent {
		position: absolute;
		width: 100vw;
		height: 100vh;
		background-color: gray;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>