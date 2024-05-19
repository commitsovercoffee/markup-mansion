<script>
	export let title = 'enter title here ...';
	export let lines = ['line 1 ... ', 'line 2 ...', 'line 3 ...'];
</script>

<div class="rounded-xl bg-[#202127] p-4">
	<p class="m-0 font-bold">{title}</p>
	<ul>
		{#each lines as line}
			<li>{line}</li>
		{/each}
	</ul>
</div>
