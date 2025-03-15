<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a href="#{data?.innerText.replaceAll(' ', '-')}">
		<h1 bind:this={data}>
			<slot />
		</h1>
	</a>
</section>
