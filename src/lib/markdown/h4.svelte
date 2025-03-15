<script>
	let data;
</script>

<section id={data?.innerText.replaceAll(' ', '-')}>
	<a href="#{data?.innerText.replaceAll(' ', '-')}">
		<h4 bind:this={data}>
			<slot />
		</h4>
	</a>
</section>
