<script>
	import Banner from '$lib/components/Banner.svelte';

	const cardStyle = 'm-2 p-2 bg-secondary rounded-xl bg-[#fcdabd]';
	const labelStyle = 'ml-8 text-accent text-background';

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';

	onMount(() => {
		setTimeout(() => {
			$appState.homeTransition = true;
		}, 500);
	});
</script>

<svelte:head>
	<title>Commits Over Coffee - Sourav's website</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

{#if $appState.homeTransition}
	<div class="flex flex-col-reverse md:flex-row">
		<div>
			<Banner highlight="Hello," title="I'm Sourav" desc="Welcome to my corner of the internet." />

			<p>
				I'm a software developer & educator with a desire to build open source edtech tools. My
				latest project is a <a
					target="_blank"
					class="text-primary underline-offset-4"
					href="https://jason.commitsovercoffee.com">resume builder</a
				>, a simple and clean resume builder.
			</p>
			<p>
				You can find me (almost) anywhere with my handle <span class="text-primary"
					>@commitsovercoffee</span
				>.
			</p>
			<a href="mailto:commitsovercoffee@gmail.com">
				<button
					class="hover:scale-110 active:scale-90 transition-all duration-100 ease-in-out bg-primary px-4 py-2 rounded-full shadow text-background"
					>Get in touch !</button
				>
			</a>
		</div>
		<img
			transition:fly={{ y: -20, delay: $appState.edgeDelay, duration: 1500, easing: quintOut }}
			class="m-0 mx-8 my-8 md:my-0 rounded-full object-cover h-48 w-48"
			src="/profile.webp"
			alt=""
		/>
	</div>
	<hr />
	<h2>Highlights</h2>

	<div class="grid grid-cols-1 md:grid-cols-2">
		<ul class="">
			<span class="text-primary">Who am I</span>
			<li>Self taught developer</li>
			<li>Weekend cyclist/gamer</li>
			<li>Everyday minimalist</li>
		</ul>

		<ul class="">
			<span class="text-primary">Where am I</span>
			<li>Mostly Ranchi</li>
			<li>Sometimes Bangalore</li>
			<li>Otherwise</li>
		</ul>
		<ul class="">
			<span class="text-primary">What do I do ?</span>
			<li>Software Contracting</li>
			<li>Design/Development</li>
			<li>Solutioning/Support</li>
		</ul>
		<ul class="">
			<span class="text-primary">What's up ?</span>
			<li>Working in edtech</li>
			<li>Craving for biryani</li>
			<li>Yak shaving</li>
		</ul>
	</div>

	<hr />

	<h2>Open Invitation</h2>

	<p>
		If you're here, you probably know me. And at this point maybe wondering, yeah fancy website but
		is that it ? Nope. There is more, This website is my dumping ground for all my thoughts shared
		as writings. I also have some projects you may find interesting.
	</p>
	<p>Feel free to reach out for collaboration, conversation or to report errata :p</p>
{/if}
