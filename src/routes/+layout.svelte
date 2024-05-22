<script>
	import '../app.css';

	import '@fontsource-variable/overpass'; // Supports weights 100-900

	import Nav from '$lib/components/Nav.svelte';

	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<Nav />
{#key data.currentRoute}
	<main in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}
<Footer />
