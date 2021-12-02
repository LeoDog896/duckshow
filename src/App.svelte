<script lang="ts">

	import { url, randomURL } from "./url"
	import Settings from "./Settings.svelte"
	import { millis } from "./time"

	async function showAnimal() {
		$url = await randomURL()
		setTimeout(showAnimal, $millis)
	}

	showAnimal()

</script>

<div id="bigParent" style="background-image: url('{$url}')"></div>
<Settings/>
<style lang="scss">
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