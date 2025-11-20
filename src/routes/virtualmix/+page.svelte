<script lang="ts">
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
</script>

<svelte:head>
	<title>VirtualMix - Virtual AV</title>
</svelte:head>

<div class="min-h-screen bg-lab-metal text-neon-teal">
	<BackgroundGrid />

	<!-- Hero Section -->
	<section class="relative z-10 min-h-screen flex items-center justify-center px-8">
		<div class="max-w-6xl mx-auto text-center fade-in">
			<h1 class="text-7xl font-bold mb-6 text-neon-teal" style="font-family: 'Exo 2';">
				VirtualMix
			</h1>
			<p class="text-3xl mb-8 text-gray-300 font-light max-w-3xl mx-auto">
				Professional video switching and mixing without the hardware
			</p>
			<p class="text-xl mb-12 opacity-70 max-w-2xl mx-auto">
				Replace expensive hardware mixers with powerful, flexible virtual solutions. Mix, switch, and produce professional video content from anywhere.
			</p>
			<div class="flex gap-6 justify-center">
				<button class="btn btn-primary text-lg px-8 py-4">Download Beta</button>
				<button class="btn btn-secondary text-lg px-8 py-4">View Documentation</button>
			</div>
		</div>
	</section>

	<!-- Feature Showcase 1 -->
	<section class="relative z-10 py-32 px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-2 gap-20 items-center">
				<div>
					<h2 class="text-5xl font-bold mb-6 text-neon-blue">Professional Mixing</h2>
					<p class="text-xl text-gray-300 leading-relaxed mb-6">
						All the power of a hardware video mixer in software form. Switch between sources, add transitions, overlay graphics, and control everything from a single interface.
					</p>
					<ul class="space-y-3 text-lg text-gray-400">
						<li class="flex items-start gap-3">
							<span class="text-neon-teal">✓</span>
							<span>Unlimited video inputs and outputs</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-teal">✓</span>
							<span>Hardware-accelerated processing</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-teal">✓</span>
							<span>Professional transitions and effects</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-teal">✓</span>
							<span>Multi-view monitoring</span>
						</li>
					</ul>
				</div>
				<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
					<span class="text-gray-500 text-xl">Main Interface Screenshot</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Feature Showcase 2 -->
	<section class="relative z-10 py-32 px-8 bg-gradient-to-b from-transparent via-lab-header to-transparent">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-2 gap-20 items-center">
				<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center order-1">
					<span class="text-gray-500 text-xl">Transitions Screenshot</span>
				</div>
				<div class="order-2">
					<h2 class="text-5xl font-bold mb-6 text-neon-purple">Smooth Transitions</h2>
					<p class="text-xl text-gray-300 leading-relaxed mb-6">
						Professional broadcast-quality transitions that make your productions stand out. From simple cuts to complex stingers and wipes.
					</p>
					<ul class="space-y-3 text-lg text-gray-400">
						<li class="flex items-start gap-3">
							<span class="text-neon-purple">✓</span>
							<span>Cut, fade, merge, and more</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-purple">✓</span>
							<span>Custom stinger support</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-purple">✓</span>
							<span>Adjustable transition duration</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Feature Showcase 3 -->
	<section class="relative z-10 py-32 px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-2 gap-20 items-center">
				<div>
					<h2 class="text-5xl font-bold mb-6 text-neon-pink">Powerful Overlays</h2>
					<p class="text-xl text-gray-300 leading-relaxed mb-6">
						Layer graphics, titles, and effects over your video sources. Full control over positioning, scaling, and animation.
					</p>
					<ul class="space-y-3 text-lg text-gray-400">
						<li class="flex items-start gap-3">
							<span class="text-neon-pink">✓</span>
							<span>Lower thirds and titles</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-pink">✓</span>
							<span>Logo overlays</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-pink">✓</span>
							<span>Picture-in-picture</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-neon-pink">✓</span>
							<span>Green screen keying</span>
						</li>
					</ul>
				</div>
				<div class="aspect-video bg-lab-panel rounded-lg border border-gray-700 flex items-center justify-center">
					<span class="text-gray-500 text-xl">Overlays Screenshot</span>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="relative z-10 py-32 px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-6xl font-bold mb-6 text-neon-teal">Ready to get started?</h2>
			<p class="text-2xl mb-12 text-gray-300">
				Join the open beta and experience the future of video production.
			</p>
			<div class="flex gap-6 justify-center">
				<button class="btn btn-primary text-xl px-10 py-5">Download VirtualMix Beta</button>
			</div>
			<p class="text-gray-500 mt-8">Free during beta • Available for Windows, Mac, and Linux</p>
		</div>
	</section>

	<!-- Back to Home -->
	<div class="relative z-10 pb-20 px-8">
		<div class="max-w-7xl mx-auto text-center">
			<a href="/" class="inline-block text-neon-blue hover:text-neon-teal transition-colors text-lg">
				← Back to all products
			</a>
		</div>
	</div>
</div>

<style>
	.fade-in {
		animation: fadeIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
