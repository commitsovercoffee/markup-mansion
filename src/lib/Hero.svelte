<script>
	let { first, second, desc } = $props();
</script>

<div class="mb-12">
	<h1 class="text-primary mb-0 font-medium">
		{first}
	</h1>
	{#if second != ''}
		<h1 class="text-fg mb-0 font-medium">
			{second}
		</h1>
	{/if}
	<p>{desc}</p>
</div>
