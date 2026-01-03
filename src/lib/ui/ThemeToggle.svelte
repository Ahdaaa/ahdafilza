<script lang="ts">
	import { theme } from '$lib/stores/theme';

	function toggle() {
		theme.update((current) => {
			const next = current === 'dark' ? 'light' : 'dark';

			localStorage.theme = next;
			document.documentElement.classList.toggle('dark', next === 'dark');

			return next;
		});
	}

	$: isDark = $theme === 'dark';
</script>

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
