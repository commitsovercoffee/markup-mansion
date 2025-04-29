<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Writings ~ {data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<div class="blog mb-20">
	<div class="flex flex-row flex-wrap gap-x-2">
		{#each data.tags as tag}
			<span class="text-tertiary">#{tag}</span>
		{/each}
	</div>
	<h1 class="text-primary mb-0">
		{data.title}
	</h1>
	<p>
		{data.desc}
	</p>
	<data.content />
</div>
