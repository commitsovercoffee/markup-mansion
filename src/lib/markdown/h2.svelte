<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<h2 style:color={shades.highlight}>
	<slot />
</h2>
