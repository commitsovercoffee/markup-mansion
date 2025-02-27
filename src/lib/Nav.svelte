<script>
	import { page } from '$app/state';
	import { Coffee } from 'lucide-svelte';

	import { theme, palette } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<nav
	class="flex flex-col items-center gap-4 py-16 md:items-start"
	style:--hover-color={shades.foreground}
>
	<a style:--normal-color={shades.foreground} href="/" class="group flex items-center">
		<Coffee
			size={32}
			strokeWidth={2}
			class="mx-2 -rotate-12 transition-all duration-200 ease-in group-hover:rotate-0"
		/>

		<span class="text-xl font-bold"> CommitsOverCoffee </span>
	</a>
	<div class="flex flex-row gap-4">
		<a
			style:--normal-color={page.url.pathname.startsWith('/writings')
				? shades.foreground
				: shades.desc}
			href="/writings">Writings</a
		>
		<span style:color={shades.desc}> | </span>
		<a
			style:--normal-color={page.url.pathname == '/projects' ? shades.foreground : shades.desc}
			href="/projects">Projects</a
		>
		<span style:color={shades.desc}> | </span>
		<a
			style:--normal-color={page.url.pathname == '/rss.xml' ? shades.foreground : shades.desc}
			target="_blank"
			href="/rss.xml">RSS</a
		>
	</div>
</nav>

<style>
	a {
		text-decoration: none;
		color: var(--normal-color);
	}

	a:hover {
		color: var(--hover-color);
	}
</style>
