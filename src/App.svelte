<script lang="ts">
	import { imageData } from "./url"
	import Tailwindcss from "./Tailwindcss.svelte"
	import Settings from "./Settings.svelte"
	import Modal from "svelte-simple-modal"

</script>

<Tailwindcss />
<Modal>
	<div class="fixed w-screen h-screen bg-contain bg-no-repeat bg-center bg-gray-500" style="background-image: url('{$imageData.url}')"></div>
	<Settings/>
</Modal>