<script lang="ts">
	import { unrestrictedSeconds } from "./time"
	import { sources } from "./sources"

	function keyPress(event: KeyboardEvent, index: number) {
		if (event.key == "Enter" && event.shiftKey) {
			const enabled = $sources[index].enabled

			$sources = $sources.map(item => Object.assign({}, item, { enabled }))
		}

		if (event.key != "Enter") return
		
		$sources[index].enabled = !$sources[index].enabled
		
	}

	const shouldEnableAll = () => !$sources.every(it => it.enabled)

	const enableOrDisableAll = () => {
		$sources = $sources.map(it => Object.assign({}, it, { enabled: shouldEnableAll() }))
	}
	
</script>
<div class="fixed rounded-md text-center w-9/12 bg-gray-900 shadow-lg inset-x-0 mx-auto">
	{#each $sources as source, i}
		<div class="text-white cursor-pointer inline-block m-2">
			<span
				tabindex={i + 1}
				on:click={() => source.enabled = !source.enabled}
				on:keydown={event => keyPress(event, i)}
				class="select-none {source.enabled ? "text-white" : "text-gray-300"}"
			>{source.name}</span>
		</div>
	{/each}
	<span 
		tabindex={$sources.length + 1} 
		on:click={enableOrDisableAll}
		on:keydown={event => { if (event.key == "Enter") enableOrDisableAll() }}
		class="select-none text-white"
	>
		({shouldEnableAll() ? "enable" : "disable"} all)
	</span>
	<label>
		<input class="rounded-sm" tabindex={$sources.length + 2} bind:value={$unrestrictedSeconds}>
		<span class="select-none">s</span>
	</label>
</div>