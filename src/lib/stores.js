import { writable } from 'svelte/store';

export const appState = writable({
	homeTransition: false,
	writingsTransition: false,
	appsTransition: false,
	edgeTransition: false,
	edgeDelay: 1500
});
