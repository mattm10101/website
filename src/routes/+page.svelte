<script lang="ts">
	import ThreeScene from '$lib/components/ThreeScene.svelte';
</script>

<!-- Desktop Layout (16:9 / 16:10) -->
<div class="hidden desktop:block min-h-screen bg-black text-white">
	<div class="relative w-full h-screen">
		<!-- Three.js Background -->
		<div class="absolute inset-0 z-0">
			<ThreeScene />
		</div>

		<!-- Content Overlay -->
		<div class="relative z-10 h-full flex items-center justify-center">
			<div class="text-center">
				<h1 class="text-6xl font-bold mb-4">Welcome</h1>
				<p class="text-xl">SvelteKit + Tailwind + Three.js</p>
			</div>
		</div>
	</div>
</div>

<!-- Mobile Layout (Portrait) -->
<div class="desktop:hidden min-h-screen bg-black text-white">
	<div class="relative w-full h-screen">
		<!-- Three.js Background -->
		<div class="absolute inset-0 z-0">
			<ThreeScene />
		</div>

		<!-- Content Overlay -->
		<div class="relative z-10 h-full flex flex-col items-center justify-center px-6">
			<div class="text-center">
				<h1 class="text-4xl font-bold mb-4">Welcome</h1>
				<p class="text-lg">SvelteKit + Tailwind + Three.js</p>
			</div>
		</div>
	</div>
</div>
