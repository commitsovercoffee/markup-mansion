<script>
	import { Quote } from 'lucide-svelte';
</script>

<blockquote class="border-body flex rounded-xl border-2 p-4">
	<Quote class="stroke-secondary fill-secondary mr-8" />
	<slot />
</blockquote>
