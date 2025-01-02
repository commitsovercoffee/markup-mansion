<script>
	import { selected, themes } from '$lib/theme.svelte';

	let {
		first = 'First Line',
		second = '', // (Optional) Second Line
		desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus recusandae delectus nobis odit natus quod, assumenda, neque quo cum quae sint iste veritatis officia ullam repudiandae accusamus reprehenderit fugit.',
		br = false
	} = $props();
</script>

<h1 class="my-0" style:color={themes[selected].primary}>
	{first}
	{#if br}
		<br />
	{/if}
	{#if second != ''}
		<span style:color={themes[selected].foreground}>{second} </span>
	{/if}
</h1>
<p style:color={themes[selected].desc}>
	{desc}
</p>
