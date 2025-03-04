<script>
	import { Heading2 } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h2 bind:this={data} class="text-secondary flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<Heading2 class="stroke-body" />
		</a>
		<slot />
	</h2>
</section>
