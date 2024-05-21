import { fetchMarkdownPosts } from '$lib/utils';
import { Feed } from 'feed';

export const prerender = true;

export async function GET() {
	const feed = new Feed({
		title: 'CommitsOverCoffee',
		description: "Sourav's personal website",
		id: 'https://commitsovercoffee.com',
		link: 'https://commitsovercoffee.com',
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		copyright: `Copyright ${new Date().getFullYear().toString()}, commitsovercoffee`,
		generator: '🌻', // optional, default = 'Feed for Node.js'
		feedLinks: {
			rss: 'https://commitsovercoffee.com/rss.xml'
		},
		author: {
			name: 'Sourav Singh',
			email: 'commitsovercoffee@gmail.com',
			link: 'https://commitsovercoffee.com'
		},
		ttl: 60
	});
	const articles = await fetchMarkdownPosts();

	for (const article of articles) {
		feed.addItem({
			title: article.meta.title,
			description: article.meta.desc,
			content: `<p>${article.meta.desc}</p>`,
			link: `https://commitsovercoffee.com${article.path}`,
			author: [
				{
					name: 'Sourav Singh',
					email: 'commitsovercoffee@gmail.com',
					link: 'https://commitsovercoffee.com'
				}
			],
			date: new Date(article.meta.date)
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
