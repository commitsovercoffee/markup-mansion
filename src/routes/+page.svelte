<script>
	import Info from '$lib/components/Info.svelte';
</script>

<svelte:head>
	<title>Commits Over Coffee - Sourav's website</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<div class="flex flex-wrap-reverse justify-evenly items-center">
	<div>
		<h1>
			<span class="text-primary">Hello,</span>
			<br /> I'm Sourav.
		</h1>
		<p class="italic">Welcome to my corner of the internet.</p>
	</div>

	<img
		class="rounded-full border-8 border-white object-cover h-60 w-60"
		src="https://picsum.photos/192"
		alt=""
	/>
</div>

<div class="my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
	<Info
		title="Who am I ?"
		lines={['Self taught developer. 📚', 'Weekend cyclist/gamer. 🕹️', 'Everyday minimalist. ⚫']}
	/>

	<Info
		title="What do I do ..."
		lines={['Software Contracting. 💬', 'Design/Development. 🎨', 'Solutioning/Support. 🧩']}
	/>

	<Info
		title="Where am I ?"
		lines={['Mostly Ranchi. 🍃', 'Sometimes Bengaluru. 🧭', 'Otherwise Neovim. 📍']}
	/>

	<Info
		title="What's up ?"
		lines={['Working in edtech. 📏', 'Craving for biryani. 🍗', 'Yak shaving. 🦬']}
	/>
</div>
