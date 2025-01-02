<script>
	import { selected, themes } from '$lib/theme.svelte';
	import { page } from '$app/state';
	import Socials from './Socials.svelte';

	const links = ['blog', 'apps'];
	let over = $state('none');
</script>

<nav class="flex flex-row justify-between">
	<div class="flex flex-row items-center gap-2 py-16">
		<a
			style:color={themes[selected].foreground}
			class="p2 group flex flex-row items-center gap-2 no-underline"
			href="/"
			onmouseover={() => {
				over = 'home';
			}}
			onmouseleave={() => {
				over = 'none';
			}}
			onfocus={() => {}}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-8 w-8 -rotate-12 transition-all duration-100 ease-in group-hover:rotate-0"
				><path d="M10 2v2" /><path d="M14 2v2" /><path
					d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
				/><path d="M6 2v2" /></svg
			>
			<span
				class="p-2"
				style:color={page.url.pathname === '/'
					? themes[selected].foreground
					: themes[selected].desc}
			>
				CommitsOverCoffee
			</span>
		</a>
		{#each links as link}
			<a
				onmouseover={() => {
					over = link;
				}}
				onmouseleave={() => {
					over = 'none';
				}}
				onfocus={() => {}}
				style:color={page.url.pathname.slice(1) === link
					? themes[selected].foreground
					: over === link
						? themes[selected].foreground
						: themes[selected].desc}
				class="p-2 no-underline"
				href="/{link}"
			>
				{link}</a
			>
		{/each}
	</div>
	<Socials />
</nav>

<style>
	a {
		color: var(--link);
	}
</style>
