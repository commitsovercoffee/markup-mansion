<script>
	import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<article class="prose-a:text-anchor prose-a:underline-offset-4 prose-a:decoration-1">
	<Hero first="Hello Folks," second="I am Sourav." desc="Welcome to my corner of the internet." />

	<div class="grid grid-cols-1 gap-4 text-pretty md:grid-cols-2">
		<div class="row-span-2">
			<h2 class="text-secondary mt-0 font-medium">About</h2>

			<p>
				I'm a software developer. I design and build things for the web. I’m based in Ranchi, India
				& work remotely as a consultant. 💼
			</p>

			<p>
				I kicked off my career as a freelancer, working on a variety of projects, building frontend,
				microservices, middleware and dashboards. 🧑‍💻
			</p>
			<p>
				Currently, I work as a technical consultant at Quest Alliance, where I mostly focus on
				solutioning, development & support. 🎯
			</p>

			<p>
				When I’m off the clock, you’ll find me cycling, shooting hoops, reading, writing, or
				tinkering with side projects. ✨
			</p>
		</div>
		<div>
			<h2 class="text-tertiary mt-0 font-medium">Random Facts</h2>
			<p>
				Solo drives are my karaoke session. 🎤<br />
				I despise short-form content. 🤢<br />
				I prefer 🍤 over 🍗. Sue me ! <br />
				I make youtube videos. 🎬 <br />
				I journal in markdown. ✏️ <br />
				I use arch btw. 🍹 <br />
			</p>
		</div>
		<div>
			<h2 class="text-highlight mt-0 font-medium">Favorites</h2>
			<p>
				Book : Crime & Punishment. 🪓 <br />
				Game : God of War Ragnarok. 💥 <br />
				Movie : Mission Impossible. 🕵️‍♂️<br />
				TV Show : Modern Family. 🏡 <br />
				Food : Mutton Biryani. 🥩 <br />
			</p>
		</div>
	</div>
	<p>
		🫂 Feel free to reach out. You can text me on
		<a href="https://bsky.app/profile/commitsovercoffee.com">bsky </a> or shoot me a
		<a href="mailto:commitsovercoffee@gmail.com">mail</a>.
	</p>
</article>
