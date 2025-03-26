<script>
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { Image } from '@unpic/svelte';

	let { game = 'Enter Title', dev = 'Enter Developer', review = 'lorem ipsum ...' } = $props();
</script>

<div class="not-prose my-6 flex flex-col gap-4 md:flex-row">
	<div class="flex-1">
		<Image
			src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
			layout="constrained"
			alt={game}
			class="shadow"
			width={200}
			height={300}
		/>
	</div>
	<dl class="flex-3">
		<dt class="text-primary mb-4 text-lg">{game} <em>by {dev}</em></dt>
		<dd class="text-base">
			{@render review()}
		</dd>
	</dl>
</div>
