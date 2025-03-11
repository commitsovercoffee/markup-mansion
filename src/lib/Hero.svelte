<script>
	let { first, second, desc } = $props();
</script>

<div class="md:mb-12">
	<h1 class="text-primary mb-0">
		{first}
	</h1>
	{#if second != ''}
		<h1 class="text-fg mb-0">
			{second}
		</h1>
	{/if}
	<p>{desc}</p>
</div>
