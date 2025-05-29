<script>
	import Hero from '$lib/Hero.svelte';

	const projects = [
		{
			repo: 'hope',
			desc: 'arch install script. ⚡',
			demo: true
		},

		{
			repo: 'dwm-remix',
			desc: 'pre-patched dwm. ✨',
			demo: false
		}
	];
</script>

<svelte:head>
	<title>Projects - Commits Over Coffee</title>
	<meta name="description" content="Projects - what I've built, learned and tinkered with." />
</svelte:head>

<Hero first="Commit" second="Pile" desc="Things I committed to, sometimes literally." />
<div class="mb-20 grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
	{#each projects as project}
		<section class="bg-panel flex flex-col gap-4 rounded-xl p-6">
			<dl class="not-prose">
				<dt class="my-2">
					<p class="text-anchor text-lg font-bold">
						{project.repo}
					</p>
				</dt>
				<dd class="text-fg">{project.desc}</dd>
			</dl>
			<div class="flex gap-2">
				<a
					target="_blank"
					class="hover:bg-highlight hover:text-bg not-prose text-highlight bg-bg rounded-xl px-2 py-0.5 no-underline transition-all duration-200 ease-in"
					href="https://github.com/commitsovercoffee/{project.repo}">source</a
				>
				{#if project.demo}
					<a
						target="_blank"
						class="hover:bg-tertiary hover:text-bg not-prose text-tertiary bg-bg rounded-xl px-2 py-0.5 no-underline transition-all duration-200 ease-in"
						href="https://{project.repo}.commitsovercoffee.com">demo</a
					>
				{/if}
			</div>
		</section>
	{/each}
</div>
