<script>
	import Thoughts from '$lib/Thoughts.svelte';
	import { BriefcaseBusiness, Coffee, IdCard, Joystick, Mail, MapPin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
	<meta name="description" content="Personal website of Sourav Singh." />
</svelte:head>

<div>
	<div class="order-2 mb-4 md:order-1">
		<h1 class="text-primary mb-0">
			Hello
			<span class="text-fg">Beautiful.</span>
		</h1>
		<Thoughts />
	</div>

	<div class="blog flex flex-col gap-4">
		<div class="flex flex-row items-start gap-4">
			<div>
				<IdCard
					size={32}
					strokeWidth={1}
					class="stroke-secondary mx-2 transition-all duration-200 ease-in"
				/>
			</div>
			<p class="mt-0">
				<span class="text-fg">I'm Sourav Singh.</span> I go by
				<span class="text-fg">@commitsovercoffee</span> on the web. I code for a living, and for
				better or worse it is both my profession and my pastime, which means I'm always tinkering
				with side <a href="/projects">projects</a>.
			</p>
		</div>

		<div class="flex flex-row items-start gap-4">
			<div>
				<BriefcaseBusiness
					size={32}
					strokeWidth={1}
					class="stroke-primary mx-2 transition-all duration-200 ease-in"
				/>
			</div>
			<p class="mt-0">
				I currently work at Quest Alliance, a non profit working in the education space. I mainly
				focus on design, development ( <span class="text-fg">
					mostly frontend, sometimes backend
				</span>) and support.
			</p>
		</div>

		<div class="flex flex-row items-start gap-4">
			<div>
				<Joystick
					size={32}
					strokeWidth={1}
					class="stroke-tertiary mx-2 transition-all duration-200 ease-in"
				/>
			</div>
			<p class="mt-0">
				<span class="text-fg"> I like cycling and reading </span> in my leisure time. I also
				<a href="/writings">write</a> sometimes to clear my head. Recently, I have also started
				blabbering on <a href="https://www.youtube.com/@commitsovercoffee">Youtube</a>. And ofcourse
				I play video games.
			</p>
		</div>

		<div class="flex flex-row items-start gap-4">
			<div>
				<MapPin
					size={32}
					strokeWidth={1}
					class="stroke-highlight mx-2 transition-all duration-200 ease-in"
				/>
			</div>
			<p class="mt-0">
				<span class="text-fg">I live in Ranchi</span>, a quiet city in eastern India surrounded by
				waterfalls and greenery. I work remotely,
				<span class="text-fg">but every few months I travel </span> for meetups, workshops or just a
				change of pace.
			</p>
		</div>

		<div class="flex flex-row items-start gap-4">
			<div>
				<Mail
					size={32}
					strokeWidth={1}
					class="stroke-anchor mx-2 transition-all duration-200 ease-in"
				/>
			</div>
			<p class="mt-0">
				<span class="text-fg"> Feel free to reach out. </span> I’d love to meet and chat. You can
				text me on <a href="https://bsky.app/profile/commitsovercoffee.com">bluesky</a> or send me a
				mail.
			</p>
		</div>
	</div>
</div>
