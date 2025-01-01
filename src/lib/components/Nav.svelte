<script>
	import { selected, themes } from '$lib/theme.svelte';
	import { page } from '$app/state';

	const links = ['blog', 'apps'];
</script>

<nav class="flex flex-row items-center justify-between py-16">
	<a
		style:color={themes[selected].foreground}
		class=" flex flex-row gap-2 p-2 no-underline"
		href="/"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-coffee"
			><path d="M10 2v2" /><path d="M14 2v2" /><path
				d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
			/><path d="M6 2v2" /></svg
		>
		<span> CommitsOverCoffee </span>
	</a>
	<div>
		{#each links as link}
			{#if link === 'home'}{:else}
				<a
					style:color={page.url.pathname.slice(1) === link
						? themes[selected].primary
						: themes[selected].foreground}
					class="p-2 no-underline"
					href={link}
				>
					{link}</a
				>
			{/if}
		{/each}
	</div>
</nav>

<style>
	a {
		color: var(--link);
	}
</style>
