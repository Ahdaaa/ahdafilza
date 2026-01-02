<script lang="ts">
	import ThemeToggle from '$lib/ui/ThemeToggle.svelte';
	import { NAV_SECTIONS } from '$lib/config/navigation';

	const {
		activeHash = '#profile',
		onNavigate
	}: { activeHash: string; onNavigate: (index: number) => void } = $props();

	const isSectionActive = (i: string) => {
		return activeHash === `#${i}`;
	};
</script>

<nav class="font-roboto flex h-32 items-center px-8">
	<div class="flex-1 text-2xl text-black hover:cursor-pointer dark:text-white">
		<h1 class="leading-tight">
			<span class="font-extrabold">Ahda</span><br />
			Filza Ghaffaru.
		</h1>
	</div>

	<ul class="flex gap-6 text-gray-400 dark:text-gray-700">
		{#each NAV_SECTIONS as i, index}
			<li class=" hover:text-black dark:hover:text-white">
				<button
					class="relative cursor-pointer pb-1 data-[active=true]:text-black dark:data-[active=true]:text-white"
					data-active={isSectionActive(i.id)}
					onclick={() => onNavigate(index)}
				>
					{i.label}

					{#if isSectionActive(i.id)}
						<span class="absolute bottom-0 left-0 h-0.5 w-full bg-black dark:bg-white"></span>
					{/if}
				</button>
			</li>
		{/each}
	</ul>

	<div class="flex flex-1 justify-end">
		<ThemeToggle />
	</div>
</nav>
