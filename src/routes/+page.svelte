<script>
	import Info from '$lib/components/Info.svelte';
</script>

<h1>
	<span class="text-red-400">Yet another</span> <br /> personal website.
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<Info
		title="Who am I"
		lines={['Self taught developer. 📚', 'Weekend cyclist/gamer. 🕹️', 'Everyday minimalist. ⚫']}
	/>

	<Info
		title="What do I do ..."
		lines={['Software Contracting. 💬', 'Design/Development. 🎨', 'Solutioning/Support. 🧩']}
	/>

	<Info
		title="Where am I"
		lines={['Mostly Ranchi. 🍃', 'Sometimes Bengaluru. 🧭', 'Otherwise Neovim. 📍']}
	/>

	<Info
		title="What's up ?"
		lines={['Working in edtech. 📏', 'Craving for biryani. 🍗', 'Yak shaving. 🦬']}
	/>
</div>

<h2>What next ?</h2>
<ul>
	<li>
		You can checkout my <a href="/writings">writings</a> or <a href="/apps">apps</a> I've built.
	</li>
	<li>Feel free to reach out.</li>
</ul>
