import { useEffect, useRef } from "react";
import * as THREE from "three";
import "../ui/styles.css";
import { About } from "./About";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import SplashCursor from "./SplashCursor";

declare module "react" {
	interface CSSProperties {
		"--i"?: number;
	}
}

const Home = () => {
	const canvasContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!canvasContainerRef.current) return;

		const container = canvasContainerRef.current;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		const particlesGeometry = new THREE.BufferGeometry();
		const particlesCount = 2000;

		const posArray = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * 5;
		}

		particlesGeometry.setAttribute(
			"position",
			new THREE.BufferAttribute(posArray, 3),
		);

		const particlesMaterial = new THREE.PointsMaterial({
			size: 0.005,
			color: 0x00ffff,
		});

		const particlesMesh = new THREE.Points(
			particlesGeometry,
			particlesMaterial,
		);
		scene.add(particlesMesh);

		const gridHelper = new THREE.GridHelper(10, 10, 0x00ffff, 0xff00ff);
		gridHelper.position.y = -2;
		scene.add(gridHelper);

		camera.position.z = 3;

		const animate = () => {
			requestAnimationFrame(animate);

			particlesMesh.rotation.y += 0.001;
			particlesMesh.rotation.x -= 0.0005;

			renderer.render(scene, camera);
		};

		animate();

		const handleMouseMove = (e: { clientX: number; clientY: number }) => {
			const mouseX = e.clientX / window.innerWidth - 0.5;
			const mouseY = e.clientY / window.innerHeight - 0.5;

			particlesMesh.rotation.y = mouseX * 0.5;
			particlesMesh.rotation.x = -mouseY * 0.5;
		};

		window.addEventListener("mousemove", handleMouseMove);

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		const handleScroll = () => {
			const scrollY = window.scrollY;
			particlesMesh.rotation.z = scrollY * 0.001;
		};

		window.addEventListener("scroll", handleScroll);

		const applyGlitchEffect = () => {
			const glitchTexts = document.querySelectorAll(".logo");

			for (const text of glitchTexts) {
				const randomDelay = Math.random() * 0.5;
				const htmlText = text as HTMLElement;
				htmlText.style.animation = "none";
				setTimeout(() => {
					htmlText.style.animation = "glitch 0.5s infinite";
				}, randomDelay);

				if (Math.random() > 0.5) {
					htmlText.style.textShadow = "0 0 8px #0ff, 0 0 12px #0ff";
				} else {
					htmlText.style.textShadow = "0 0 8px #f0f, 0 0 12px #f0f";
				}
			}

			setTimeout(() => {
				for (const text of glitchTexts) {
					const htmlText = text as HTMLElement;
					htmlText.style.animation = "none";
				}
			}, 500);
		};

		const glitchInterval = setInterval(applyGlitchEffect, 5000);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
			clearInterval(glitchInterval);

			if (renderer && container.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement);
			}

			particlesMaterial.dispose();
			particlesGeometry.dispose();
			renderer.dispose();
		};
	}, []);

	return (
		<>
			<div className="noise" />
			<div className="scanline" />
			<div id="canvas-container" ref={canvasContainerRef} />
			<SplashCursor />
			<div className="container">
				<header>
					<div className="logo">ryone</div>
					<nav>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a
									href="https://blog.ryone.dev"
									target="_blank"
									rel="noopener noreferrer"
								>
									Blog
								</a>
							</li>
						</ul>
					</nav>
				</header>

				<Hero />

				<About />

				<Footer />
			</div>
		</>
	);
};

export default Home;
