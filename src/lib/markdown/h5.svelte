<script>
	import { Heading5 } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h5 bind:this={data} class="text-fg flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<Heading5 class="stroke-body" />
		</a>
		<slot />
	</h5>
</section>
