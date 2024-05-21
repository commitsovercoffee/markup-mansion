<script>
	import { Flower, LayoutPanelTop, NotepadText } from 'lucide-svelte';
	import App from '$lib/components/App.svelte';
</script>

<svelte:head>
	<title>Apps - CommitsOverCoffee</title>
</svelte:head>

<h1 class="mb-0">
	<span class="text-red-400">Open Source</span> <br />Adventures.
</h1>
<p class="mt-0">Apps built with more coffee than sense.</p>

<div class="my-16">
	<App repo="minima-nvim" title="Minima Nvim" desc="my neovim config."
		><NotepadText size="64" strokeWidth={0.8} /></App
	>
	<App repo="suckless" title="suckless" desc="pre-patched suckless apps."
		><LayoutPanelTop size="64" strokeWidth={0.8} /></App
	>
	<App repo="hope" title="hope" desc="my arch installation script."
		><Flower size="64" strokeWidth={0.8} /></App
	>
</div>
