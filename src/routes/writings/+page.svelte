<script>
	import Hero from '$lib/Hero.svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { fade } from 'svelte/transition';

	let { data } = $props();

	const tags = [...new Set(data.posts.flatMap((post) => post.meta.tags))];
	let selectedTags = new SvelteSet();

	let filteredPosts = $state(data.posts);
</script>

<svelte:head>
	<title>Writings - Commits Over Coffee</title>
	<meta
		name="description"
		content="Writings - notes, blogs and random thoughts I've tried to make sense of."
	/>
</svelte:head>

<article>
	<Hero first="Thought" second="Reservoir" desc="Plunge into my thoughts ~ part blog, part wiki." />
	<div class="mb-12 flex flex-wrap gap-2">
		{#each tags as tag}
			<button
				class=" {selectedTags.has(tag)
					? 'text-panel bg-primary'
					: 'text-fg bg-panel'} border-panel hover:border-primary cursor-pointer rounded-xl border-b-2 px-4 py-1 transition-all duration-200 active:translate-y-2"
				onclick={() => {
					selectedTags.has(tag) ? selectedTags.delete(tag) : selectedTags.add(tag);
					filteredPosts = data.posts.filter((post) => {
						return selectedTags.size === 0 || post.meta.tags.some((t) => selectedTags.has(t));
					});
				}}
			>
				{tag}
			</button>
		{/each}
	</div>

	{#each filteredPosts as post}
		<a class="group no-underline" href={post.path}>
			<dl transition:fade={{ duration: 300 }}>
				<dt class="text-fg font-bold">
					{post.meta.title}
					<span
						class="bg-primary block h-0.5 max-w-16 transition-all duration-300 group-hover:max-w-sm"
					></span>
				</dt>
				<dd class="text-body">{post.meta.desc}</dd>
			</dl>
		</a>
	{/each}
</article>
