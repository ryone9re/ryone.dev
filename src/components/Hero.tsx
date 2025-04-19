import type { CSSProperties } from "react";
import ASCIIText from "./ASCIIText";

export function Hero() {
	const createEmojiParticles = () => {
		const numParticles = 30;
		const container = document.body;

		const emojis = ["👏", "🙌", "👍", "✋", "💯"];

		for (let i = 0; i < numParticles; i++) {
			const emoji = emojis[Math.floor(Math.random() * emojis.length)];

			const particle = document.createElement("div");
			particle.textContent = emoji;
			particle.className = "emoji-particle";

			const button = document.querySelector(".cta-button");
			if (!button) continue;

			const buttonRect = button.getBoundingClientRect();
			const startX = buttonRect.left + buttonRect.width / 2;
			const startY = buttonRect.top + buttonRect.height / 2;

			const angle = Math.random() * Math.PI * 2;
			const distance = 100 + Math.random() * 300;
			const tx = Math.cos(angle) * distance;
			const ty = Math.sin(angle) * distance;

			const rotation = (Math.random() - 0.5) * 360;

			particle.style.setProperty("--tx", `${tx}px`);
			particle.style.setProperty("--ty", `${ty}px`);
			particle.style.setProperty("--rot", `${rotation}deg`);

			particle.style.left = `${startX}px`;
			particle.style.top = `${startY}px`;

			container.appendChild(particle);

			setTimeout(() => {
				if (container.contains(particle)) {
					container.removeChild(particle);
				}
			}, 2000);
		}
	};

	return (
		<section className="hero">
			<ASCIIText text="ryone" asciiFontSize={8} />
			<h1 className="hero-text neon-flicker">
				{Array.from("ryone").map((char, index) => (
					<span
						key={char}
						style={
							{
								"--i": index + 1,
								fontFamily: "'Neonderthaw', cursive",
							} as CSSProperties
						}
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</h1>
			<p className="hero-subtext neon-glow">Digital digitaler</p>
			<button
				type="button"
				className="cta-button"
				onClick={createEmojiParticles}
			>
				✋️ Hi Five!
			</button>
		</section>
	);
}
