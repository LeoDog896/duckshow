<script lang="ts">

	import { imageData } from "./url"
	import Settings from "./Settings.svelte"

</script>

<div id="bigParent" style="background-image: url('{$imageData.url}')"></div>
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