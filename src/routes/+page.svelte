<script>
	import Banner from '$lib/components/Banner.svelte';

	const cardStyle = 'm-2 p-2 bg-secondary rounded-xl';
	const labelStyle = 'ml-8 text-accent';

	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';

	onMount(() => {
		setTimeout(() => {
			$appState.homeTransition = true;
			$appState.edgeTransition = true;
		}, 1000);
	});
</script>

<svelte:head>
	<title>Commits Over Coffee - Sourav's website</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

{#if $appState.homeTransition}
	<div class="flex flex-wrap-reverse justify-evenly items-center">
		<Banner highlight="Hello," title="I'm Sourav" desc="Welcome to my corner of the internet." />

		<img
			transition:fly={{ y: -20, delay: 1500, duration: 1500, easing: quintOut }}
			class="rounded-full border-8 border-white object-cover h-60 w-60"
			src="/profile.jpg"
			alt=""
		/>
	</div>
{/if}

{#if $appState.homeTransition}
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div
			transition:fly={{ delay: 2000, x: -20, y: -20, duration: 1500, easing: quintOut }}
			class={cardStyle}
		>
			<p class={labelStyle}>who am I</p>
			<ul>
				<li>Self taught developer. 📚</li>
				<li>Weekend cyclist/gamer. 🕹️</li>
				<li>Everyday minimalist. ⚫</li>
			</ul>
		</div>

		<div
			transition:fly={{ delay: 3000, x: 20, y: -20, duration: 1500, easing: quintOut }}
			class={cardStyle}
		>
			<p class={labelStyle}>what do I do</p>
			<ul>
				<li>Software Contracting. 💬</li>
				<li>Design/Development. 🎨</li>
				<li>Solutioning/Support. 🧩</li>
			</ul>
		</div>

		<div
			transition:fly={{ delay: 4000, x: -20, y: 20, duration: 1500, easing: quintOut }}
			class={cardStyle}
		>
			<p class={labelStyle}>where am I</p>
			<ul>
				<li>Mostly Ranchi. 🍃</li>
				<li>Sometimes Bengaluru. 🧭</li>
				<li>Otherwise Neovim. 📍</li>
			</ul>
		</div>

		<div
			transition:fly={{ delay: 5000, x: 20, y: 20, duration: 1500, easing: quintOut }}
			class={cardStyle}
		>
			<p class={labelStyle}>what's up ?</p>
			<ul>
				<li>Working in edtech. 📏</li>
				<li>Craving for biryani. 🍗</li>
				<li>Yak shaving. 🦬</li>
			</ul>
		</div>
	</div>
{/if}
