<script>
	import Nav from '$lib/components/Nav.svelte';
	import { selected, themes } from '$lib/theme.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<article style:background-color={themes[selected].background} style:height="100vh">
	<main class="prose prose-invert mx-auto h-full">
		<Nav />
		{@render children()}
	</main>
</article>
