<script lang="ts">
	let snapContainer: HTMLElement | null = $state(null);
	let isLocked = false;

	const SECTION_COUNT = 3;
	const SCROLL_LOCK_MS = 700;
	let currentIndex = $state(0);
	const { onIndexChange }: { onIndexChange: (index: number) => void } = $props();

	function onWheel(event: WheelEvent): void {
		if (isLocked) return;

		const direction = Math.sign(event.deltaY);

		if (direction > 0) {
			scrollToIndex(currentIndex + 1);
		} else if (direction < 0) {
			scrollToIndex(currentIndex - 1);
		}
	}

	function scrollToIndex(index: number): void {
		if (!snapContainer) return;
		if (index < 0 || index >= SECTION_COUNT) return;

		isLocked = true;
		currentIndex = index;
		onIndexChange(index);

		snapContainer.scrollTo({
			top: index * snapContainer.clientHeight,
			behavior: 'smooth'
		});

		setTimeout(() => {
			isLocked = false;
		}, SCROLL_LOCK_MS);
	}

	export { scrollToIndex };
</script>

<main
	bind:this={snapContainer}
	onwheel={onWheel}
	class="no-scrollbar h-[calc(100vh-8rem)] overflow-hidden scroll-smooth text-black dark:text-white"
>
	<section id="profile" class="h-full">Profile</section>
	<section id="projects" class="h-full">Projects</section>
	<section id="contact" class="h-full">Contact</section>
</main>
