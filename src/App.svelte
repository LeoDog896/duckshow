<script lang="ts">
	let url = "https://random-d.uk/api/randomimg"

	async function randomJSONAPI(url: string): Promise<any> {
		const response = await fetch(url);
		return await response.json()
	}
	
	interface AnimalFactory {
		name: string;
		usage: () => Promise<string>
	}

	const randomAnimals: AnimalFactory[] = [
		{
			name: "fox",
			usage: async () => {
				const data = await randomJSONAPI("https://randomfox.ca/floof/")
				return data.image
			}
		},
		{
			name: "bunny",
			usage: async () => {
				const data = await randomJSONAPI("https://api.bunnies.io/v2/loop/random/?media=gif")
				return data.media.gif
			}
		},
		{
			name: "dog",
			usage: async () => {
				const data = await randomJSONAPI("https://dog.ceo/api/breeds/image/random")
				return data.message
			}
		},
		{
			name: "duck",
			usage: async () => "https://random-d.uk/api/randomimg?" + new Date()
		},
		{
			name: "cat",
			usage: async () => "https://cataas.com/cat?" + new Date()
		}
	]

	const randomAnimal = async () => await randomAnimals[~~(Math.random() * randomAnimals.length)].usage()

	setInterval(async () => url = await randomAnimal(), 3000)

</script>

<main>
	<div id="bigParent" style="background-image: url('{url}')"></div>
</main>

<style>

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