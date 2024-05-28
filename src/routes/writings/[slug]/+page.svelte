<script>
	// The data from the load function in +page.js is automatically available to
	// use as the data prop. So all we need to do is export that prop
	// (so it gets passed in), and then use it!
	export let data;
</script>

<svelte:head>
	<title>Writings ~ {data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<article>
	<div class="py-16">
		<h1
			class="mb-0 select-none text-transparent bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-6xl"
		>
			{data.title}
		</h1>
		<p class="text-2xl italic align-middle">{data.desc}</p>
		<svelte:component this={data.content} />
	</div>
</article>
