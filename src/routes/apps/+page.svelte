<script>
	import Banner from '$lib/components/Banner.svelte';

	const apps = [
		{
			repo: 'Billie',
			desc: 'Invoice Generator',
			logo: 'billie.png'
		},
		{
			repo: 'Jason',
			desc: 'Resume Builder',
			logo: 'jason.png'
		},
		{
			repo: 'Hope',
			desc: 'Arch Installation Script',
			logo: 'hope.png'
		},
		{
			repo: 'Markup Mansion',
			desc: 'Source of this website',
			logo: 'markup-mansion.png'
		}
	];
</script>

<svelte:head>
	<title>Apps - CommitsOverCoffee</title>
	<meta
		name="description"
		content="See what Sourav builds! Check out his latest projects and apps."
	/>
</svelte:head>

<Banner
	highlight="My"
	title="Projects"
	desc="All these projects are open source, no sign-ups, no telemetry. Free forever. If you like what I'm doing, consider tossing a donation my way."
/>

<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each apps as app}
		<div
			class="p-1 hover:border-primary hover:shadow-primary border-2 border-secondary flex flex-row justify-start items-center bg-secondary rounded-xl no-underline transition-all duration-200 ease-in"
		>
			<img class="m-2 h-24" src={app.logo} alt="{app.repo} logo" />
			<div class="m-2">
				<p class="m-0">
					<span class="text-xl font-bold">{app.repo}</span>
					<br />{app.desc}
				</p>
				<div class="m-1 flex flex-row gap-x-4">
					<a
						target="_blank"
						class="no-underline rounded-xl bg-background hover:bg-primary hover:text-secondary px-2"
						href="https://github.com/commitsovercoffee/{app.repo}">source</a
					>
					<a
						target="_blank"
						class="no-underline rounded-xl bg-background hover:bg-primary hover:text-secondary px-2"
						href="https://{app.repo}.commitsovercoffee.com">demo</a
					>
				</div>
			</div>
		</div>
	{/each}
</div>
