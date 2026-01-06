<script lang="ts">
	import { PROJECT_SECTIONS } from '$lib/config/skills';
</script>

<div class="m-auto w-4/6 max-w-max font-roboto">
	<h1 class="mb-5 text-xl font-extrabold">My Past Work & Projects.</h1>
	<p class="max-w-2xl text-base">
		Take a look at my past work and projects that showcases my experience in development.
	</p>

	<!-- TODO : make this carousel for each project sections -->
	<div class="mt-10 flex flex-col gap-5 md:flex-row">
		<div class="group relative overflow-hidden rounded-lg">
			<img
				alt={PROJECT_SECTIONS[0].alt}
				src={PROJECT_SECTIONS[0].src}
				class="aspect-auto h-60 transform transition-transform duration-500 group-hover:scale-125 group-hover:brightness-50"
			/>
			<div
				class="absolute inset-0 flex items-center justify-center text-xs text-white opacity-0 duration-500 group-hover:opacity-100"
			>
				<div class="flex max-w-[50%] flex-wrap justify-center gap-1">
					{#each PROJECT_SECTIONS[0].stack as s}
						<p class="w-fit rounded-full border-2 border-solid border-white px-2 py-1">{s}</p>
					{/each}
				</div>
			</div>
		</div>
		<div class="max-w-3xl flex-1 self-center">
			<h1 class="mb-5 text-sm">
				<span class="text-xl font-extrabold">{PROJECT_SECTIONS[0].header}</span>
				({PROJECT_SECTIONS[0].company})
			</h1>
			<p class="text-justify text-base">{PROJECT_SECTIONS[0].desc}</p>
		</div>
	</div>
</div>
