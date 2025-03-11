<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a class="no-underline" href="#{data?.innerText.replaceAll(' ', '-')}">
		<h1 bind:this={data} class="text-fg flex gap-2 font-light">
			<slot />
		</h1>
	</a>
</section>
