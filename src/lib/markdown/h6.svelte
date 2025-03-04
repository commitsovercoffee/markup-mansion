<script>
	import { Heading6 } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h6 bind:this={data} class="text-body flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<Heading6 class="stroke-body" />
		</a>
		<slot />
	</h6>
</section>
