<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a href="#{data?.innerText.replaceAll(' ', '-')}">
		<h5 bind:this={data}>
			<slot />
		</h5>
	</a>
</section>
