<script lang="ts">
	import Me from '$lib/assets/Me.webp';
	import { SKILLS_SECTIONS } from '$lib/config/skills';
	import Tooltip from '$lib/ui/Tooltip.svelte';
</script>

<div
	class="m-auto flex w-4/6 flex-col items-center justify-center gap-5 font-roboto md:flex-row md:gap-10"
>
	<div class="w-full md:w-1/2 md:max-w-md">
		<h1 class="mb-5 text-xl font-extrabold">Hello, <br />My name is Ahda.</h1>
		<p class="text-sm">Im into Software Engineering.</p>
		<p class="text-sm">
			I usually work with React/Next, Vue, Svelte, and .NET Maui while also quite familiar with
			Express, Fastify, and Gin & Gorm.
		</p>

		<div
			class="mt-2 w-fit rounded-full bg-transparent text-xs duration-500 hover:bg-gray-300 hover:px-2 hover:dark:bg-[#44444E]"
		>
			<a href="/cv_ahdafilza.pdf" target="_blank"> Get My Resume</a>
		</div>

		<div class="mt-5 flex justify-center gap-2 md:mt-2 md:justify-start">
			{#each SKILLS_SECTIONS as s}
				<Tooltip label={s.text} size={10}>
					<img alt={s.alt} src={s.src} />
				</Tooltip>
			{/each}
		</div>
	</div>

	<div class="relative w-1/2 max-w-fit">
		<img
			alt="Ahda Filza"
			src={Me}
			class="z-49 rounded-2xl grayscale-25 duration-1000 hover:translate-y-1 hover:grayscale-0"
		/>
		<div
			class="absolute top-[30%] left-[30%] -z-1 h-[90%] w-[90%] rounded-2xl bg-gray-300 dark:bg-[#44444E]"
		></div>
	</div>
</div>
