<script>
	import Banner from '$lib/components/Banner.svelte';

	const cardStyle = 'm-2 p-2 bg-secondary rounded-xl';
	const labelStyle = 'ml-8 text-accent';
</script>

<svelte:head>
	<title>Commits Over Coffee - Sourav's website</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<div class="flex flex-wrap-reverse justify-evenly items-center">
	<Banner highlight="Hello," title="I'm Sourav" desc="Welcome to my corner of the internet." />

	<img
		class="rounded-full border-8 border-white object-cover h-60 w-60"
		src="/profile.jpg"
		alt=""
	/>
</div>

<div class="grid grid-cols-1 md:grid-cols-2">
	<div class={cardStyle}>
		<p class={labelStyle}>who am I</p>
		<ul>
			<li>Self taught developer. 📚</li>
			<li>Weekend cyclist/gamer. 🕹️</li>
			<li>Everyday minimalist. ⚫</li>
		</ul>
	</div>

	<div class={cardStyle}>
		<p class={labelStyle}>what do I do</p>
		<ul>
			<li>Software Contracting. 💬</li>
			<li>Design/Development. 🎨</li>
			<li>Solutioning/Support. 🧩</li>
		</ul>
	</div>

	<div class={cardStyle}>
		<p class={labelStyle}>where am I</p>
		<ul>
			<li>Mostly Ranchi. 🍃</li>
			<li>Sometimes Bengaluru. 🧭</li>
			<li>Otherwise Neovim. 📍</li>
		</ul>
	</div>

	<div class={cardStyle}>
		<p class={labelStyle}>what's up ?</p>
		<ul>
			<li>Working in edtech. 📏</li>
			<li>Craving for biryani. 🍗</li>
			<li><a href=""></a> Yak shaving. 🦬</li>
		</ul>
	</div>
</div>
