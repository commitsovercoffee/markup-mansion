<script>
	import Hero from '$lib/components/Hero.svelte';
	import { selected, themes } from '$lib/theme.svelte';

	const projects = [
		{ name: 'project-name', desc: 'one liner desc of the project.', demo: true },
		{ name: 'project-name', desc: 'one liner desc of the project.', demo: true },
		{ name: 'project-name', desc: 'one liner desc of the project.', demo: true },
		{ name: 'project-name', desc: 'one liner desc of the project.', demo: true }
	];
</script>

<Hero first="Side" second="Projects" desc="It works on my machine !" />

<div class=" grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
	{#each projects as project}
		<article
			class="flex flex-col items-start justify-start rounded-xl p-4 shadow-md"
			style:background-color={themes[selected].panel}
			style:--border-base={themes[selected].panel}
			style:--border-decor={themes[selected].secondary}
		>
			<h4 style:color={themes[selected].highlight} class="m0">{project.name}</h4>
			<p>{project.desc}</p>
			<div class="flex flex-row gap-2">
				<a
					style:background-color={themes[selected].background}
					style:color={themes[selected].foreground}
					style:--shadow-decor={themes[selected].link}
					class="rounded-lg px-2 py-1 no-underline"
					href="https:github.com/commitsovercoffee/{project.name}">source</a
				>
				{#if project.demo}
					<a
						style:background-color={themes[selected].background}
						style:color={themes[selected].foreground}
						style:--shadow-decor={themes[selected].primary}
						class="rounded-lg px-2 py-1 no-underline"
						href="https:{project.name}.commitsovercoffee.com">demo</a
					>
				{/if}
			</div>
		</article>
	{/each}
</div>

<style>
	article {
		border: 3px solid var(--border-base);
		transition: border-color 1s ease;
	}

	article:hover {
		border: 3px solid var(--border-decor);
	}

	a {
		transition: box-shadow 0.5s ease;
	}

	a:hover {
		box-shadow: var(--shadow-decor) 0px 7px 29px 0px;
	}
</style>
