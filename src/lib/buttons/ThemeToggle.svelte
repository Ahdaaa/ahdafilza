<script lang="ts">
	import { onMount } from 'svelte';

	let isDark: boolean;

	onMount(() => {
		isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.classList.toggle('dark', isDark);
	});

	function toggle() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
	}
</script>

<!-- this is to prevent flickering on mounted -->
<svelte:head>
	<script>
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<button
	on:click={toggle}
	class="relative h-5 w-10 cursor-pointer rounded-full bg-gray-200"
	title="Toggle Dark Mode"
	aria-pressed={isDark}
>
	<span
		class="absolute -bottom-0.5 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 align-middle transition-transform duration-700 dark:translate-x-4 dark:bg-white"
	>
		<svg
			class="h-4 w-4"
			fill="currentColor"
			viewBox="0 0 24 24"
			class:text-black={isDark}
			class:text-yellow-500={!isDark}
		>
			<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
		</svg>
	</span>
</button>
