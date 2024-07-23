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

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';

	onMount(() => {
		setTimeout(() => {
			$appState.writingsTransition = true;
		}, 500);
	});
</script>

<svelte:head>
	<title>Writings - CommitsOverCoffee</title>
	<meta
		name="description"
		content="Dive into Sourav's thoughts! Explore his blog posts, notes, opinions, reviews, and more."
	/>
</svelte:head>

{#if $appState.writingsTransition}
	<Banner
		highlight="My"
		title="Writings"
		desc="Blogs, notes, thoughts, reviews ... basically me blabbering"
	/>
{/if}

<div class="my-16 flex flex-wrap gap-4">
	{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag, index}
		{#if $appState.writingsTransition}
			<button
				transition:fly={{
					delay: 1500 + index * 200,
					y: 50,
					duration: 400 + index * 200,
					easing: quintOut
				}}
				class="rounded-xl px-4 py-1 hover:bg-accent active:translate-y-1 transition-all duration-200 ease-out {selectedTags.has(
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
		{/if}
	{/each}
</div>

<ul class="my-16">
	{#each filteredPosts as post, index}
		<a
			href={post.path}
			class="no-underline font-normal text-accent hover:text-primary transition-all duration-200"
		>
			{#if $appState.writingsTransition}
				<li
					transition:fly={{
						x: 10 + index * 10,
						delay: 2000 + index * 200,
						duration: 400 + index * 200,
						easing: quintOut
					}}
				>
					{post.meta.title}
				</li>
			{/if}
		</a>
	{/each}
</ul>
