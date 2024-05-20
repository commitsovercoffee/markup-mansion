<script>
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
	<div class="py-16">
		<h1>{data.title}</h1>
		<svelte:component this={data.content} />
	</div>
</article>
