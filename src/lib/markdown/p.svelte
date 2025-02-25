<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<p style:color={shades.desc}>
	<slot />
</p>
