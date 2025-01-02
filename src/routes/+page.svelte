<script>
	import Hero from '$lib/components/Hero.svelte';
	import Thoughts from '$lib/components/Thoughts.svelte';
	import { selected, themes } from '$lib/theme.svelte';

	let over = $state('none');

	/**
	 * Handles hover events.
	 * @param {string} s
	 */
	function handleHover(s) {
		over = s;
	}
</script>

<Hero
	br={true}
	first="Hello Folks,"
	second="I am Sourav."
	desc="Welcome to my corner of the internet."
/>

<Thoughts />

<div class="grid grid-cols-1 gap-4 text-pretty break-words md:grid-cols-2">
	<article
		class="row-span-2 transition-all"
		onmouseover={() => handleHover('about')}
		onmouseleave={() => handleHover('none')}
		onfocus={() => {}}
		style:color={over === 'about' ? themes[selected].foreground : themes[selected].desc}
	>
		<span style:color={themes[selected].primary}>About Me</span>
		<p>
			I'm a software developer. I design and build things for the web. I’m based in Ranchi and work
			remotely as a consultant. 🤖
		</p>

		<p>
			I’m self-taught, learning mostly through a hands-on approach ~ building, breaking, and
			figuring things out as I go. ✨
		</p>

		<p>
			When I'm not working, I enjoy indulging in side projects, cycling on weekends, shooting hoops
			if the stars align, or occasionally getting caught up in some yak shaving. 🦬
		</p>
	</article>

	<article
		class="transition-all"
		onmouseover={() => handleHover('facts')}
		onmouseleave={() => handleHover('none')}
		onfocus={() => {}}
		style:color={over === 'facts' ? themes[selected].foreground : themes[selected].desc}
	>
		<span style:color={themes[selected].secondary}>Random Facts</span>

		<p>
			I rebuild this site when I'm bored. 🪇 <br />
			I am a proponent of minimalism. 💭 <br />
			I often travel for work. 🪐 <br />
			I use arch btw. 💾 <br />
		</p>
	</article>

	<article
		class="transition-all"
		onmouseover={() => handleHover('contact')}
		onmouseleave={() => handleHover('none')}
		onfocus={() => {}}
		style:color={over === 'contact' ? themes[selected].foreground : themes[selected].desc}
	>
		<span style:color={themes[selected].link}>Contact</span>

		<p>
			I go by @commitsovercoffee on the web. Have an idea, a project, or just want to say hi? Don’t
			hesitate to get in touch, even if it’s to point out a typo, I’m all ears! 🫂
		</p>
	</article>
</div>
