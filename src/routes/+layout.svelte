<script>
	// Supports weights 100-900
	import '@fontsource-variable/overpass';

	import Nav from '$lib/components/Nav.svelte';
	import { selected, themes } from '$lib/theme.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<article style:background-color={themes[selected].background} style:height="100vh">
	<main class="font-overpass prose prose-invert mx-auto h-full">
		<Nav />
		{@render children()}
	</main>
</article>
