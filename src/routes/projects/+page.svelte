<script>
	import Hero from '$lib/Hero.svelte';
	import { CircleIcon } from 'lucide-svelte';

	const projects = [
		{
			repo: 'hope',
			desc: 'arch install script. ⚡',
			lang: 'Bash',
			color: 'stroke-[#89e051] fill-[#89e051]'
		},

		{
			repo: 'dwm-remix',
			desc: 'pre-patched dwm. ✨',
			lang: 'C',
			color: 'stroke-[#555555] fill-[#555555]'
		}
	];
</script>

<svelte:head>
	<title>Projects - Commits Over Coffee</title>
	<meta name="description" content="Projects - what I've built, learned and tinkered with." />
</svelte:head>

<article>
	<Hero first="Maker's" second="Sanctuary" desc="... built one project at a time." />

	<div class="mb-20 grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
		{#each projects as project}
			<div class="bg-panel flex flex-col gap-4 rounded-lg p-4">
				<dl class="not-prose">
					<dt class="my-2">
						<a
							target="_blank"
							class="text-anchor font-bold hover:underline"
							href="https://github.com/commitsovercoffee/{project.repo}"
						>
							{project.repo}
						</a>
					</dt>
					<dd class="text-fg">{project.desc}</dd>
				</dl>
				<div class="flex flex-wrap items-end justify-between gap-4">
					<div class="flex flex-row gap-2">
						{#if project.demo}
							<a
								target="_blank"
								class="not-prose text-secondary bg-bg border-panel hover:border-secondary rounded-xl border-2 px-2 py-1 no-underline transition-all duration-200 ease-in"
								href="https://{project.repo}.commitsovercoffee.com">demo</a
							>
						{/if}

						<a
							target="_blank"
							class="not-prose text-highlight bg-bg border-panel hover:border-highlight rounded-xl border-2 px-2 py-1 no-underline transition-all duration-200 ease-in"
							href="https://github.com/commitsovercoffee/{project.repo}">source</a
						>
					</div>
					<div class="flex items-center gap-x-1">
						<CircleIcon size={16} class={project.color} />
						<span class="text-sm">{project.lang}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</article>
