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
	<h1 class="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
		{data.title}
	</h1>
	<p>
		{data.desc}
	</p>
	<hr />
	<svelte:component this={data.content} />
</article>
