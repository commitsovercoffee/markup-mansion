<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];

	const projects = [
		{
			repo: 'Hope',
			desc: 'My arch linux installation script ~ for super human productivity. ',
			demo: true
		},
		{ repo: 'Billie', desc: 'Billie ~ To create your bills & invoices.', demo: true },
		{ repo: 'jason', desc: 'json goes in, resume comes out.', demo: true },
		{ repo: 'one', desc: 'one liner desc', demo: true }
	];
</script>

<svelte:head>
	<title>Projects - Commits Over Coffee</title>
	<meta name="description" content="Projects - what I've built, learned and tinkered with." />
</svelte:head>

<article>
	<div class="mb-16">
		<h1 class="mb-0" style:color={shades.primary}>
			Side <div style:color={shades.foreground}>Projects</div>
		</h1>

		<p style:color={shades.desc}>This is where the magic happens ... when it happens ...</p>
	</div>

	<div class="grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
		{#each projects as project}
			<div
				class="flex flex-col justify-between gap-4 rounded-lg p-4"
				style:background-color={shades.panel}
				style:--normal-border={shades.panel}
				style:--hover-border={shades.foreground}
			>
				<dl class="not-prose">
					<dt style:color={shades.foreground} class="mt-4 mb-2 font-bold">
						{project.repo}
					</dt>
					<dd style:color={shades.desc}>{project.desc}</dd>
				</dl>
				<div class="flex flex-row gap-2">
					{#if project.demo}
						<a
							style:color={shades.background}
							style:background-color={shades.foreground}
							class="rounded-xl px-2 py-1 no-underline"
							href="https://{project.repo}.commitsovercoffee.com">demo</a
						>
					{/if}

					<a
						style:color={shades.foreground}
						style:background-color={shades.background}
						class="rounded-xl px-2 py-1 no-underline transition-all"
						href="https://github.com/commitsovercoffee/{project.repo}">source</a
					>
				</div>
			</div>
		{/each}
	</div>
</article>
