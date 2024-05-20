<script>
	import { Flower, LayoutPanelTop, NotepadText, Radio } from 'lucide-svelte';
	import App from '$lib/components/App.svelte';
</script>

<h1>
	<span class="text-red-400">Use with caution</span> <br /> or maybe a snack.
</h1>

<App repo="minima-nvim" title="Minima Nvim" desc="my neovim config."
	><NotepadText size="64" strokeWidth={0.8} /></App
>
<App repo="suckless" title="suckless" desc="pre-patched suckless apps."
	><LayoutPanelTop size="64" strokeWidth={0.8} /></App
>
<App repo="hope" title="hope" desc="my arch installation script."
	><Flower size="64" strokeWidth={0.8} /></App
>
