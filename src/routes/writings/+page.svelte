<script>
	import { fade } from 'svelte/transition';
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

<div>
	<h1 class="mb-0">
		<span class="text-primary">My</span>
		Writings.
	</h1>
	<p class="italic">Blogs, notes, thoughts, reviews ... basically me blabbering.</p>
</div>

<div class="flex flex-wrap gap-4">
	{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
		<button
			class="rounded-xl px-4 py-1 active:translate-y-1 transition-all duration-200 ease-out {selectedTags.has(
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

<ol class="my-16">
	{#each filteredPosts as post}
		<a
			transition:fade={{ duration: 300 }}
			href={post.path}
			class="no-underline font-normal text-accent hover:text-primary transition-all duration-200"
		>
			<li>{post.meta.title}</li>
		</a>
	{/each}
</ol>
