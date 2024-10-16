<script>
	import Banner from '$lib/components/Banner.svelte';

	const apps = [
		{ repo: 'hope', desc: 'arch installation script.' },
		{ repo: 'minima-nvim', desc: 'config for my personal development environment.' },
		{ repo: 'suckless', desc: 'pre-patched suckless apps.' }
	];
</script>

<svelte:head>
	<title>Apps - CommitsOverCoffee</title>
	<meta
		name="description"
		content="See what Sourav builds! Check out his latest projects and apps."
	/>
</svelte:head>

<Banner highlight="My" title="Projects" desc="Apps built with more coffee than sense." />

<div class="my-8">
	<ul>
		{#each apps as app}
			<a
				target="_blank"
				href={'https://www.github.com/commitsovercoffee/' + app.repo}
				class="no-underline font-normal hover:text-primary transition-all duration-200"
			>
				<li>
					{app.repo}
					<span class="text-accent">
						: {app.desc}
					</span>
				</li>
			</a>
		{/each}
	</ul>
</div>
