<script lang="ts">
	import { unrestrictedSeconds } from "./time"
	import { sources } from "./sources"
	import { draggable } from "svelte-drag"
	import { fade } from 'svelte/transition';
	import Help from "./Help.svelte"
	import { getContext } from 'svelte';
	
	const { open } = getContext('simple-modal');

	let cursorLastMove = Date.now()
	$: now = Date.now() || cursorLastMove

	setInterval(() => now = Date.now(), 500)
	$: visible = (now - cursorLastMove) < 5000;

	interface ShiftableEvent {
		shiftKey: boolean
	}

	function keyPress(event: KeyboardEvent, index: number) {

		if (event.key != "Enter") return

		press(event, index)
		
	}

	function press(event: ShiftableEvent, index: number) {
		if (event.shiftKey) {
			const enabled = $sources[index].enabled

			$sources = $sources.map(item => Object.assign({}, item, { enabled }))
		}

		$sources[index].enabled = !$sources[index].enabled
	}

	$: shouldEnableAll = !$sources.every(it => it.enabled)

	const updateMove = () => cursorLastMove = Date.now()

	const enableOrDisableAll = () => 
		$sources = $sources.map(it => Object.assign({}, it, { enabled: shouldEnableAll }))
	
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
		transition-effects focus-within:bg-gray-900/50
		hover:bg-gray-900/50
		inset-x-0 mx-auto backdrop-blur-md"
	>
		{#each $sources as source, i}
			<div class="cursor-pointer inline-block m-2 hoverableBorder">
				<span
					tabindex={i + 1}
					on:click={event => press(event, i)}
					on:keydown={event => keyPress(event, i)}
					class="select-none {source.enabled ? "text-white" : "text-gray-300"}"
				>{source.name}</span>
			</div>
		{/each}
		<span 
			tabindex={$sources.length + 1} 
			on:click={enableOrDisableAll}
			on:keydown={event => { if (event.key == "Enter") enableOrDisableAll() }}
			class="hoverableBorder"
		>
			({shouldEnableAll ? "enable" : "disable"} all)
		</span>
		<label>
			<input
				class="rounded-sm bg-transparent w-6"
				tabindex={$sources.length + 2}
				bind:value={$unrestrictedSeconds}
			>
			<span>s</span>
		</label>
		<span
			tabindex={$sources.length + 3}
			class="hoverableBorder"
			on:click={() => open(Help)}
		>help</span>
	</div>
{/if}
<style>
	:global(.draggingSettings) {
		@apply shadow-lg bg-gray-900/75
	}

	.hoverableBorder {
		@apply border-b-2 border-transparent hover:border-white
	}
</style>