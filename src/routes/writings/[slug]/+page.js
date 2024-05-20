// SvelteKit's router searches for a +page.js file when loading a route.
// If found, it runs a server-side load function in +page.js, passing the returned
// data to the +page.svelte template for rendering.

export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata; // .metadata contains all the post’s frontmatter props
	const content = post.default; // .default contains the content itself.

	return {
		content,
		title,
		date
	};
}
