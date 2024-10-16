<script>
	import Banner from '$lib/components/Banner.svelte';
	export let data;

	let selectedTags = new Set();
	let filteredPosts = data.posts;

	function updateFilterPosts(tag) {
		if (selectedTags.has(tag)) {
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);
		}

		selectedTags = selectedTags; // to trigger svelte's reactivity

		filteredPosts = data.posts.filter((post) => {
			return selectedTags.size === 0 || post.meta.tags.some((t) => selectedTags.has(t));
		});
	}
</script>

<svelte:head>
	<title>Writings - CommitsOverCoffee</title>
	<meta
		name="description"
		content="Dive into Sourav's thoughts! Explore his blog posts, notes, opinions, reviews, and more."
	/>
</svelte:head>

<Banner
	highlight="My"
	title="Writings"
	desc="Blogs, notes, thoughts, reviews ... basically me blabbering"
/>

<div class="my-8 flex flex-wrap gap-4">
	{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
		<button
			class="rounded-xl px-4 py-1 hover:bg-primary hover:text-background active:translate-y-1 transition-all duration-200 ease-out {selectedTags.has(
				tag
			)
				? 'bg-primary text-background'
				: 'bg-highlight'}"
			on:click={() => {
				updateFilterPosts(tag);
			}}
		>
			{tag}
		</button>
	{/each}
</div>

<ul class="my-8">
	{#each filteredPosts as post}
		<a
			href={post.path}
			class="no-underline font-normal hover:text-primary transition-all duration-200"
		>
			<li>
				{post.meta.title}
			</li>
		</a>
	{/each}
</ul>
