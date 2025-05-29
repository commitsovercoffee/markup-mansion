<script>
	import { elasticInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const thoughts = [
		'Welcome to my corner of the internet :P',
		'Ofcourse this is the nth version of this website.',
		'Can you guess what 5 times F is? Its Fleventy Five.',
		'You look like you want to play dota with me.'
	];

	let i = $state(0);
	function cycleMessages() {
		i = i + 1 < thoughts.length ? i + 1 : 0;
	}
	setInterval(cycleMessages, 5000);
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
