<script>
	import { fade } from 'svelte/transition';

	const apps = [
		{ repo: 'hope', desc: 'arch installation script.' },
		{ repo: 'minima-nvim', desc: 'config for my personal development environment.' }
	];
</script>

<svelte:head>
	<title>Apps - CommitsOverCoffee</title>
	<meta
		name="description"
		content="See what Sourav builds! Check out his latest projects and apps."
	/>
</svelte:head>

<div>
	<h1 class="mb-0">
		<span class="text-primary">My</span>
		Projects.
	</h1>
	<p class="italic">Apps built with more coffee than sense.</p>
</div>

<div class="my-16">
	<ul>
		{#each apps as app}
			<a
				transition:fade={{ duration: 300 }}
				target="_blank"
				href={'https://www.github.com/commitsovercoffee/' + app.repo}
				class="no-underline font-normal hover:text-primary transition-all duration-200"
			>
				<li>
					{app.repo} :
					<span class="text-accent">
						{app.desc}
					</span>
				</li>
			</a>
		{/each}
	</ul>
</div>
