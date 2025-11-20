<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let animationId: number;
	let meshes: THREE.Mesh[] = [];
	let time = 0;

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
		scene.background = new THREE.Color(0x1f1f23);
		scene.fog = new THREE.Fog(0x1f1f23, 10, 50);

		// Camera
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 15;

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		container.appendChild(renderer.domElement);

		// Lighting
		const ambientLight = new THREE.AmbientLight(0x14ffec, 0.3);
		scene.add(ambientLight);

		const pointLight1 = new THREE.PointLight(0x14ffec, 1, 100);
		pointLight1.position.set(10, 10, 10);
		scene.add(pointLight1);

		const pointLight2 = new THREE.PointLight(0x00d0ff, 1, 100);
		pointLight2.position.set(-10, -10, 10);
		scene.add(pointLight2);

		const pointLight3 = new THREE.PointLight(0xa855f7, 0.8, 100);
		pointLight3.position.set(0, 10, -10);
		scene.add(pointLight3);

		// Create multiple geometric shapes with neon colors
		createNeonShapes();

		// Handle resize
		window.addEventListener('resize', onResize);
	}

	function createNeonShapes() {
		const colors = [0x14ffec, 0x00d0ff, 0xa855f7, 0xec4899];
		const geometries = [
			new THREE.TorusGeometry(1, 0.4, 16, 100),
			new THREE.OctahedronGeometry(1.2),
			new THREE.IcosahedronGeometry(1),
			new THREE.TetrahedronGeometry(1.5)
		];

		for (let i = 0; i < 12; i++) {
			const geometry = geometries[i % geometries.length];
			const color = colors[i % colors.length];

			const material = new THREE.MeshStandardMaterial({
				color: color,
				wireframe: true,
				emissive: color,
				emissiveIntensity: 0.5,
				metalness: 0.8,
				roughness: 0.2
			});

			const mesh = new THREE.Mesh(geometry, material);

			// Random position in 3D space
			mesh.position.x = (Math.random() - 0.5) * 30;
			mesh.position.y = (Math.random() - 0.5) * 30;
			mesh.position.z = (Math.random() - 0.5) * 30;

			// Random rotation
			mesh.rotation.x = Math.random() * Math.PI;
			mesh.rotation.y = Math.random() * Math.PI;

			// Store random speeds for animation
			(mesh as any).rotationSpeed = {
				x: (Math.random() - 0.5) * 0.02,
				y: (Math.random() - 0.5) * 0.02,
				z: (Math.random() - 0.5) * 0.02
			};

			meshes.push(mesh);
			scene.add(mesh);
		}
	}

	function onResize() {
		if (!container || !camera || !renderer) return;

		camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(container.clientWidth, container.clientHeight);
	}

	function animate() {
		animationId = requestAnimationFrame(animate);
		time += 0.01;

		// Animate meshes
		meshes.forEach((mesh, index) => {
			const speed = (mesh as any).rotationSpeed;
			mesh.rotation.x += speed.x;
			mesh.rotation.y += speed.y;
			mesh.rotation.z += speed.z;

			// Floating motion
			mesh.position.y += Math.sin(time + index) * 0.01;

			// Pulsing emissive intensity
			const material = mesh.material as THREE.MeshStandardMaterial;
			material.emissiveIntensity = 0.3 + Math.sin(time * 2 + index) * 0.2;
		});

		// Slowly rotate camera
		camera.position.x = Math.sin(time * 0.1) * 2;
		camera.position.y = Math.cos(time * 0.15) * 2;
		camera.lookAt(scene.position);

		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class="w-full h-full"></div>
