<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];

	import { SvelteSet } from 'svelte/reactivity';
	import { fade } from 'svelte/transition';

	let { data } = $props();

	const tags = [...new Set(data.posts.flatMap((post) => post.meta.tags))];
	let selectedTags = new SvelteSet();

	let filteredPosts = $state(data.posts);

	$inspect(selectedTags);
</script>

<article>
	<h1 class="mb-0" style:color={shades.primary}>
		Mind <div style:color={shades.foreground}>Palace</div>
	</h1>

	<p style:color={shades.highlight}>
		This is where I share my thoughts, musings, and creative bursts ...
	</p>

	<div class="my-12 flex gap-2">
		{#each tags as tag}
			<button
				class="rounded-xl px-2 transition-all duration-200 active:translate-y-2"
				style:color={selectedTags.has(tag) ? shades.panel : shades.foreground}
				style:background-color={selectedTags.has(tag) ? shades.foreground : shades.panel}
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
		<dl class="group cursor-pointer" transition:fade={{ duration: 300 }}>
			<dt>
				<a class="font-bold no-underline" href={post.path}
					>{post.meta.title}
					<span
						style:background-color={shades.secondary}
						class="block h-0.5 max-w-16 transition-all duration-500 group-hover:max-w-sm"
					></span>
				</a>
			</dt>
			<dd style:color={shades.desc}>{post.meta.desc}</dd>
		</dl>
	{/each}
</article>
