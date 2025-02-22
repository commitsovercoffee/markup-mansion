<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/writings">writings</a>
	<a href="/projects">projects</a>
</nav>

{@render children()}
