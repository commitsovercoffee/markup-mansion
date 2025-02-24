<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<article style:--normal-para={shades.desc} style:--hover-para={shades.foreground}>
	<h1 class="mb-0" style:color={shades.primary}>
		Hello Folks, <div style:color={shades.foreground}>I am Sourav.</div>
	</h1>

	<p style:color={shades.highlight}>Website under construction, please pardon the digital dust!</p>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="row-span-2">
			<h3 style:color={shades.primary}>Heading</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic illo quos, libero
				voluptatibus quam odio!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, enim? Omnis, dicta!
				Dolor repellendus aut facere cum porro! Impedit assumenda dolorum voluptates laboriosam,
				tenetur totam omnis aperiam dolorem vitae ut.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic illo quos, libero
				voluptatibus quam odio! Aut repellendus rem doloribus dicta soluta doloremque, alias illo
				eveniet quae, necessitatibus atque maxime.
			</p>
		</div>
		<div>
			<h3 style:color={shades.secondary}>Heading</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic illo quos, libero
				voluptatibus quam odio! Aut repellendus rem doloribus dicta soluta doloremque, alias illo
				eveniet quae, necessitatibus atque maxime.
			</p>
		</div>
		<div>
			<h3 style:color={shades.link}>Heading</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic illo quos, libero
				voluptatibus quam odio! Aut repellendus rem doloribus dicta soluta doloremque, alias illo
				eveniet quae, necessitatibus atque maxime.
			</p>
		</div>
	</div>
</article>

<style>
	p {
		color: var(--normal-para);
		transition: color 0.3s ease;
	}

	p:hover {
		color: var(--hover-para);
	}
</style>
