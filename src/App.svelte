<script lang="ts">

	import { sources } from "./sources"
	import { url, randomURL } from "./url"

	/** How much time to take before grabbing another image from the factory. */
	let timeInterval = 3

	function keyPress(event: KeyboardEvent, index: number) {
		if (event.key == "Enter" && event.shiftKey) {
			$sources = $sources.map(item => {
				if (item == sources[index]) return Object.assign({}, item, { enabled: true })
				
				return Object.assign({}, item, { enabled: false })
 			})
			return
		}

		if (event.key == "Enter") {
			sources[index].enabled = !sources[index].enabled
		}
	}

	async function showAnimal() {
		$url = await randomURL()
		setTimeout(showAnimal, Math.max(Math.min(timeInterval * 1000, 60000), 500))
	}

	showAnimal()

</script>

<div id="bigParent" style="background-image: url('{url}')"></div>
<div id="settings">
	{#each $sources as animal, i}
		<div class="animal">
			<span
				tabindex={i + 1}
				on:click={() => animal.enabled = !animal.enabled}
				on:keydown={event => keyPress(event, i)}
				class={animal.enabled ? "enabled" : "disabled"}
			>{animal.name}</span>
		</div>
	{/each}
	<label>
		<input tabindex={$sources.length + 1} bind:value={timeInterval}>
		<span>s</span>
	</label>
</div>

<style lang="scss">

	#settings {
		background: rgba(0, 0, 0, 0.85);
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