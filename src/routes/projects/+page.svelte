<script>
	import { Anchor, BookMarkedIcon, CircleIcon } from 'lucide-svelte';

	const projects = [
		{
			repo: 'Billie',
			desc: 'Billie ~ To create your bills & invoices.',
			demo: true,
			lang: 'Svelte',
			color: 'stroke-[#ff3e00] fill-[#ff3e00]'
		},
		{
			repo: 'Billie',
			desc: 'Billie ~ To create your bills & invoices.',
			demo: true,
			lang: 'Svelte',
			color: 'stroke-[#ff3e00] fill-[#ff3e00]'
		}
	];
</script>

<svelte:head>
	<title>Projects - Commits Over Coffee</title>
	<meta name="description" content="Projects - what I've built, learned and tinkered with." />
</svelte:head>

<article>
	<div class="mb-16">
		<h1 class="text-primary mb-0">
			Maker's
			<div class="text-fg">Sanctuary</div>
		</h1>

		<p>... built one project at a time.</p>
	</div>

	<div class="grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
		{#each projects as project}
			<div
				class="bg-panel flex flex-col justify-between gap-4 rounded-xl p-4 transition-all duration-200 ease-out"
			>
				<dl class="not-prose">
					<dt class="textprimary mt-4 mb-2 flex gap-x-2 font-bold">
						<a class="text-anchor flex items-center gap-x-1 decoration-1 hover:underline" href="">
							<span>
								{project.repo}
							</span>
						</a>
					</dt>
					<dd class="text-fg">{project.desc}</dd>
				</dl>
				<div class="flex items-center justify-between">
					<div class="flex flex-row gap-2">
						{#if project.demo}
							<a
								class="text-secondary bg-bg border-panel hover:border-secondary rounded-xl border-2 px-2 py-1 no-underline transition-all duration-200 ease-in"
								href="https://{project.repo}.commitsovercoffee.com">demo</a
							>
						{/if}

						<a
							class="text-highlight bg-bg border-panel hover:border-highlight rounded-xl border-2 px-2 py-1 no-underline transition-all duration-200 ease-in"
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
