<script lang="ts">
	import { onMount } from 'svelte';
	import Contacts from './Contacts.svelte';
	import Profile from './Profile.svelte';
	import Projects from './Projects.svelte';

	let snapContainer: HTMLElement | null = $state(null);
	let isLocked = false;

	const SECTION_COUNT = 3;
	const SCROLL_LOCK_MS = 700;
	let currentIndex = $state(0);
	const { onIndexChange }: { onIndexChange: (index: number) => void } = $props();

	function onWheel(event: WheelEvent): void {
		if (isLocked || isMobile()) return;

		const direction = Math.sign(event.deltaY);

		if (direction > 0) {
			scrollToIndex(currentIndex + 1);
		} else if (direction < 0) {
			scrollToIndex(currentIndex - 1);
		}
	}

	function scrollToIndex(index: number): void {
		if (index < 0 || index >= SECTION_COUNT) return;

		currentIndex = index;
		onIndexChange(index);

		if (isMobile()) {
			const sections = snapContainer?.children;
			const target = sections?.[index] as HTMLElement;

			target?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			return;
		}

		if (!snapContainer) return;

		isLocked = true;

		snapContainer.scrollTo({
			top: index * snapContainer.clientHeight,
			behavior: 'smooth'
		});

		setTimeout(() => {
			isLocked = false;
		}, SCROLL_LOCK_MS);
	}

	function isMobile(): boolean {
		return window.matchMedia('(max-width: 768px)').matches;
	}

	// we check for resize to prevent active navbar not matching
	// we wont apply for mobile since ios will trigger resize on scroll
	onMount(() => {
		const onResize = () => {
			if (!isMobile()) scrollToIndex(currentIndex);
		};

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	});

	export { scrollToIndex };
</script>

<main
	bind:this={snapContainer}
	onwheel={onWheel}
	class="no-scrollbar h-screen scroll-smooth text-black md:overflow-hidden dark:text-white"
>
	<section id="profile" class="flex min-h-screen"><Profile /></section>
	<section id="projects" class="flex min-h-screen py-20 md:py-0">
		<Projects />
	</section>
	<section id="contact" class="flex min-h-screen flex-col">
		<Contacts />
		<footer class="pb-5 text-center font-roboto">Made with love by Ahda &copy; 2026</footer>
	</section>
</main>
