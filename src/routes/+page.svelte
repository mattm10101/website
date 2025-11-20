<script lang="ts">
	import ThreeScene from '$lib/components/ThreeScene.svelte';
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
</script>

<!-- Desktop Layout (16:9 / 16:10) -->
<div class="hidden desktop:block min-h-screen bg-lab-metal text-neon-teal">
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background Grid -->
		<BackgroundGrid />

		<!-- Three.js Background -->
		<div class="absolute inset-0 z-0">
			<ThreeScene />
		</div>

		<!-- Content Overlay -->
		<div class="relative z-10 h-full flex items-center justify-center">
			<div class="text-center fade-in px-8">
				<h1 class="text-7xl font-bold mb-6 glow-effect" style="text-shadow: 0 0 20px rgba(20,255,236,0.5);">
					VIRTUAL <span class="text-neon-purple">AV</span>
				</h1>
				<p class="text-2xl mb-8 text-neon-blue font-light tracking-wide">
					Next-Generation Creative Platform
				</p>
				<p class="text-lg mb-12 max-w-2xl mx-auto opacity-80">
					Powered by SvelteKit, Tailwind CSS, and Three.js
				</p>

				<!-- Action Buttons -->
				<div class="flex gap-6 justify-center">
					<button class="btn btn-primary">
						Get Started
					</button>
					<button class="btn btn-secondary">
						Learn More
					</button>
				</div>

				<!-- Feature Cards -->
				<div class="grid grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
					<div class="card slide-up" style="animation-delay: 0.1s;">
						<h3 class="text-xl font-bold mb-2 text-neon-teal">Fast</h3>
						<p class="text-sm opacity-70">Lightning-fast performance with optimized rendering</p>
					</div>
					<div class="card slide-up" style="animation-delay: 0.2s;">
						<h3 class="text-xl font-bold mb-2 text-neon-blue">Modern</h3>
						<p class="text-sm opacity-70">Built with cutting-edge web technologies</p>
					</div>
					<div class="card slide-up" style="animation-delay: 0.3s;">
						<h3 class="text-xl font-bold mb-2 text-neon-purple">Beautiful</h3>
						<p class="text-sm opacity-70">Stunning neon aesthetics and smooth animations</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Corner Info -->
		<div class="absolute bottom-8 right-8 z-10 text-right opacity-60">
			<p class="text-sm">Press <kbd class="px-2 py-1 bg-lab-panel rounded border border-neon-teal">Ctrl+G</kbd> to toggle grid</p>
		</div>
	</div>
</div>

<!-- Mobile Layout (Portrait) -->
<div class="desktop:hidden min-h-screen bg-lab-metal text-neon-teal">
	<div class="relative w-full h-screen overflow-hidden">
		<!-- Background Grid -->
		<BackgroundGrid />

		<!-- Three.js Background -->
		<div class="absolute inset-0 z-0">
			<ThreeScene />
		</div>

		<!-- Content Overlay -->
		<div class="relative z-10 h-full flex flex-col items-center justify-center px-6">
			<div class="text-center fade-in">
				<h1 class="text-5xl font-bold mb-6 glow-effect" style="text-shadow: 0 0 20px rgba(20,255,236,0.5);">
					VIRTUAL <span class="text-neon-purple">AV</span>
				</h1>
				<p class="text-xl mb-6 text-neon-blue font-light">
					Next-Generation Creative Platform
				</p>
				<p class="text-base mb-10 opacity-80">
					Powered by SvelteKit, Tailwind & Three.js
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-col gap-4 w-full max-w-xs mx-auto mb-10">
					<button class="btn btn-primary w-full">
						Get Started
					</button>
					<button class="btn btn-secondary w-full">
						Learn More
					</button>
				</div>

				<!-- Feature Cards -->
				<div class="flex flex-col gap-4 max-w-xs mx-auto">
					<div class="card slide-up" style="animation-delay: 0.1s;">
						<h3 class="text-lg font-bold mb-1 text-neon-teal">Fast</h3>
						<p class="text-xs opacity-70">Lightning-fast performance</p>
					</div>
					<div class="card slide-up" style="animation-delay: 0.2s;">
						<h3 class="text-lg font-bold mb-1 text-neon-blue">Modern</h3>
						<p class="text-xs opacity-70">Cutting-edge technologies</p>
					</div>
					<div class="card slide-up" style="animation-delay: 0.3s;">
						<h3 class="text-lg font-bold mb-1 text-neon-purple">Beautiful</h3>
						<p class="text-xs opacity-70">Stunning neon aesthetics</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.slide-up {
		animation: slideUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) both;
	}

	kbd {
		font-family: 'Share Tech Mono', monospace;
		font-size: 0.875rem;
	}
</style>
