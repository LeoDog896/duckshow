<script lang="ts">
	import { unrestrictedSeconds } from "./time"
	import { sources } from "./sources"

	function keyPress(event: KeyboardEvent, index: number) {
		if (event.key == "Enter" && event.shiftKey) {
			$sources = $sources.map(item => Object.assign({}, item, { enabled: $sources[index] }))
			return
		}

		if (event.key != "Enter") return
		
		$sources[index].enabled = !$sources[index].enabled
		
	}

	const shouldEnableAll = () => 
		$sources.filter(it => it.enabled).length != $sources.length

	const enableOrDisableAll = () => 
		$sources = $sources.map(it => Object.assign({}, it, { enabled: shouldEnableAll() }))
	
</script>
<div id="settings">
	{#each $sources as source, i}
		<div class="source">
			<span
				tabindex={i + 1}
				on:click={() => source.enabled = !source.enabled}
				on:keydown={event => keyPress(event, i)}
				class={source.enabled ? "enabled" : "disabled"}
			>{source.name}</span>
		</div>
	{/each}
	<span tabindex={$sources.length + 1} on:click={enableOrDisableAll}>
		({shouldEnableAll() ? "enable" : "disable"} all)
	</span>
	<label>
		<input tabindex={$sources.length + 2} bind:value={$unrestrictedSeconds}>
		<span>s</span>
	</label>
</div>
<style lang="scss">
	span {
		user-select: none
	}

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

		.source {
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
</style>