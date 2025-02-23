<script>
	import Nav from '$lib/Nav.svelte';
	import '@fontsource-variable/overpass'; // 100-900
	let { children } = $props();
</script>

<main>
	<Nav />

	{@render children()}
</main>

<style>
	main {
		width: 80ch;
		margin: auto;
	}
</style>
