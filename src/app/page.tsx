"use client";

import "@/styles/home.css";
import NextPageButton from "@/components/ui/buttons/next-page-button";
import ScrollableSection from "@/components/features/scrollable-section";
import AboutMeModal from "@/components/ui/modals/about-me-modal";
import Paragraph2 from "@/content/home/paragraph-2.mdx";
import Paragraph3 from "@/content/home/paragraph-3.mdx";


export default function Home() {
	return (
		<>
			<ScrollableSection>
				<AboutMeModal />
			</ScrollableSection>

			<ScrollableSection>
				<div className="scrollable-text">
					<Paragraph2 />
				</div>
			</ScrollableSection>

			<ScrollableSection>
				<div className="py-0 scrollable-text">
					<Paragraph3 />

					<div className="mt-8">
						<NextPageButton />
					</div>
				</div>
			</ScrollableSection>
		</>
	);
}
