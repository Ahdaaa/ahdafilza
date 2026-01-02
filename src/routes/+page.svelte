<script lang="ts">
	import ThemeToggle from '$lib/buttons/ThemeToggle.svelte';
</script>

<div class="h-screen bg-white dark:bg-gray-950">
	<nav class="flex h-32 items-center justify-between px-8">
		<div class="font-roboto text-xl text-black dark:text-white">
			<h1 class="font-bold">Ahda</h1>
			<h1>Filza Ghaffaru.</h1>
		</div>

		<div>
			<ThemeToggle />
		</div>
	</nav>

	<section></section>

	<footer></footer>
</div>
