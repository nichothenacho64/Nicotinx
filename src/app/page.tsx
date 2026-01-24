import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<main>
				<section id="aboutMe">
					<div className="w-full md:w-1/2">
						<h1>About me</h1>
						<p>
							Hello! I am Nico, a University student studying both{" "}
							<strong>Interaction Design and Digital Music</strong>,
							and everything in between like sound design! I primarily work as a UI/UX designer based in Sydney,
							in both professional and university-based settings, and as my computer science brother's personal
							interface design assistant for his high-quality personal projects on GitHub (against my own will).
						</p>
						<br />

						<p>
							I am interested in UI/UX design as I have always been fascinated by the middle-ground between technical
							and creative technology-related disciplines; I am hence able to employ{" "}
							<strong>critical thinking, innovation, and creativity</strong>{" "}
							in a new and emerging field that has so much potential to drive positive societal change.
						</p>
						<br />

						<p>
							Outside of my academic and professional life, I love to compose solo piano works and{" "}
							<strong>
								obsessively listen to the music of{" "}
								<a
									className="text-blue-default hover:underline"
									href="https://www.sorabji-archive.co.uk/biography/biography.php"
								>
									Kaikhosru Shapurji Sorabji
								</a>.
							</strong>
						</p>
						<br />
					</div>

					<div className="relative w-full md:w-1/2 h-64 md:h-auto">
						<Image
							src="/images/nico_photo.jpg"
							alt="Photo of Nico"
							fill
							className="rounded-lg object-cover"
							sizes="50vw"
							priority
						/>
					</div>
				</section>

				<section>
					<h1>My approach to design</h1>
					<p>
						I find that my workflow is very linear and structured, as I place a lot of value on attention-to-detail
						(sometimes too much to the point of insanity) on ensuring that the design process is done thoroughly.
						I always enjoy doing this in various working environments, from spending a long time alone, to medium-sized
						projects where I can have lots of fun working with like-minded designers. Additionally, my experience in
						Python has allowed me to manifest my design skills effectively in my own personal projects such as websites
						and simple applications, so in this sense, I combine design and programming as a means of problem solving.
						I suspect that you are here to see my competence as a designer not a programmer, so these case studies are
						projects in which I have done little to no programming. From this portfolio, you will see that I am very
						much a visual thinker and that I love making everything into diagrams that illustrate information more clearly.
					</p>
					<br />
					<p>
						To me, being an impactful designer is more than just learning and applying techniques for design research,
						ideation, and prototyping. It is about challenging my biases and putting myself outside of my comfort zone
						through empathising with users. My design journey has helped me to reflect on not only my purpose as a designer
						– to not only improve the lives of people by creating better solutions, but also as an agent of positive change
						that maintains the honesty of design as a discipline.
					</p>
					<br />

					<p>I’m excited to be a part of the future of design!</p>
					<br />
				</section>
			</main>
		</div>
	);
}