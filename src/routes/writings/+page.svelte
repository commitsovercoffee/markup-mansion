<script>
	let { data } = $props();
</script>

<h1>Writings</h1>
<p>This is where I share my thoughts, musings, and creative bursts ...</p>

<ul>
	{#each data.posts as post}
		<dl>
			<dt><a href={post.path}>{post.meta.title}</a></dt>
			<dd>{post.meta.desc}</dd>
		</dl>
	{/each}
</ul>
