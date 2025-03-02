<script>
	import { navigating } from '$app/state';
	import '../app.css';
	import '@fontsource-variable/overpass'; // 100-900

	import Nav from '$lib/Nav.svelte';

	let { children } = $props();

	import { theme, palette } from '$lib/theme.svelte';
	const shades = palette[theme];
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import Footer from '$lib/Footer.svelte';

	onMount(() => {
		document.body.style.backgroundColor = palette[theme].background;
		document.body.style.fontFamily = 'Overpass Variable';
	});
</script>

<main
	style:--selection-color={shades.foreground}
	class="prose prose-invert mx-auto flex min-h-screen flex-col justify-between px-4"
>
	<div>
		<Nav />
		{#if navigating.to}
			<div class="flex flex-row items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke={shades.secondary}
					stroke-width="1.2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-loader-pinwheel m-0 animate-spin"
					><path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" /><path
						d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"
					/><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" /><circle
						cx="12"
						cy="12"
						r="10"
					/></svg
				>
				<p class="m-0">
					<span style:color={shades.secondary}>Good things come to those who wait ...</span>
				</p>
			</div>
		{:else}
			<div
				in:fly={{ easing: cubicOut, y: 30, duration: 300, delay: 100 }}
				out:fly={{ easing: cubicIn, y: -30, duration: 300 }}
			>
				{@render children()}
			</div>
		{/if}
	</div>
	<Footer />
</main>
