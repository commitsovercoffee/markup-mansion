<script>
	import { palette, theme } from '$lib/theme.svelte';
	const shades = palette[theme];
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<article style:color={shades.desc}>
	<div class="mb-16">
		<h1 class="mb-0" style:color={shades.primary}>
			Hello Folks, <div style:color={shades.foreground}>I am Sourav.</div>
		</h1>

		<p style:color={shades.desc}>Welcome to my corner of the internet.</p>
	</div>

	<div class="grid grid-cols-1 gap-4 text-pretty md:grid-cols-2">
		<div class="row-span-2">
			<h3 class="mt-0" style:color={shades.link}>About</h3>

			<p>
				I'm a software developer. I design and build things for the web. I’m based in Ranchi, India
				& work remotely as a consultant. 💼
			</p>

			<p>
				I kicked off my career as a freelancer, working on a variety of projects, building frontend,
				microservices, middleware and dashboards. ✨
			</p>
			<p>
				Currently, I work as a technical consultant at Quest Alliance, where I mostly focus on
				solutioning, development & support. 🎯
			</p>

			<p>
				When I’m off the clock, you’ll find me cycling, shooting hoops, reading, writing, or
				tinkering with side projects. 🧭
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
			<h3 class="mt-0" style:color={shades.highlight}>Favorites</h3>
			<p>
				Book : Crime & Punishment. 🪓 <br />
				Game : God of War Ragnarok. 💥 <br />
				Movie : Mission Impossible. 🕵️‍♂️<br />
				TV Show : Modern Family. 🏡 <br />
				Food : Mutton Biryani. 🥩 <br />
			</p>
		</div>
	</div>
	<p>Thanks for stopping by. Find me @commitsovercoffee on the web. 💬</p>
</article>
