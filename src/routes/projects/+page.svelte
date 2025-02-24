<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];

	const projects = [
		{ repo: 'one', desc: 'one liner desc', demo: true },
		{ repo: 'one', desc: 'one liner desc', demo: true },
		{ repo: 'one', desc: 'one liner desc', demo: true },
		{ repo: 'one', desc: 'one liner desc', demo: true }
	];
</script>

<article>
	<h1 class="mb-0" style:color={shades.primary}>
		Side <div style:color={shades.foreground}>Projects</div>
	</h1>

	<p style:color={shades.highlight}>This is where the magic happens ... when it happens ...</p>

	<div class="grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
		{#each projects as project}
			<div
				class="project rounded-xl p-4 shadow-md"
				style:background-color={shades.panel}
				style:--normal-border={shades.panel}
				style:--hover-border={shades.secondary}
			>
				<dl>
					<dt class="font-bold">
						{project.repo}
					</dt>
					<dd>{project.desc}</dd>
				</dl>
				<div class="flex flex-row gap-2">
					<a
						style:color={shades.foreground}
						style:background-color={shades.background}
						style:--hover-link={shades.primary}
						class="rounded-xl px-4 no-underline"
						href="https://github.com/commitsovercoffee/{project.repo}">source</a
					>
					{#if project.demo}
						<a
							style:color={shades.foreground}
							style:background-color={shades.background}
							style:--hover-link={shades.link}
							class="rounded-xl px-4 no-underline"
							href="https://{project.repo}.commitsovercoffee.com">demo</a
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</article>

<style>
	.project {
		border: 3px solid var(--normal-border);
		transition: border-color 1s ease;
	}

	.project:hover {
		border: 3px solid var(--hover-border);
	}

	a {
		transition: box-shadow 0.5s ease;
	}

	a:hover {
		box-shadow: var(--hover-link) 0px 7px 29px 0px;
	}
</style>
