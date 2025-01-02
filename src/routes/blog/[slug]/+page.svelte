<script>
	import { selected, themes } from '$lib/theme.svelte.js';

	// The data from the load function in +page.js is automatically available to
	// use as the data prop. So all we need to do is export that prop
	// (so it gets passed in), and then use it!
	export let data;
</script>

<svelte:head>
	<title>Writings ~ {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<h1 class="mb-0" style:--grad-1={themes[selected].primary} style:--grad-2={themes[selected].link}>
		{data.title}
	</h1>
	<p style:color={themes[selected].secondary}>{data.desc}</p>
	<hr />
	<svelte:component this={data.content} />
</article>

<style>
	h1 {
		background: linear-gradient(to right, var(--grad-1), var(--grad-2));
		color: transparent;
		background-clip: text;
	}
</style>
