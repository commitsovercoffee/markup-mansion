<script>
	// assets
	import '../app.css';
	import '@fontsource-variable/overpass'; // 100-900
	import { Coffee, Moon, SunMedium, LoaderPinwheel } from 'lucide-svelte';

	// components
	import Footer from '$lib/Footer.svelte';

	// transitions
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	// std lib
	import { navigating } from '$app/state';
	import { page } from '$app/state';

	// runes
	let { children } = $props();
	let lightsoff = $state(true);

	// nav
	const links = ['/writings', '/projects', '/rss'];
</script>

<div
	class="{lightsoff
		? 'dark prose-invert'
		: 'light'} font-overpass bg-bg selection:bg-fg selection:text-bg min-h-screen px-4 transition-colors duration-200 ease-in"
>
	<main
		class="prose prose-h1:font-medium prose-h2:font-medium text-body mx-auto flex min-h-screen flex-col justify-between"
	>
		<!-- 

 /$$   /$$                            /$$$$$$$                     
| $$$ | $$                           | $$__  $$                    
| $$$$| $$  /$$$$$$  /$$    /$$      | $$  \ $$  /$$$$$$   /$$$$$$ 
| $$ $$ $$ |____  $$|  $$  /$$/      | $$$$$$$  |____  $$ /$$__  $$
| $$  $$$$  /$$$$$$$ \  $$/$$/       | $$__  $$  /$$$$$$$| $$  \__/
| $$\  $$$ /$$__  $$  \  $$$/        | $$  \ $$ /$$__  $$| $$      
| $$ \  $$|  $$$$$$$   \  $/         | $$$$$$$/|  $$$$$$$| $$      
|__/  \__/ \_______/    \_/          |_______/  \_______/|__/      

-->
		<div>
			<nav class="flex flex-col items-start gap-4 py-10">
				<a href="/" class="group flex items-center no-underline">
					<Coffee
						size={28}
						strokeWidth={1.8}
						class="stroke-fg rotate- mx-2 -rotate-12 transition-all duration-200 ease-in group-hover:rotate-0"
					/>
					<span class="text-fg text-xl"> CommitsOverCoffee </span>
				</a>

				<div class="flex flex-row items-center gap-4">
					{#each links as link}
						<a
							class=" {page.url.pathname == link
								? 'text-secondary underline underline-offset-8'
								: 'text-body'} not-prose hover:text-secondary transition-color no-underline duration-100 ease-out"
							href={link}>{link}</a
						>
					{/each}
					<div class="h-[28px] w-[28px]">
						{#if !lightsoff}
							<div
								in:fly={{ easing: cubicOut, y: 20, duration: 200, delay: 200 }}
								out:fly={{ easing: cubicIn, y: 20, duration: 200 }}
								class="transition-all duration-300 ease-in active:translate-y-2"
							>
								<SunMedium
									onclick={() => (lightsoff = !lightsoff)}
									size={28}
									strokeWidth={1.8}
									class="stroke-secondary cursor-pointer"
								/>
							</div>
						{:else}
							<div
								in:fly={{ easing: cubicOut, y: 20, duration: 200, delay: 200 }}
								out:fly={{ easing: cubicIn, y: 20, duration: 200 }}
								class="transition-all duration-300 ease-in active:translate-y-2"
							>
								<Moon
									onclick={() => (lightsoff = !lightsoff)}
									size={24}
									strokeWidth={1.8}
									class="stroke-primary fill-primary cursor-pointer"
								/>
							</div>
						{/if}
					</div>
				</div>
			</nav>

			<!-- 

 /$$$$$$$                                      /$$$         
| $$__  $$                                    /$$ $$        
| $$  \ $$ /$$$$$$   /$$$$$$   /$$$$$$       |  $$$         
| $$$$$$$/|____  $$ /$$__  $$ /$$__  $$       /$$ $$/$$     
| $$____/  /$$$$$$$| $$  \ $$| $$$$$$$$      | $$  $$_/     
| $$      /$$__  $$| $$  | $$| $$_____/      | $$\  $$      
| $$     |  $$$$$$$|  $$$$$$$|  $$$$$$$      |  $$$$/$$     
|__/      \_______/ \____  $$ \_______/       \____/\_/     
                    /$$  \ $$                               
                   |  $$$$$$/                               
                    \______/                                
 /$$                                 /$$                    
| $$                                | $$                    
| $$        /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$ 
| $$       /$$__  $$ |____  $$ /$$__  $$ /$$__  $$ /$$__  $$
| $$      | $$  \ $$  /$$$$$$$| $$  | $$| $$$$$$$$| $$  \__/
| $$      | $$  | $$ /$$__  $$| $$  | $$| $$_____/| $$      
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$| $$      
|________/ \______/  \_______/ \_______/ \_______/|__/      

-->

			{#if navigating.to != null}
				<div class="flex flex-row items-center gap-2">
					<LoaderPinwheel size={24} strokeWidth={1.8} class="stroke-secondary m-0 animate-spin" />
					<p class="m-0">
						<span class="text-secondary"> Loading ...</span>
					</p>
				</div>
			{:else}
				<div
					in:fly={{ easing: cubicOut, y: 30, duration: 300, delay: 100 }}
					out:fly={{ easing: cubicIn, y: -30, duration: 300 }}
				>
					{@render children()}
				</div>
			{/if}
		</div>
		<Footer />
	</main>
</div>
