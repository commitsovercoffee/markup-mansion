<script>
	import { Heading1 } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h1 bind:this={data} class="text-primary flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<Heading1 class="stroke-body" />
		</a>
		<slot />
	</h1>
</section>
