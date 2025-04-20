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
						Sorry—this is where I *should* list my tech passions and strongest
						stacks, but I’m a slightly un‑serious engineer, so… nothing here.
						Appreciate you stopping by anyway.
					</p>
					<p style={{ marginTop: "1rem" }}>
						Side gigs? I’m always game—*if* the pay’s on point. If I name a
						number first I end up looking like the villain, so hit me with your
						offer. I’m chill: buy me some legit <strong>yakiniku</strong>yakiniku and we’re square.
					</p>
					<p style={{ marginTop: "1rem" }}>
						(Geeks write their bios like this, right?)
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
