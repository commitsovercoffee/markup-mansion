<script>
	export let repo = 'repositoryName';
	export let title = 'Enter app name here';
	export let desc =
		'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
</script>

<div class="my-6 rounded-xl bg-[#202127] flex justify-center items-start">
	<div class="rounded-lg m-4 p-4 bg-[#1b1b1f] hidden md:block">
		<slot />
	</div>
	<div class="m-4">
		<a href="https://github.com/commitsovercoffee/{repo}" class="font-semibold">{title}</a>
		<p class="m-0 mt-2 leading-tight">{desc}</p>
	</div>
</div>
