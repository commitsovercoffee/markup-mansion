<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a href="#{data?.innerText.replaceAll(' ', '-')}">
		<h3 bind:this={data}>
			<slot />
		</h3>
	</a>
</section>
