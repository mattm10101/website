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
				<!-- Logo with border frame -->
				<div class="inline-block mb-8">
					<div class="logo-frame p-6 border-2 border-neon-teal rounded-xl relative overflow-hidden">
						<!-- Scan lines effect -->
						<div class="scan-lines"></div>

						<!-- Waveform accent -->
						<div class="absolute top-2 right-2 opacity-30 z-10">
							<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 8 L4 4 L8 12 L12 2 L16 10 L20 6 L24 14 L28 4 L32 8" stroke="currentColor" stroke-width="2" class="text-neon-purple"/>
							</svg>
						</div>

						<h1 class="text-7xl font-black tracking-wide logo-text relative z-10" style="font-weight: 900;">
							<span class="gradient-text">VIRTUΛL</span><span class="text-neon-teal -mx-1">-</span><span class="gradient-text-av">ΛV</span>
						</h1>
					</div>
				</div>
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
				<!-- Logo with border frame -->
				<div class="inline-block mb-8">
					<div class="logo-frame p-4 border-2 border-neon-teal rounded-xl relative overflow-hidden">
						<!-- Scan lines effect -->
						<div class="scan-lines"></div>

						<!-- Waveform accent -->
						<div class="absolute top-1 right-1 opacity-30 z-10">
							<svg width="24" height="12" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 8 L4 4 L8 12 L12 2 L16 10 L20 6 L24 14 L28 4 L32 8" stroke="currentColor" stroke-width="2" class="text-neon-purple"/>
							</svg>
						</div>

						<h1 class="text-5xl font-black tracking-wide logo-text relative z-10" style="font-weight: 900;">
							<span class="gradient-text">VIRTUΛL</span><span class="text-neon-teal -mx-1">-</span><span class="gradient-text-av">ΛV</span>
						</h1>
					</div>
				</div>
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

	/* Logo Frame */
	.logo-frame {
		background: linear-gradient(135deg, rgba(20, 255, 236, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
		box-shadow: 0 0 30px rgba(20, 255, 236, 0.3), inset 0 0 20px rgba(20, 255, 236, 0.05);
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		border-radius: 0.75rem;
	}

	.logo-frame:hover {
		box-shadow: 0 0 40px rgba(20, 255, 236, 0.5), inset 0 0 30px rgba(20, 255, 236, 0.1);
		transform: translateY(-2px);
	}

	/* Scan lines effect */
	.scan-lines {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(20, 255, 236, 0.03) 2px,
			rgba(20, 255, 236, 0.03) 4px
		);
		pointer-events: none;
		z-index: 1;
		animation: scan-animation 8s linear infinite;
	}

	@keyframes scan-animation {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(4px);
		}
	}

	.logo-text {
		letter-spacing: 0.08em;
		filter: drop-shadow(0 0 20px rgba(20, 255, 236, 0.6)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.4));
		font-family: 'Rajdhani', 'Arial Black', sans-serif;
		text-transform: uppercase;
		font-weight: 700;
	}

	/* Gradient text for VIRTUAL */
	.gradient-text {
		background: linear-gradient(135deg, #14ffec 0%, #00d0ff 40%, #a855f7 70%, #ec4899 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient-shift 4s ease infinite;
		background-size: 200% auto;
	}

	/* Gradient text for AV with more emphasis */
	.gradient-text-av {
		background: linear-gradient(135deg, #a855f7 0%, #ec4899 40%, #00d0ff 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient-shift 4s ease infinite;
		background-size: 200% auto;
		margin-left: 0.1em;
		font-weight: 900;
		transform: scale(1.05);
		display: inline-block;
		letter-spacing: 0.05em;
	}

	@keyframes gradient-shift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
