<script lang="ts">
	import Me from '$lib/assets/Me.webp';
	import { SKILLS_SECTIONS } from '$lib/config/skills';
</script>

<div
	class="mx-auto flex h-full max-w-max flex-col items-center justify-center gap-10 font-roboto md:flex-row"
>
	<div class="w-fit px-10 md:w-2/6 md:px-0">
		<h1 class="mb-5 text-xl font-extrabold">Hello, <br />My name is Ahda.</h1>
		<p class="text-sm">Im into Software Engineering.</p>
		<text class="text-sm">
			I usually work with React/Next, Vue, Svelte, and .NET Maui while also quite familiar with
			Express, Fastify, and Gin & Gorm.
		</text>

		<div
			class="mt-2 w-fit rounded-full bg-white text-xs duration-500 hover:bg-gray-300 hover:px-2 dark:bg-[#262626] hover:dark:bg-[#44444E]"
		>
			<a href="/cv_ahdafilza.pdf" target="_blank"> Get My Resume</a>
		</div>

		<div class="mt-5 flex justify-center gap-2 md:mt-2 md:justify-start">
			{#each SKILLS_SECTIONS as s}
				<div
					class="group relative h-10 w-10 rounded-full bg-white transition duration-500 hover:-translate-y-0.5"
				>
					<img alt={s.alt} src={s.src} />
					<span
						class="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full px-2 py-1 text-center text-xs whitespace-nowrap opacity-0 transition duration-500 group-hover:opacity-100 dark:bg-[#44444E]"
						>{s.text}</span
					>
				</div>
			{/each}
		</div>
	</div>

	<div class="relative w-fit md:w-2/6">
		<img
			alt="Ahda Filza"
			src={Me}
			class="relative z-50 h-64 w-64 rounded-2xl grayscale-25 duration-1000 hover:translate-y-1 hover:grayscale-0 md:h-auto md:w-auto"
		/>
		<div
			class="absolute top-32 z-0 h-56 w-64 rounded-2xl bg-gray-300 md:right-0 md:h-80 md:w-80 dark:bg-[#44444E]"
		></div>
	</div>
</div>
