<script>
	let { data } = $props();
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/writings/{slug}">{title}</a></li>
	{/each}
</ul>
