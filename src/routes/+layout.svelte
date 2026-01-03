<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();

	onMount(() => {
		let isDark: boolean;

		if (localStorage.theme) {
			isDark = localStorage.theme === 'dark' ? true : false;
		} else {
			isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			localStorage.theme = isDark ? 'dark' : 'light';
		}

		theme.set(isDark ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', isDark);
	});
</script>

<!-- this is to prevent flickering on mounted -->
<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

{@render children()}
