<script>
	import { Heading3 } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h3 bind:this={data} class="text-tertiary flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<Heading3 class="stroke-body" />
		</a>
		<slot />
	</h3>
</section>
