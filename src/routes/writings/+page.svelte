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

<h1 class="mb-0">
	<span class="text-red-400">Lost Thoughts,</span> <br />Found here.
</h1>
<p class="mt-0">Making sense of the world, one blog post at a time.</p>

<div class="my-16 flex gap-4">
	{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
		<button
			class="rounded-xl px-4 py-1 active:translate-y-1 transition-all duration-200 ease-out {selectedTags.has(
				tag
			)
				? 'bg-red-400 text-[#1b1b1f]'
				: 'bg-[#32363f]'}"
			on:click={() => {
				updateFilterPosts(tag);
			}}
		>
			{tag}
		</button>
	{/each}
</div>

<ul>
	{#each filteredPosts as post}
		<li transition:fade={{ duration: 300 }}>
			<a
				href={post.path}
				class="prose-neutral prose-invert no-underline font-bold group transition-all duration-200"
			>
				{post.meta.title}
				<span
					class="block max-w-16 group-hover:max-w-sm transition-all duration-500 h-0.5 bg-red-400"
				></span>
			</a>
			<p class="ml-12 text-neutral-500">{post.meta.desc}</p>
		</li>
	{/each}
</ul>
