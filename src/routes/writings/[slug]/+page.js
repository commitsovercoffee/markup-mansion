export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	return {
		title: post.metadata.title,
		desc: post.metadata.desc,
		date: post.metadata.date,
		content: post.default
	};
}
