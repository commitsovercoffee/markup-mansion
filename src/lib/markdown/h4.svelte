<script>
	import { HashIcon } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h4 bind:this={data} class="text-highlight flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<HashIcon strokeWidth="1.8" class="stroke-highlight" />
		</a>
		<slot />
	</h4>
</section>
