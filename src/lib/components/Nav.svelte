<script>
	import { page } from '$app/stores';
	import { draw, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { appState } from '$lib/stores';

	$: currentURL = $page.url.pathname;
	const links = ['home', 'writings', 'apps'];
</script>

<div class="flex justify-between items-center w-full py-8 mb-16">
	<div class="h-14 w-14">
		{#if $appState.edgeTransition}
			<a href="/" aria-label="home page">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-coffee"
				>
					<path transition:draw={{ duration: 1500, easing: quintOut }} d="M10 2v2" />
					<path transition:draw={{ duration: 1500, easing: quintOut }} d="M14 2v2" />
					<path
						transition:draw={{ duration: 1500, easing: quintOut }}
						d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
					/>
					<path transition:draw={{ duration: 1500, easing: quintOut }} d="M6 2v2" />
				</svg>
			</a>
		{/if}
	</div>
	<div class="list-none flex gap-6">
		{#each links as link}
			{#if $appState.edgeTransition}
				<a
					href={link === 'home' ? '/' : '/' + link}
					class="{currentURL === '/' && link === 'home'
						? 'text-primary'
						: currentURL.slice(1) === link &&
							'text-primary'} no-underline font-normal hover:text-primary group transition-all duration-200"
					transition:fly={{ delay: 500, y: -50, duration: 1500, easing: quintOut }}
				>
					{link}
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"
					></span>
				</a>
			{/if}
		{/each}
	</div>
</div>
