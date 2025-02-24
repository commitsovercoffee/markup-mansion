<script>
	import '../app.css';
	import '@fontsource-variable/overpass'; // 100-900

	import Nav from '$lib/Nav.svelte';

	let { children } = $props();

	import { theme, palette } from '$lib/theme.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.backgroundColor = palette[theme].background;
		document.body.style.fontFamily = 'Overpass Variable';
	});
</script>

<main style="" class="prose prose-invert mx-auto">
	<Nav />
	{@render children()}
</main>
