<script>
	const projects = [
		{ repo: 'Billie', desc: 'Billie ~ To create your bills & invoices.', demo: true },
		{ repo: 'jason', desc: 'json goes in, resume comes out.', demo: true },
		{ repo: 'one', desc: 'one liner desc', demo: true },
		{
			repo: 'Hope',
			desc: 'arch script.',
			demo: true
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
				class="group bg-panel hover:bg-fg flex flex-col justify-between gap-4 rounded-lg p-4 transition-all duration-200 ease-out"
			>
				<dl class="not-prose">
					<dt class="text-fg group-hover:text-bg mt-4 mb-2 font-bold">
						{project.repo}
					</dt>
					<dd class="text-body group-hover:text-bg">{project.desc}</dd>
				</dl>
				<div class="flex flex-row gap-2">
					{#if project.demo}
						<a
							class="text-bg bg-fg rounded-xl px-2 py-1 no-underline"
							href="https://{project.repo}.commitsovercoffee.com">demo</a
						>
					{/if}

					<a
						class="text-fg bg-bg rounded-xl px-2 py-1 no-underline transition-all"
						href="https://github.com/commitsovercoffee/{project.repo}">source</a
					>
				</div>
			</div>
		{/each}
	</div>
</article>
