<script>
	import { elasticInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const thoughts = [
		'Welcome to my corner of the internet :P',
		'Yes. This is the nth version of this website.',
		'You look like you want to play dota with me.',
		'You smell funny. Do I know you?',
		'Do you know I have a Youtube channel?',
		'What is that smell? Did you leave the stove on?',
		'Are you having a bad day? Here, a virtual hug.',
		'Are you stalking me? Why not just reachout!',
		'What? You want to take me out for luch? Sure.',
		'Is it weird that you’re reading this and I know?',
		'Stop reading this. I can do this all day.',
		'I would like to be a pescatarian someday.',
		'stayin alive.. stayin alive.. oh oh oh yeah',
		'I have not watched game of thrones. Sue me.'
	];

	let i = $state(0);
	function cycleMessages() {
		i = i + 1 < thoughts.length ? i + 1 : 0;
	}
	setInterval(cycleMessages, 7500);
</script>

<div class="relative mt-4 min-h-16">
	{#key i}
		<p
			in:fly={{ duration: 1000, delay: 100, x: -100, easing: elasticInOut }}
			out:fly={{ duration: 1000, x: 100, easing: elasticInOut }}
			class="absolute my-auto mt-0 text-pretty break-words"
		>
			{thoughts[i]}
		</p>
	{/key}
</div>
