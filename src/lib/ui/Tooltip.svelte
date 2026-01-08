<script lang="ts">
	import type { Snippet } from 'svelte';

	// slot is deprecated, we use snippet
	const { label, size, children }: { label: string; size: number; children: Snippet } = $props();
</script>

<div
	class={`group relative h-${size} w-${size} rounded-full bg-transparent transition duration-500 hover:-translate-y-0.5`}
	class:dark:bg-white={label == 'Next'}
>
	{@render children()}
	<span
		class="absolute -bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full px-2 py-1 text-xs whitespace-nowrap transition duration-500 group-hover:block group-active:block dark:bg-[#44444E]"
	>
		{label}
	</span>
</div>
