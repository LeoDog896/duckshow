import { writable, derived } from "svelte/store";

/** How much time to take before grabbing another image from the factory. */
export const unrestrictedSeconds = writable(3)

/** Milliseconds derived from unrestrictedSeconds. Bounded from half a second to a minute */
export const millis = derived(
	unrestrictedSeconds,
	newTime => Math.max(
		Math.min(
			newTime * 1000,
			60000 // maximum amount (1 minute)
		),
		500 // minimum amount (0.5 seconds)
	)
)