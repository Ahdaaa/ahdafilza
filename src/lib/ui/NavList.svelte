<script lang="ts">
	import { NAV_SECTIONS } from '$lib/config/navigation';

	const {
		isSectionActive,
		navigate
	}: { isSectionActive: (i: string) => Boolean; navigate: (index: number) => void } = $props();
</script>

{#each NAV_SECTIONS as i, index}
	<li class="text-gray-400 hover:text-black dark:hover:text-white">
		<button
			class="relative cursor-pointer pb-1 md:data-[active=true]:text-black md:dark:data-[active=true]:text-white"
			data-active={isSectionActive(i.id)}
			onclick={() => navigate(index)}
		>
			{i.label}

			{#if isSectionActive(i.id)}
				<span
					class="absolute bottom-0 left-0 h-0.5 w-full bg-black opacity-0 md:opacity-100 dark:bg-white"
				></span>
			{/if}
		</button>
	</li>
{/each}
