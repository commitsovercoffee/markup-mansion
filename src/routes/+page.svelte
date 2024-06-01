<script>
	import Info from '$lib/components/Info.svelte';
</script>

<svelte:head>
	<title>CommitsOverCoffee - Sourav's website</title>
	<meta name="description" content="Personal website of Sourav Singh ~ Developer/Designer." />
</svelte:head>

<div class="flex flex-wrap-reverse justify-center items-center">
	<div>
		<h1 class="mb-0">
			<span class="text-red-400">Hello,</span> <br />I'm Sourav.
		</h1>
		<p class="mt-0">Welcome to my corner of the internet.</p>
	</div>
	<img
		class="m-0 rounded-full m-16 object-cover border-8 border-white"
		src="https://picsum.photos/200"
		alt=""
	/>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
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
