import { json } from '@sveltejs/kit';
export const prerender = true;

async function fetchMarkdownPosts() {
	const allPostFiles = import.meta.glob('/src/routes/writings/*.md'); // vite function
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3); // Remove '/src/routes' and '.md' parts of path

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
}

export async function GET() {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = new Date(a.meta.date);
		const dateB = new Date(b.meta.date);
		return dateB - dateA;
	});

	return json(sortedPosts);
}
