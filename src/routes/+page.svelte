<script lang="ts">
	import { NAV_SECTIONS } from '$lib/config/navigation';
	import Main from '$lib/layout/Main.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let show = $state(false);
	let currentIndex = $state(0);
	let mainRef: { scrollToIndex: (index: number) => void } | null = $state(null);
	const activeHash = $derived(`#${NAV_SECTIONS[currentIndex].id}`);

	const onIndexChange = (index: number) => {
		currentIndex = index;
	};

	const onNavigate = (index: number) => {
		mainRef?.scrollToIndex(index);
	};

	$effect(() => {
		history.replaceState(null, '', activeHash);
	});

	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<div in:fade={{ duration: 1000 }}>
		<Navbar {activeHash} {onNavigate} />

		<Main bind:this={mainRef} {onIndexChange} />

		<footer></footer>
	</div>
{/if}
