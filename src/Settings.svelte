<script lang="ts">
	import { unrestrictedSeconds } from "./time"
	import { sources } from "./sources"
	import { draggable } from "svelte-drag"
	import { fade } from 'svelte/transition';

	let cursorLastMove = Date.now()
	$: now = Date.now() || cursorLastMove

	setInterval(() => now = Date.now(), 500)
	$: visible = (now - cursorLastMove) < 5000;

	function keyPress(event: KeyboardEvent, index: number) {
		if (event.key == "Enter" && event.shiftKey) {
			const enabled = $sources[index].enabled

			$sources = $sources.map(item => Object.assign({}, item, { enabled }))
		}

		if (event.key != "Enter") return
		
		$sources[index].enabled = !$sources[index].enabled
		
	}

	const shouldEnableAll = () => !$sources.every(it => it.enabled)

	const updateMove = () => cursorLastMove = Date.now()

	const enableOrDisableAll = () => {
		$sources = $sources.map(it => Object.assign({}, it, { enabled: shouldEnableAll() }))
	}
	
</script>
<svelte:body
	on:click={updateMove}
	on:mousemove={updateMove}
	on:keypress={updateMove}
></svelte:body>
{#if visible}
	<div
		transition:fade
		use:draggable={{bounds: "body", defaultClassDragging: "draggingSettings"}}
		class="text-white select-none fixed rounded-md
		top-3 text-center w-9/12 bg-gray-900/25 shadow-md
		transition-effects hover:bg-gray-900/50
		inset-x-0 mx-auto backdrop-blur-md"
	>
		{#each $sources as source, i}
			<div class="cursor-pointer inline-block m-2 border-b-2 border-transparent hover:border-white">
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
			class="border-b-2 border-transparent hover:border-white"
		>
			({shouldEnableAll() ? "enable" : "disable"} all)
		</span>
		<label>
			<input
				class="rounded-sm bg-transparent w-6"
				tabindex={$sources.length + 2}
				bind:value={$unrestrictedSeconds}
			>
			<span>s</span>
		</label>
	</div>
{/if}
<style>
	:global(.draggingSettings) {
		@apply shadow-lg bg-gray-900/75
	}
</style>