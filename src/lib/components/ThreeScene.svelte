<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let animationId: number;

	onMount(() => {
		init();
		animate();

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			renderer?.dispose();
		};
	});

	function init() {
		// Scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x000000);

		// Camera
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		container.appendChild(renderer.domElement);

		// Example: Add a rotating cube
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		// Handle resize
		window.addEventListener('resize', onResize);
	}

	function onResize() {
		if (!container || !camera || !renderer) return;

		camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(container.clientWidth, container.clientHeight);
	}

	function animate() {
		animationId = requestAnimationFrame(animate);

		// Rotate the cube
		if (scene.children.length > 0) {
			scene.children.forEach((child) => {
				if (child instanceof THREE.Mesh) {
					child.rotation.x += 0.01;
					child.rotation.y += 0.01;
				}
			});
		}

		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class="w-full h-full"></div>
