<script>
	import '../app.css';
	import '@fontsource-variable/overpass'; // 100-900
	import Nav from '$lib/Nav.svelte';

	let { children } = $props();
</script>

<Nav />
{@render children()}
