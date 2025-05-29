<script>
	let { first, second, desc } = $props();
</script>

<div class="md:mb-12">
	<h1 class="text-primary mb-0">
		{first}
		{#if second != ''}
			<span class="text-fg">{second}</span>
		{/if}
	</h1>
	<p>{desc}</p>
</div>
