// we’ve got a posts being passed to the component (as "data"), and we can use
// it to loop over and render posts in the corresponding +page.svelte file.

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};
