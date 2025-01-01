<script>
	import { selected, themes } from '$lib/theme.svelte';
	import { elasticInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const thoughts = [
		"I’m currently building a website that doesn't need to exist.",
		'I told my friend I’d be right back. That was three Dota matches ago.',
		'I tried to gg to the top of a webpage and got frustrated when it didn’t work.',
		"You can tell a lot about a person by how they pronounce 'GIF'.",
		'You can keep your social life, I have a personal cloud server.',
		"I don't get road rage. I get ping spikes.",
		'My windows don’t even overlap. Not even for a second.'
	];

	let i = $state(0);
	function cycleMessages() {
		i = i + 1 < thoughts.length ? i + 1 : 0;
	}
	setInterval(cycleMessages, 7000);
</script>

{#key i}
	<p
		in:fly={{ duration: 1000, delay: 100, x: -100, easing: elasticInOut }}
		out:fly={{ duration: 1000, x: 100, easing: elasticInOut }}
		style:position="absolute"
		style:color={themes[selected].highlight}
		class="mt-0"
	>
		{thoughts[i]}
	</p>
{/key}
