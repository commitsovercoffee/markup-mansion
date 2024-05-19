<script>
	import { Command, AudioWaveform, Radio } from 'lucide-svelte';
	import App from '$lib/components/App.svelte';
</script>

<h1>
	<span class="text-red-400">Use with caution</span> <br /> or maybe a snack.
</h1>

<App><Command size="64" /></App>
<App><AudioWaveform size="64" /></App>
<App><Radio size="64" /></App>
