<script>
	import { fade } from 'svelte/transition';
	import Hero from '$lib/components/Hero.svelte';
	import { selected, themes } from '$lib/theme.svelte.js';

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

<Hero first="Mind" second="Palace" br={false} desc="Blogs, thoughts & whatever else pops up." />

<div class="my-12 flex gap-2">
	{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
		<button
			class="rounded-xl px-4 py-1 transition-all duration-200 ease-out active:translate-y-1 {selectedTags.has(
				tag
			)
				? 'bg-red-400'
				: 'bg-[#32363f]'}"
			style:color={selectedTags.has(tag) ? themes[selected].panel : themes[selected].foreground}
			style:background-color={selectedTags.has(tag)
				? themes[selected].foreground
				: themes[selected].panel}
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
		<li class="group hover:cursor-pointer" transition:fade={{ duration: 300 }}>
			<a
				style:color={themes[selected].foreground}
				href={post.path}
				class="font-bold no-underline transition-all duration-200"
			>
				{post.meta.title}
				<span
					style:background-color={themes[selected].secondary}
					class="block h-0.5 max-w-16 transition-all duration-500 group-hover:max-w-sm"
				></span>
			</a>
			<p style:color={themes[selected].desc} class="ml-12">{post.meta.desc}</p>
		</li>
	{/each}
</ul>
