<script>
	// assets
	import '../app.css';
	import '@fontsource-variable/overpass'; // 100-900
	import { Coffee, SunMedium } from 'lucide-svelte';

	// components
	import Footer from '$lib/Footer.svelte';
	import { LoaderPinwheel } from 'lucide-svelte';

	// transitions
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	// std lib
	import { navigating } from '$app/state';
	import { page } from '$app/state';

	// runes
	let { children } = $props();
	let lightsoff = $state(true);
</script>

<main
	class="{lightsoff
		? 'dark prose-invert'
		: 'light'} bg-bg min-h-screen min-w-screen px-4 transition-colors duration-300 ease-in"
>
	<div class="prose text-body mx-auto flex min-h-screen flex-col justify-between">
		<div>
			<nav class="flex flex-col items-center gap-4 py-16 md:items-start">
				<a href="/" class="group flex items-center no-underline">
					<Coffee
						size={28}
						strokeWidth={1.8}
						class="stroke-fg mx-2 -rotate-12 transition-all duration-200 ease-in group-hover:rotate-0"
					/>

					<span class="text-fg text-xl"> CommitsOverCoffee </span>
				</a>
				<div class="flex flex-row gap-4">
					<a
						class="hover:text-fg no-underline {page.url.pathname.startsWith('/writings')
							? 'text-fg'
							: 'text-body'}"
						href="/writings">/writings</a
					>

					<a
						class="hover:text-fg no-underline {page.url.pathname == '/projects'
							? 'text-fg'
							: 'text-body'}"
						href="/projects">/projects</a
					>
					<a
						class="hover:text-fg no-underline {page.url.pathname == '/rss.xml'
							? 'text-fg'
							: 'text-body'}"
						target="_blank"
						href="/rss.xml">/rss</a
					>
					<SunMedium
						onclick={() => (lightsoff = !lightsoff)}
						size={24}
						strokeWidth={1.8}
						class="stroke-secondary -rotate-12 transition-all duration-200 ease-in group-hover:rotate-0"
					/>
				</div>
			</nav>

			<!------------------------- page loader ------------------------------>
			{#if navigating.to}
				<div class="flex flex-row items-center gap-2">
					<LoaderPinwheel size={24} strokeWidth={1.8} class="stroke-secondary m-0 animate-spin" />
					<p class="m-0">
						<span class="text-secondary">Good things come to those who wait ...</span>
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
	</div>
</main>

<style>
	main {
		font-family: 'Overpass Variable', sans-serif;
	}
</style>
