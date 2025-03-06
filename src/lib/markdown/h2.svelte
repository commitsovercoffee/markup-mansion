<script>
	import { HashIcon } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h2 bind:this={data} class="text-secondary flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<HashIcon strokeWidth="1.8" class="stroke-secondary" />
		</a>
		<slot />
	</h2>
</section>
