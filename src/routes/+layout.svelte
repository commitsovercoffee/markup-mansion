<script>
	// Supports weights 100-900
	import '@fontsource-variable/overpass';

	import Nav from '$lib/components/Nav.svelte';
	import { selected, themes } from '$lib/theme.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();

	onMount(() => {
		document.body.style.backgroundColor = themes[selected].background;
	});
</script>

<article style:height="100vh">
	<main class="prose prose-invert mx-auto h-full font-overpass">
		<Nav />
		{@render children()}
	</main>
</article>
