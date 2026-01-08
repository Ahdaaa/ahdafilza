<script lang="ts">
	import { PROJECT_SECTIONS } from '$lib/config/skills';

	let carousel: HTMLElement | null = $state(null);
	let indexActive: number = $state(0);

	const onCarouselScroll = () => {
		if (!carousel) return;
		const toIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
		indexActive = Math.min(Math.max(toIndex, 0), PROJECT_SECTIONS.length - 1);
	};
</script>

<div class="@container m-auto w-4/6 font-roboto">
	<h1
		class="mb-5 text-left text-xl font-extrabold
           [@container(min-width:1100px)]:text-center"
	>
		My Past Work & Projects.
	</h1>
	<p
		class="text-left text-base
         [@container(min-width:1100px)]:text-center"
	>
		Take a look at my past work and projects that showcases my experience in development.
	</p>

	<div
		bind:this={carousel}
		onscroll={onCarouselScroll}
		class="no-scrollbar relative mt-10 flex snap-x snap-mandatory gap-5 overflow-x-scroll"
	>
		{#each PROJECT_SECTIONS as p, index}
			<div
				class="flex min-w-full snap-center flex-col justify-center gap-5 md:flex-row"
				class:md:flex-row-reverse={index % 2 == 0}
			>
				<div class="group relative overflow-hidden rounded-lg">
					<img
						alt={p.alt}
						src={p.src}
						class="aspect-auto h-60 transform transition-transform duration-500 group-hover:scale-125 group-hover:brightness-50"
					/>
					<div
						class="absolute inset-0 flex items-center justify-center text-xs text-white opacity-0 duration-500 group-hover:opacity-100 active:opacity-100"
					>
						<div class="flex max-w-[50%] flex-wrap justify-center gap-1">
							{#each p.stack as s}
								<p class="w-fit rounded-full border-2 border-solid border-white px-2 py-1">{s}</p>
							{/each}
						</div>
					</div>
				</div>
				<div class="max-w-3xl flex-1 self-center">
					<h1 class="mb-5 text-sm">
						<span class="text-xl font-extrabold">{p.header}</span>
						({p.company})
					</h1>
					<p class="text-justify text-base">{p.desc}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mx-auto mt-5 flex max-w-max gap-3">
		{#each PROJECT_SECTIONS as _, i}
			<div
				class="h-3 w-3 rounded-full border-2 border-black dark:border-white"
				class:bg-black={indexActive == i}
				class:dark:bg-white={indexActive == i}
			></div>
		{/each}
	</div>
</div>
