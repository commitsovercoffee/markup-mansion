<script>
	import Rows from './Rows.svelte';

	let selected = $state('Movies');
	const tabs = ['Movies', 'Shows', 'Games', 'Novels'];
</script>

<div class="border-panel my-8 flex gap-2 border-b">
	{#each tabs as tab}
		<button
			onclick={() => {
				selected = tab;
			}}
			class=" {selected == tab
				? 'text-bg bg-anchor border-anchor '
				: 'text-body hover:text-bg hover:bg-fg'} border-panel cursor-pointer rounded-t-xl border border-b-0 px-2 transition-all duration-200 ease-in"
			>{tab}</button
		>
	{/each}
</div>

<table class="table-auto">
	{#if selected === 'Movies'}
		<thead> <tr> <th>Movie</th> <th>Runtime</th> <th>Year</th> </tr> </thead>
		<tbody>
			<Rows
				rows={[
					['Top Gun Maverick', '2hr 10m', '2022'],
					['Palm Springs', '1hr 30m', '2020'],
					['Mission Impossible Fallout', '2hr 27m', '2018'],
					['American Made', '1hr 55m', '2017'],
					['Mission Impossible Rogue Nation', '2hr 11m', '2015'],
					['The Intern', '2hr 1m', '2015'],
					['Edge of Tomorrow', '1hr 53m', '2014'],
					['Whiplash', '1hr 46m', '2014'],
					['The Judge', '2hr 21m', '2014'],
					['Dark Waters', '2hr 6m', '2019'],
					['Inglourious Bastards', '2hr 33m', '2009'],
					['Valkyrie', '2hr 1m', '2008'],
					['Eternal Sunshine of the Spotless Mind', '1hr 48m', '2004'],
					['Catch Me If You Can', '2hr 21m', '2002'],
					['Malena', '1hr 48m', '2000'],
					['The Matrix', '2hr 16m', '1999'],
					['Life Is Beautiful', '1hr 56m', '1997'],
					['A Clockwork Orange', '2hr 16m', '1971'],
					['2001 A Space Odyssey', '2hr 29m', '1968'],
					['12 Angry Men', '1h 36m', '1957']
				]}
			/>
		</tbody>
	{:else if selected === 'Shows'}
		<thead> <tr> <th>Show</th> <th>Episodes</th> <th>Runtime</th> <th>Year</th> </tr> </thead>
		<tbody>
			<Rows
				rows={[
					['Invincible', '25', '50m', '2021-Now'],
					['The Boys', '40', '60m', '2019-Now'],
					['Marvelous Mrs Maisel', '43', '60m', '2017-2023'],
					['One Punch Man', '39', '24m', '2015-Now'],
					['Rick and Morty', '72', '23m', '2013-Now'],
					['Modern Family', '250', '22m', '2009-2020'],
					['How I Met Your Mother', '208', '23m', '2005-2014'],
					['The Office', '188', '22m', '2005-2013'],
					['My Name is Earl', '96', '22m', '2005-2009'],
					['Freaks & Geeks', '18', '45m', '1999-2000']
				]}
			/>
		</tbody>
	{:else if selected === 'Games'}
		<thead> <tr> <th>Game</th> <th>Developer</th> <th>Year</th> </tr> </thead>
		<tbody>
			<Rows
				rows={[
					['Split Fiction', 'Hazelight Studios', '06 March, 2025'],
					['God of War Ragnarok', 'Santa Monico Studios', '19 Sep, 2024'],
					['Marvels Spider-man Remastered', 'Insomniac Games', '12 Aug, 2022'],
					['God of War', 'Santa Monico Studios', '14 Jan, 2022'],
					['Death Doors', 'Acid Nerve', '20 Jul, 2021'],
					['Red Dead Redemption II', 'Rockstar games', '05 Dec, 2019'],
					['Part Hard 2', 'Pinokl Games', '25 Oct, 2018'],
					['Inside', 'Playdead', '07 Jul, 2016'],
					['Far Cry Primal', 'Ubisoft', '01 Mar, 2016'],
					['Lego Avengers', 'TT Games', '26 Jan, 2016'],
					['Mad Max', 'Avalanche Studios', '01 Sep, 2015'],
					['The Witcher 3', 'CD Projekt Red', '18 May, 2015'],
					['GTA V', 'Rockstar Games', '14 Apr, 2015'],
					['Tomb Raider', 'Square Enix', '05 Mar, 2013'],
					['Portal 2', 'Valve', '19 Apr, 2011'],
					['Assassins Creed Brotherhood', 'Ubisoft Montreal', '17 Mar, 2011'],
					['Batman Arkham Asylum', 'Rocksteady Studios', '27 Mar, 2010'],
					['Bully', 'Rockstar Games', '21 Oct, 2008']
				]}
			/>
		</tbody>
	{:else if selected === 'Novels'}
		<thead> <tr> <th>Book</th> <th>Author</th> <th>Year</th> </tr> </thead>
		<tbody>
			<Rows
				rows={[
					['Orginary Men', 'Christopher Browning', '1992'],
					['The Handmaid`s Tale', 'Margaret Atwood', '1985'],
					['The Master and Margarita', 'Mikhail Bulgakov', '1967'],
					['Ariel', 'Sylvia Plath', '1965'],
					['The Bell Jar', 'Sylvia Plath', '1963'],
					['Lolita', 'Vladimir Nabokov', '1955'],
					['Fahrenheit 451', 'Ray Bradbury', '1953'],
					['1984', 'George Orwell', '1949'],
					['Animal Farm', 'George Orwell', '1945'],
					['The Road to Wigan Pier', 'George Orwell', '1936'],
					['Laughter in the Dark', 'Vladimir Nabokov', '1932'],
					['Brave New World', 'Aldous Huxley', '1932'],
					['To the Lighthouse', 'Virginia Woold', '1927'],
					['Mrs Dalloway', 'Virginia Woolf', '1925'],
					['Diary of a Nobody', 'George Grossmith', '1892'],
					['The Brothers Karamazov', 'Fyodor Dostoevsky', '1880'],
					['Demons', 'Fyodor Dostoevsky', '1872'],
					['The Idiot', 'Fyodor Dostoevsky', '1869'],
					['Crime and Punishment', 'Fyodor Dostoevsky', '1866'],
					['Notes from Underground', 'Fyodor Dostoevsky', '1864'],
					['White Nights', 'Fyodor Dostoevsky', '1848']
				]}
			/>
		</tbody>
	{/if}
</table>
