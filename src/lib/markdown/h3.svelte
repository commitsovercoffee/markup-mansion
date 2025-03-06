<script>
	import { HashIcon } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h3 bind:this={data} class="text-tertiary flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<HashIcon strokeWidth="1.8" class="stroke-tertiary" />
		</a>
		<slot />
	</h3>
</section>
