<script>
	export let title = 'enter title here ...';
	export let lines = ['line 1 ... ', 'line 2 ...', 'line 3 ...'];
</script>

<div class="rounded-xl bg-[#202127] p-4">
	<h3 class="mt-0 text-[#32363f]">{title}</h3>
	<ul>
		{#each lines as line}
			<li>{line}</li>
		{/each}
	</ul>
</div>
