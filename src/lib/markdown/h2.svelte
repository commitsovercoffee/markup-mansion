<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a href="#{data?.innerText.replaceAll(' ', '-')}">
		<h2 bind:this={data}>
			<slot />
		</h2>
	</a>
</section>
