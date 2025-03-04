<script>
	import { Heading4 } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h4 bind:this={data} class="text-highlight flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<Heading4 class="stroke-body" />
		</a>
		<slot />
	</h4>
</section>
