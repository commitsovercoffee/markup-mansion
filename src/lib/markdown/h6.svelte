<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a href="#{data?.innerText.replaceAll(' ', '-')}">
		<h6 bind:this={data}>
			<slot />
		</h6>
	</a>
</section>
