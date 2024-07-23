<script>
	import '../app.css';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import Loader from '$lib/components/Loader.svelte';

	export let data;

	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';

	onMount(() => {
		setTimeout(() => {
			$appState.edgeTransition = true;
			$appState.edgeDelay = 0;
		}, 1000);
	});

	let isLoading = false;
	beforeNavigate(() => (isLoading = true));
	afterNavigate(() => (isLoading = false));
</script>

<Nav />

{#key data.currentRoute}
	<main
		in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
		out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
	>
		{#if isLoading}
			<Loader />
		{:else}
			<slot />
		{/if}
	</main>
{/key}

<Footer />
