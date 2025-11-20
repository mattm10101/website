<script lang="ts">
	import { onMount } from 'svelte';

	let visible = true;
	let gridSize = 40;

	onMount(() => {
		// Optional: Add keyboard shortcut to toggle grid
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'g' && e.ctrlKey) {
				e.preventDefault();
				visible = !visible;
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

{#if visible}
	<div class="background-grid" style="--grid-size: {gridSize}px"></div>
{/if}
