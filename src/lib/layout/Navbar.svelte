<script lang="ts">
	import { fade } from 'svelte/transition';
	import ThemeToggle from '$lib/ui/ThemeToggle.svelte';
	import NavList from '$lib/ui/NavList.svelte';

	const {
		activeHash = '#profile',
		onNavigate
	}: { activeHash: string; onNavigate: (index: number) => void } = $props();

	let togglePopup = $state(false);

	const isSectionActive = (i: string) => {
		return activeHash === `#${i}`;
	};

	const navigate = (index: number) => {
		if (togglePopup) togglePopup = false;
		onNavigate(index);
	};
</script>

<nav class="flex h-32 items-center justify-between px-8 font-roboto md:justify-start">
	<div class="flex text-base text-black hover:cursor-pointer md:flex-1 md:text-2xl dark:text-white">
		<h1 class="leading-tight">
			<span class="font-extrabold">Ahda</span><br />
			Filza Ghaffaru.
		</h1>
	</div>

	<ul class="hidden gap-6 text-gray-400 md:flex dark:text-gray-700">
		<NavList {isSectionActive} {navigate} />
	</ul>

	<div class="hidden flex-1 justify-end md:flex">
		<ThemeToggle />
	</div>

	<!-- mobile button -->
	<button
		class="cursor-pointer text-xl text-black md:hidden dark:text-white"
		title="List Popup"
		onclick={() => (togglePopup = true)}
	>
		☰
	</button>
</nav>

<!-- mobile popup -->
{#if togglePopup}
	<div
		in:fade
		out:fade
		class="fixed inset-0 z-100 flex items-center justify-center bg-white dark:bg-gray-950"
	>
		<button
			class="absolute top-12 right-8 cursor-pointer text-xl text-black md:hidden dark:text-white"
			title="List Popup"
			onclick={() => (togglePopup = false)}
		>
			✕
		</button>
		<ul class="flex flex-col items-center gap-6 text-xl text-gray-400 dark:text-gray-700">
			<NavList {isSectionActive} {navigate} />
			<ThemeToggle />
		</ul>
	</div>
{/if}
