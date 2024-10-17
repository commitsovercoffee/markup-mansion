<script>
	export let highlight = 'Insert keyword here.';
	export let title = 'Insert title here.';
	export let desc = 'Insert description here.';
</script>

<div class="flex-grow">
	<h1 class="mb-0 text-pretty">
		<span class="text-primary">
			{highlight}
		</span>
		{title}
	</h1>
	{#if desc != null}
		<p>{desc}</p>
	{/if}
</div>
