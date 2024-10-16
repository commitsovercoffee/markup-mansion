<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { appState } from '$lib/stores';

	export let highlight = 'Insert keyword here.';
	export let title = 'Insert title here.';
	export let desc = 'Insert description here.';
</script>

<div
	class="flex-grow"
	transition:fly={{ y: -20, delay: $appState.edgeDelay, duration: 1500, easing: quintOut }}
>
	<h1 class="mb-0 text-pretty">
		<span class="text-primary">
			{highlight}
		</span>
		{title}
	</h1>
	<p>{desc}</p>
</div>
