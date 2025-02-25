<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<code style:color={shades.secondary}>
	<slot />
</code>
