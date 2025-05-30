<script>
	let {
		rows = [
			['data', 'data', 'data'],
			['data', 'data', 'data']
		]
	} = $props();
</script>

{#each rows as row}
	<tr>
		{#each row as field}
			<td>{field}</td>
		{/each}
	</tr>
{/each}
