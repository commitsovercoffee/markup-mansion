<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<article style:--normal-para={shades.desc} style:--hover-para={shades.foreground}>
	<div class="mb-16">
		<h1 class="mb-0" style:color={shades.primary}>
			Hello Folks, <div style:color={shades.foreground}>I am Sourav.</div>
		</h1>

		<p style:color={shades.highlight}>Welcome to my corner of the internet.</p>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="row-span-2">
			<h3 class="mt-0" style:color={shades.primary}>About</h3>
			<p>
				I'm a software developer. I design and build things for the web. I’m based in Ranchi and
				work remotely as a consultant. 💼
			</p>

			<p>
				I’m self-taught, learning mostly through a hands-on approach ~ building, breaking, and
				figuring things out as I go. ✨
			</p>

			<p>
				When I’m off the clock, you’ll find me cycling, shooting hoops, reading, writing, or
				tinkering with side projects. 🧲
			</p>

			<p>
				You can find me across the internet by the user name @commitsovercoffee. And reach out
				either on blusky or shoot me a mail at commitsovercoffee@gmail.com. 💬
			</p>
		</div>
		<div>
			<h3 class="mt-0" style:color={shades.secondary}>Random Facts</h3>
			<p>
				I frown without dynamic window tiling. 😦 <br />
				Bad carries cost me games in Dota 2. ⚔️ <br />
				I am learning svelte & loving it. 💖<br />
				I make youtube videos. 🎬 <br />
				I prefer 🦐 over 🐓. Sue me! <br />
				I journal in markdown. ✏️ <br />
				I use arch btw. 🍹 <br />
			</p>
		</div>
		<div>
			<h3 class="mt-0" style:color={shades.link}>Favorites</h3>
			<p>
				Book : Crime & Punishment. 🪓 <br />
				Game : God of War Ragnarok. 💥 <br />
				Movie : Mission Impossible. 🕵️‍♂️<br />
				TV Show : Modern Family. 🏡 <br />
				Food : Mutton Biryani. 🥩 <br />
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

	a {
		color: var(--normal-para);
		transition: color 0.3s ease;
	}

	a:hover {
		color: var(--hover-para);
	}
</style>
