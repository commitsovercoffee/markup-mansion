<script>
	export let title = 'enter title here ...';
	export let lines = ['line 1 ... ', 'line 2 ...', 'line 3 ...'];
</script>

<ul class="bg-secondary rounded-xl">
	<p>{title}</p>
	{#each lines as line}
		<li>{line}</li>
	{/each}
</ul>
