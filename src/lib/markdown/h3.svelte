<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a class="no-underline" href="#{data?.innerText.replaceAll(' ', '-')}">
		<h3 bind:this={data} class="text-fg flex gap-2 font-light">
			<slot />
		</h3>
	</a>
</section>
