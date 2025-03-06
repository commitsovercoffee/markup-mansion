<script>
	import { HashIcon } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h5 bind:this={data} class="text-fg flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<HashIcon strokeWidth="1.8" class="stroke-fg" />
		</a>
		<slot />
	</h5>
</section>
