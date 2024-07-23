<script>
	export let repo = 'Insert repo name here.';
	export let desc = '';
	export let thumbnail = 'https://picsum.photos/240';
	export let alt = 'screenshot of project ';
</script>

<div class="m-2 flex flex-col gap-0 shadow bg-secondary rounded-xl">
	<img class="m-2 h-60 rounded-lg object-cover" src={thumbnail} alt={alt + repo} />
	<p>{desc}</p>
	<p class="m-0 px-4 py-2 text-accent">{repo}</p>
</div>
