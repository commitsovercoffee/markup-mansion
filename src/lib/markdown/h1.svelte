<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<h1 style:color={shades.secondary}>
	<slot />
</h1>
