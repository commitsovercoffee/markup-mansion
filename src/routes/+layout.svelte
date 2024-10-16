<script>
	import '../app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import Loader from '$lib/components/Loader.svelte';

	export let data;

	let isLoading = false;
	beforeNavigate(() => (isLoading = true));
	afterNavigate(() => (isLoading = false));
</script>

<Nav />
{#key data.currentRoute}
	{#if isLoading}
		<Loader />
	{:else}
		<slot />
	{/if}
{/key}
<Footer />
