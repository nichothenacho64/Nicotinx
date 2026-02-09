"use client";

import "@/styles/home.css";
import NextPageButton from "@/components/ui/buttons/next-page-button";
import ScrollableSection from "@/components/features/scrollable-section";
import AboutMeModal from "@/components/ui/modals/about-me-modal";


export default function Home() {
	return (
		<>
			<ScrollableSection>
				<AboutMeModal />
			</ScrollableSection>

			<ScrollableSection>
				<div className="scrollable-text">
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
				</div>
			</ScrollableSection>

			<ScrollableSection>
				<div className="py-0 scrollable-text">
					<h1>My design journey</h1>
					<p>
						To me, being an impactful designer is more than just learning and applying techniques for design research,
						ideation, and prototyping. It is about challenging my biases and putting myself outside of my comfort zone
						through empathising with users. My design journey has helped me to reflect on not only my purpose as a designer
						– to not only improve the lives of people by creating better solutions, but also as an agent of positive change
						that maintains the honesty of design as a discipline.
					</p>

					<p className="mt-6">
						I’m excited to be a part of the future of design!
					</p>

					<div className="mt-8">
						<NextPageButton />
					</div>
				</div>
			</ScrollableSection>
		</>
	);
}
