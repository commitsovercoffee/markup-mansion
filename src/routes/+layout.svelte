<script>
	// assets
	import '../app.css';
	import '@fontsource-variable/overpass'; // 100-900
	import { Coffee, Moon, SunMedium } from 'lucide-svelte';

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
		: 'light'} font-overpass bg-bg selection:bg-fg selection:text-bg min-h-screen min-w-screen px-4 transition-colors duration-200 ease-in"
>
	<div class="prose text-body mx-auto flex min-h-screen flex-col justify-between">
		<!-- nav bar ------------------------------------------------->

		<nav class="flex flex-col items-start gap-4 py-12">
			<a href="/" class="group flex items-center no-underline">
				<Coffee
					size={28}
					strokeWidth={1.8}
					class="stroke-fg mx-2 -rotate-12 transition-all duration-200 ease-in group-hover:rotate-0"
				/>

				<span class="text-fg text-xl"> CommitsOverCoffee </span>
			</a>
			<div class="flex flex-row items-center gap-4">
				<a
					class="hover:text-secondary no-underline underline-offset-2 {page.url.pathname.startsWith(
						'/writings'
					)
						? 'text-secondary underline underline-offset-8'
						: 'text-body'}"
					href="/writings">/writings</a
				>

				<a
					class="hover:text-secondary no-underline {page.url.pathname == '/projects'
						? 'text-secondary underline underline-offset-8'
						: 'text-body'}"
					href="/projects">/projects</a
				>
				<a
					class="hover:text-secondary no-underline {page.url.pathname == '/rss.xml'
						? 'text-secondary underline underline-offset-8'
						: 'text-body'}"
					target="_blank"
					href="/rss.xml">/rss</a
				>
				<div class="h-[28px] w-[28px]">
					{#if !lightsoff}
						<div
							in:fly={{ easing: cubicOut, y: 20, duration: 200, delay: 200 }}
							out:fly={{ easing: cubicIn, y: 20, duration: 200 }}
							class="transition-all duration-300 ease-in active:translate-y-2"
						>
							<SunMedium
								onclick={() => (lightsoff = !lightsoff)}
								size={28}
								strokeWidth={1.8}
								class="stroke-secondary cursor-pointer"
							/>
						</div>
					{:else}
						<div
							in:fly={{ easing: cubicOut, y: 20, duration: 200, delay: 200 }}
							out:fly={{ easing: cubicIn, y: 20, duration: 200 }}
							class="transition-all duration-300 ease-in active:translate-y-2"
						>
							<Moon
								onclick={() => (lightsoff = !lightsoff)}
								size={24}
								strokeWidth={1.8}
								class="stroke-primary fill-primary cursor-pointer"
							/>
						</div>
					{/if}
				</div>
			</div>
		</nav>

		<!-- page content & loader ----------------------------------->

		{#if navigating.to}
			<div class="flex flex-row items-center gap-2">
				<LoaderPinwheel size={24} strokeWidth={1.8} class="stroke-secondary m-0 animate-spin" />
				<p class="m-0">
					<span class="text-secondary"> Loading ...</span>
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

		<!-- footer -------------------------------------------------->

		<Footer />
	</div>
</main>
