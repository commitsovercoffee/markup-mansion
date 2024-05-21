<script>
	import { draw, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';

	$: currentURL = $page.url.pathname;

	import { onMount } from 'svelte';

	const links = ['home', 'writings', 'apps'];

	export let hidden = false;

	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1500);
	});
</script>

<div class="flex justify-between items-center w-full py-8 mb-16">
	<div class="h-12 w-12">
		{#if hidden}
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
		{/if}
	</div>
	<div class="list-none flex gap-4">
		{#each links as link}
			{#if hidden}
				<a
					href={link === 'home' ? '/' : '/' + link}
					class="{currentURL === '/' && link === 'home'
						? 'text-red-400'
						: currentURL.slice(1) === link &&
							'text-red-400'} prose-neutral prose-invert no-underline hover:text-red-400 group transition-all duration-200 delay-75"
					transition:fly={{ delay: 1000, duration: 1500, easing: quintOut }}
				>
					{link}
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-400"
					></span>
				</a>
			{/if}
		{/each}
	</div>
</div>
