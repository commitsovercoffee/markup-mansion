<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Writings ~ {data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<div class="py-16">
	<h1 class="text-primary mb-0 font-medium">
		{data.title}
	</h1>
	<p class="text-fg mt-0">{data.desc}</p>
	<data.content />
</div>
