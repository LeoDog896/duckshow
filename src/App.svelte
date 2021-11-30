<script lang="ts">

	let url = "https://random-d.uk/api/1.jpg"

	async function fetchAndSet(): Promise<string> {
		let response = await fetch("https://random-d.uk/api/v2/list?format=json")
		let json = await response.json()

		return json.url
	}
</script>

<main>
	<img src={url} alt="Duck" width="300"/>
	<button on:click={() => fetchAndSet().then(newUrl => url = newUrl)}>New Duck</button>
</main>

<style>

</style>