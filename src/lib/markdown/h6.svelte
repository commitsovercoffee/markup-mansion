<script>
	import { HashIcon } from 'lucide-svelte';
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<h6 bind:this={data} class="text-body flex gap-2">
		<a class="not-prose" href="#{data?.innerText.replaceAll(' ', '-')}">
			<HashIcon strokeWidth="1.8" class="stroke-body" />
		</a>
		<slot />
	</h6>
</section>
