"use client";

import "@/styles/home.css";
import NextPageButton from "@/components/ui/buttons/next-page-button";
import ScrollableSection from "@/components/features/scrollable-section";
import AboutMeModal from "@/components/ui/modals/about-me-modal";
import Paragraph2 from "@/content/home/paragraph-2.mdx";

export default function Home() {
	return (
		<>
			<ScrollableSection>
				<AboutMeModal />
			</ScrollableSection>

			<ScrollableSection>
				<div className="py-0 scrollable-text">
					<Paragraph2 />
					<NextPageButton className="mt-8" />
				</div>
			</ScrollableSection>
		</>
	);
}
