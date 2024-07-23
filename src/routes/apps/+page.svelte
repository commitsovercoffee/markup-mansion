<script>
	import Banner from '$lib/components/Banner.svelte';

	const apps = [
		{ repo: 'hope', desc: 'arch installation script.' },
		{ repo: 'minima-nvim', desc: 'config for my personal development environment.' },
		{ repo: 'suckless', desc: 'pre-patched suckless apps.' }
	];

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';

	onMount(() => {
		setTimeout(() => {
			$appState.appsTransition = true;
		}, 500);
	});
</script>

<svelte:head>
	<title>Apps - CommitsOverCoffee</title>
	<meta
		name="description"
		content="See what Sourav builds! Check out his latest projects and apps."
	/>
</svelte:head>

{#if $appState.appsTransition}
	<Banner highlight="My" title="Projects" desc="Apps built with more coffee than sense." />
{/if}

<div class="my-16">
	<ul>
		{#each apps as app, index}
			{#if $appState.appsTransition}
				<a
					target="_blank"
					href={'https://www.github.com/commitsovercoffee/' + app.repo}
					class="no-underline font-normal hover:text-primary transition-all duration-200"
				>
					<li
						transition:fly={{
							x: 10 + index * 10,
							delay: 2000 + index * 500,
							duration: 1000 + index * 500,
							easing: quintOut
						}}
					>
						{app.repo}
						<span class="text-accent">
							: {app.desc}
						</span>
					</li>
				</a>
			{/if}
		{/each}
	</ul>
</div>
