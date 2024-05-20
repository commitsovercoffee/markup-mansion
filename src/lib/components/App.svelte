<script>
	export let repo = 'repositoryName';
	export let title = 'Enter app name here';
	export let desc =
		'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
</script>

<div class="my-6 rounded-xl bg-[#32363f] flex justify-start items-start">
	<div class="rounded-lg m-4 p-4 hidden md:block">
		<slot />
	</div>
	<div class="m-4">
		<a
			href="https://github.com/commitsovercoffee/{repo}"
			class="prose-neutral prose-invert no-underline font-bold group transition-all duration-200"
		>
			{title}
			<span class="block max-w-4 group-hover:max-w-32 transition-all duration-500 h-0.5 bg-red-400"
			></span>
		</a>
		<p class="m-0 mt4 text-neutral-400">{desc}</p>
	</div>
</div>
