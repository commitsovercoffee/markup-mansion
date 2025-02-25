<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<strong style:color={shades.desc}>
	<slot />
</strong>
