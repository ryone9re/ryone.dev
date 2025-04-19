export function About() {
	const skills = [
		"Rust",
		"Haskell",
		"Distributed Systems",
		"Dog",
		"Lo-Fi",
		"Sakanaction",
		"Gyudon",
	];

	return (
		<section id="about" className="about">
			<h2 className="section-title">About Me</h2>
			<div className="about-content">
				<div className="about-text">
					<p>
						I am a passionate server-side engineer with a deep love for Rust and
						functional programming languages. My expertise lies in building
						robust backend systems, and I'm particularly fascinated by
						distributed systems and their complex architectural challenges.
					</p>
					<p style={{ marginTop: "1rem" }}>
						When I'm not coding, you can find me reading technical books to
						broaden my knowledge or spending quality time with my dog.
					</p>
					<div className="skills">
						{skills.map((skill) => (
							<div key={skill} className="skill-tag">
								{skill}
							</div>
						))}
					</div>
				</div>
				<div className="about-image">{/* ▼ */}</div>
			</div>
		</section>
	);
}
