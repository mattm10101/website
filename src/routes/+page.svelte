<script lang="ts">
	import ThreeScene from '$lib/components/ThreeScene.svelte';
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
</script>

<!-- Desktop Layout (16:9 / 16:10) -->
<div class="hidden desktop:block min-h-screen bg-lab-metal text-neon-teal">
	<div class="relative w-full min-h-screen">
		<!-- Background Grid -->
		<BackgroundGrid />

		<!-- Three.js Background - Fixed Position -->
		<div class="fixed inset-0 z-0">
			<ThreeScene />
		</div>

		<!-- Content Overlay -->
		<div class="relative z-10 min-h-screen flex items-center justify-center">
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

						<h1 class="text-7xl tracking-wide logo-text relative z-10" style="font-weight: 700;">
							<span class="gradient-text">VIRTUΛL</span><span class="text-neon-teal -mx-1 hyphen">-</span><span class="gradient-text-av">ΛV</span>
						</h1>
					</div>
				</div>
				<p class="text-2xl mb-8 text-neon-blue font-light tracking-wide">
					Virtual solutions, extreme performance
				</p>
				<p class="text-lg mb-12 max-w-2xl mx-auto opacity-80">
					All products in open beta
				</p>

				<!-- Action Buttons -->
				<div class="flex gap-6 justify-center">
					<button class="btn btn-primary">
						Get Started
					</button>
					<button class="btn btn-secondary">
						Sign up for beta access
					</button>
				</div>

			</div>
		</div>

		<!-- Corner Info -->
		<div class="absolute bottom-8 right-8 z-10 text-right opacity-60">
			<p class="text-sm">Press <kbd class="px-2 py-1 bg-lab-panel rounded border border-neon-teal">Ctrl+G</kbd> to toggle grid</p>
		</div>
	</div>

	<!-- Product Showcase Sections -->
	<div class="relative z-10 bg-lab-metal">
		<!-- VirtualMix -->
		<section class="product-section py-20 px-8">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-2 gap-16 items-center">
					<div class="fade-in">
						<h2 class="text-5xl font-bold mb-4 text-neon-teal">VirtualMix</h2>
						<p class="text-xl text-gray-300 mb-6">Professional video switching and mixing software that replaces expensive hardware mixers with powerful virtual solutions.</p>
						<a href="/virtualmix" class="inline-block text-neon-blue hover:text-neon-teal transition-colors text-lg">
							Learn more →
						</a>
					</div>
					<div class="product-image-placeholder">
						<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
							<span class="text-gray-500 text-lg">VirtualMix Screenshot</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Extreme Control -->
		<section class="product-section py-20 px-8 bg-gradient-to-b from-lab-metal to-lab-header">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-2 gap-16 items-center">
					<div class="product-image-placeholder order-1">
						<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
							<span class="text-gray-500 text-lg">Extreme Control Screenshot</span>
						</div>
					</div>
					<div class="fade-in order-2">
						<h2 class="text-5xl font-bold mb-4 text-neon-purple">Extreme Control</h2>
						<p class="text-xl text-gray-300 mb-6">Advanced control surface software for precision mixing and production workflows.</p>
						<a href="/extreme-control" class="inline-block text-neon-blue hover:text-neon-purple transition-colors text-lg">
							Learn more →
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- VirtualAudio -->
		<section class="product-section py-20 px-8">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-2 gap-16 items-center">
					<div class="fade-in">
						<h2 class="text-5xl font-bold mb-4 text-neon-blue">VirtualAudio</h2>
						<p class="text-xl text-gray-300 mb-6">Professional audio routing and processing with zero-latency performance.</p>
						<a href="/virtualaudio" class="inline-block text-neon-blue hover:text-neon-teal transition-colors text-lg">
							Learn more →
						</a>
					</div>
					<div class="product-image-placeholder">
						<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
							<span class="text-gray-500 text-lg">VirtualAudio Screenshot</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- EZ 3D -->
		<section class="product-section py-20 px-8 bg-gradient-to-b from-lab-metal to-lab-header">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-2 gap-16 items-center">
					<div class="product-image-placeholder order-1">
						<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
							<span class="text-gray-500 text-lg">EZ 3D Screenshot</span>
						</div>
					</div>
					<div class="fade-in order-2">
						<h2 class="text-5xl font-bold mb-4 text-neon-pink">EZ 3D</h2>
						<p class="text-xl text-gray-300 mb-6">Simple yet powerful 3D graphics and virtual set creation for live productions.</p>
						<a href="/ez-3d" class="inline-block text-neon-blue hover:text-neon-pink transition-colors text-lg">
							Learn more →
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- StreamForge -->
		<section class="product-section py-20 px-8 mb-20">
			<div class="max-w-7xl mx-auto">
				<div class="grid grid-cols-2 gap-16 items-center">
					<div class="fade-in">
						<h2 class="text-5xl font-bold mb-4 gradient-text-streamforge">StreamForge</h2>
						<p class="text-xl text-gray-300 mb-6">Complete streaming and recording solution with advanced encoding and multi-platform support.</p>
						<a href="/streamforge" class="inline-block text-neon-blue hover:text-neon-teal transition-colors text-lg">
							Learn more →
						</a>
					</div>
					<div class="product-image-placeholder">
						<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
							<span class="text-gray-500 text-lg">StreamForge Screenshot</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<!-- Mobile Layout (Portrait) -->
<div class="desktop:hidden min-h-screen bg-lab-metal text-neon-teal">
	<div class="relative w-full min-h-screen">
		<!-- Background Grid -->
		<BackgroundGrid />

		<!-- Three.js Background - Fixed Position -->
		<div class="fixed inset-0 z-0">
			<ThreeScene />
		</div>

		<!-- Content Overlay -->
		<div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
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

						<h1 class="text-5xl tracking-wide logo-text relative z-10" style="font-weight: 700;">
							<span class="gradient-text">VIRTUΛL</span><span class="text-neon-teal -mx-1 hyphen">-</span><span class="gradient-text-av">ΛV</span>
						</h1>
					</div>
				</div>
				<p class="text-xl mb-6 text-neon-blue font-light">
					Virtual solutions, extreme performance
				</p>
				<p class="text-base mb-10 opacity-80">
					All products in open beta
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-col gap-4 w-full max-w-xs mx-auto mb-10">
					<button class="btn btn-primary w-full">
						Get Started
					</button>
					<button class="btn btn-secondary w-full">
						Sign up for beta access
					</button>
				</div>

				<!-- Products List -->
				<div class="flex flex-col gap-3 max-w-xs mx-auto">
					<a href="/virtualmix" class="text-neon-teal hover:text-neon-blue transition-colors text-lg">VirtualMix →</a>
					<a href="/extreme-control" class="text-neon-purple hover:text-neon-pink transition-colors text-lg">Extreme Control →</a>
					<a href="/virtualaudio" class="text-neon-blue hover:text-neon-teal transition-colors text-lg">VirtualAudio →</a>
					<a href="/ez-3d" class="text-neon-pink hover:text-neon-purple transition-colors text-lg">EZ 3D →</a>
					<a href="/streamforge" class="text-neon-teal hover:text-neon-blue transition-colors text-lg">StreamForge →</a>
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

	/* StreamForge gradient */
	.gradient-text-streamforge {
		background: linear-gradient(90deg, #14ffec 0%, #a855f7 50%, #ec4899 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	/* Product sections */
	.product-section {
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.product-image-placeholder {
		transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.product-section:hover .product-image-placeholder {
		transform: scale(1.02);
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
		letter-spacing: 0.1em;
		filter: drop-shadow(0 0 20px rgba(20, 255, 236, 0.6)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.4));
		font-family: 'Exo 2', 'Arial Black', sans-serif;
		text-transform: uppercase;
		font-weight: 700;
	}

	.hyphen {
		position: relative;
		top: -0.15em;
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
