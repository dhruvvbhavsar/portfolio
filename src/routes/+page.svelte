<script>
	import { onMount } from 'svelte';
	import { time, daysUntilBirthday } from '../components/time';

	var t = time();
	var d = daysUntilBirthday();
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
	integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
/>

<div
	class="h-full bg-[url('https://pbs.twimg.com/media/FrS10FOWAAAINkC?format=jpg&name=large')] bg-right-top bg-no-repeat bg-cover"
>
	<div class="grid max-w-3xl grid-cols-6 gap-6 pt-16 px-3 pb-40 mx-auto">
		<div
			class="col-span-4 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-pink-900"
		>
			<div
				class="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4"
			>
				<img
					alt="its me hi"
					class="h-24 w-24 rounded-full border border-pink-500 object-cover"
					src="src\assets\profile.jpg"
				/>

				<div class="space-y-1">
					<h1
						class="text-center font-mono text-xl font-bold tracking-tighter text-pink-400 md:text-left"
					>
						Dhruv Bhavsar
					</h1>

					<p class="text-center font-serif text-yellow-200 md:text-left">
						A lost soul in the material realm.
					</p>
				</div>
			</div>
		</div>

		<div
			class="col-span-2 h-full bg-sky-500 rounded-2xl  transition ease-in-out duration-300 hover:scale-95"
		>
			<a
				href="https://twitter.com/devsbond007"
				target="_blank"
				class="flex flex-col justify-center items-center h-full"
			>
				<i class="fa-brands fa-twitter text-4xl" style="color: #ffffff;" />
			</a>
		</div>

		<div
			class="col-span-2 h-52 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl  transition ease-in-out duration-300 hover:scale-95"
		>
			<a
				href="https://www.instagram.com/dhruvvbhavsar"
				target="_blank"
				class="flex flex-col justify-center items-center h-full"
			>
				<i class="fa-brands fa-instagram text-5xl" style="color: #ffffff;" />
			</a>
		</div>
		<div
			class="col-span-4 h-52 rounded-2xl bg-[url('https://pbs.twimg.com/media/FsAzk6CX0AE0-F8?format=jpg&name=medium')] bg-cover bg-center transition duration-300 ease-in-out hover:scale-95"
		>
			<a href="https://github.com/dhruvvbhavsar" target="_blank">
				<div class="flex h-2/6 flex-row items-center justify-between px-3">
					<i class="fa-brands fa-github text-4xl" style="color: #E5E4E2;" />
					<i class="fa-solid fa-link text-base" style="color: #E5E4E2;" />
				</div>
				<div class="flex h-4/6  text-green-200 flex-col justify-end px-3 pb-4">
					<p class="font-mono text-xl">github</p>
					<p class="text-sm">my work & contributions</p>
				</div>
			</a>
		</div>
		<div
			class="col-span-3 flex h-52 flex-col items-center justify-center rounded-2xl bg-[url('https://pbs.twimg.com/media/FsUdvtJaUAANsX_?format=jpg&name=large')] bg-cover bg-right-bottom text-green-300"
		>
			<p class="clock text-7xl">{time()[0]}</p>
			<p class="text-4xl ampm">{time()[1]} in India</p>
		</div>
		<div
			class="col-span-3 h-52 bg-[url('https://media.discordapp.net/attachments/1008571037862080542/1090923418876117033/MattZeidler_beautiful_beach_setting_with_waves_rolling_up_onto__c77ef45e-1c09-42f2-8b40-34aee29f9851.png?width=431&height=431')] bg-center  bg-cover rounded-2xl"
		>
			<p class=" bday pl-4 text-2xl pt-2 text-emerald-950">
				{daysUntilBirthday()} days until birthday!
			</p>
		</div>
		<div
			class="col-span-3 bg-bottom bg-cover h-52 bg-[url('https://media.discordapp.net/attachments/945077390839787570/1090922173578883182/hawanpark_bitcoin_mining_farm__a_man__laser_9c0cec5b-c4dc-4bcc-a320-f73a818b3f2f.png?width=431&height=431')] rounded-2xl  transition ease-in-out duration-300 hover:scale-95"
		/>
		<div
			class="col-span-3 flex flex-col justify-center items-center bg-cover h-52 bg-[url('./assets/map.png')] rounded-2xl"
		>
			<div aria-hidden class="absolute">
			  <span class="block h-10 w-10 animate-ping rounded-full bg-red-600 duration-1000" />
			</div>
		  
			<img src="src\assets\profile.jpg" alt="me above a map of my current location" class="z-20 h-12 w-12 rounded-full border-2 border-black" />
		  </div>
	</div>
</div>
