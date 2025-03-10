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
				I'm an independent software developer based in Ranchi, India. 🌏 I primarily design and
				build things for the web. 💼
			</p>

			<p>
				Currently, I work at Quest Alliance as a consultant where I focus on solutioning,
				development and support. You can find my <a href="https://youtu.be/dQw4w9WgXcQ">resume</a>
				here. 🎯
			</p>

			<p>
				When I’m not glued to the screen, I’m usually cycling around town, shooting hoops 🏀 (if the
				stars align ✨ ), reading, <a href="/writings">writing</a> or tinkering with
				<a href="/projects">side projects</a>. 🪛
			</p>
			<p>
				What I'm upto <strong class="text-body">Now</strong> ?
			</p>
			<p>
				- Learning <a href="https://svelte.dev/">svelte</a>. 💖<br />
				- Convincing myself to do youtube. 🍰<br />
			</p>
		</div>
		<div>
			<h2 class="text-tertiary mt-0 font-medium">Random Facts</h2>
			<p>
				I work remotely from my batcave. 📍<br />
				I use fast silver switches on my keeb. 🪶<br />
				I prefer cargo pants over jeans. 🩳<br />
				I’m a connoisseur of obscure snacks. 🍕<br />
				I can quote The Office in my sleep. 💤<br />
				I despise short form content. 🚮<br />
				No. I can't fix your printer. 🖨️<br />
			</p>
		</div>
		<div>
			<h2 class="text-highlight mt-0 font-medium">Favorites</h2>
			<p>
				Book : Crime & Punishment. 🪓 <br />
				Game : God of War Ragnarok. 💥 <br />
				Movie : Mission Impossible. 🕵️‍♂️<br />
				Music : Classic/Psychedelic Rock <br />
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
