<script>
	export let title = 'enter title here ...';
	export let lines = ['line 1 ... ', 'line 2 ...', 'line 3 ...'];
</script>

<div class="m-2 p-2 bg-secondary rounded-xl">
	<p class="ml-8">{title}</p>
	<ul>
		{#each lines as line}
			<li class="text-accent">{line}</li>
		{/each}
	</ul>
</div>
