<script>
	import Hero from '$lib/Hero.svelte';
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<div>
	<!--

     /$$   /$$
    | $$  | $$
    | $$  | $$  /$$$$$$   /$$$$$$   /$$$$$$
    | $$$$$$$$ /$$__  $$ /$$__  $$ /$$__  $$
    | $$__  $$| $$$$$$$$| $$  \__/| $$  \ $$
    | $$  | $$| $$_____/| $$      | $$  | $$
    | $$  | $$|  $$$$$$$| $$      |  $$$$$$/
    |__/  |__/ \_______/|__/       \______/

 -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="order-2 md:order-1">
			<Hero
				first="Hello Folks,"
				second="I am Sourav."
				desc="Welcome to my corner of the internet. I'm glad you're here. Would you like some tea? "
			/>
		</div>
		<div class="order-1 md:order-2">
			<img
				src="profile.webp"
				class="not-prose border-fg border4 h-48 w-48 rounded-full object-cover"
				alt=""
			/>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-2">
		<div class="row-span-2">
			<h2 class="text-secondary mt-0">About</h2>
			<!--

  /$$$$$$  /$$                             /$$
 /$$__  $$| $$                            | $$
| $$  \ $$| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
| $$$$$$$$| $$__  $$ /$$__  $$| $$  | $$|_  $$_/
| $$__  $$| $$  \ $$| $$  \ $$| $$  | $$  | $$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$  | $$ /$$
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/  |  $$$$/
|__/  |__/|_______/  \______/  \______/    \___/

-->
			<p>
				I'm an independent software developer based in Ranchi, India. 🌏 I primarily design and
				build things for the web. 💼
			</p>

			<p>
				Currently, I work at Quest Alliance as a consultant where I focus on solutioning,
				development and support. You can find my <a
					target="_blank"
					href="https://youtu.be/dQw4w9WgXcQ">resume</a
				>
				here. 🎯
			</p>

			<p>
				When I’m not glued to the screen, I’m usually cycling around town, shooting hoops 🏀 (if the
				stars align ✨ ), reading, <a href="/writings">writing</a> or tinkering with
				<a href="/projects">side projects</a>. 🪛
			</p>

			<p>
				What I'm up to <strong class="text-body">Now</strong> ?
			</p>

			<p>
				- Learning <a target="_blank" href="https://svelte.dev/">svelte</a>. 💖<br />
				- Exploring content creation. 🍿<br />
			</p>
		</div>
		<!--

 /$$$$$$$$                   /$$
| $$_____/                  | $$
| $$    /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$
| $$$$$|____  $$ /$$_____/|_  $$_/  /$$_____/
| $$__/ /$$$$$$$| $$        | $$   |  $$$$$$
| $$   /$$__  $$| $$        | $$ /$$\____  $$
| $$  |  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/
|__/   \_______/ \_______/   \___/ |_______/

-->
		<div>
			<h2 class="text-tertiary mt-0">Random Facts</h2>
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
		<!--

 /$$$$$$$$                                /$$  /$$
| $$_____/                               |__/ | $$
| $$   /$$$$$$ /$$    /$$/$$$$$$  /$$$$$$ /$$/$$$$$$   /$$$$$$  /$$$$$$$
| $$$$|____  $|  $$  /$$/$$__  $$/$$__  $| $|_  $$_/  /$$__  $$/$$_____/
| $$__//$$$$$$$\  $$/$$| $$  \ $| $$  \__| $$ | $$   | $$$$$$$|  $$$$$$
| $$  /$$__  $$ \  $$$/| $$  | $| $$     | $$ | $$ /$| $$_____/\____  $$
| $$ |  $$$$$$$  \  $/ |  $$$$$$| $$     | $$ |  $$$$|  $$$$$$$/$$$$$$$/
|__/  \_______/   \_/   \______/|__/     |__/  \___/  \_______|_______/

-->
		<div>
			<h2 class="text-highlight mt-0">Favorites</h2>
			<p>
				Book : Crime & Punishment. 🪓 <br />
				Game : God of War Ragnarok. ❄️<br />
				Movie : Mission Impossible. ⌚<br />
				Music : Rock/Alternative. 🥁<br />
				TV Show : The Office. 🏆 <br />
				Food : Mutton Biryani. 🥩 <br />
			</p>
		</div>
	</div>
	<p class="mt-0">
		🫂 Feel free to reach out. You can text me on
		<a href="https://bsky.app/profile/commitsovercoffee.com">bluesky</a> or shoot me a
		<a href="mailto:commitsovercoffee@gmail.com">mail</a>.
	</p>
</div>
