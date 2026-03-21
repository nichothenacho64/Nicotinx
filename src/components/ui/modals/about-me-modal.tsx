"use client";

import useAboutImageCrossfade from "@/hooks/use-image-crossfade";
import { ABOUT_IMAGES } from "@/lib/constants";
import { AboutMeImageContainer } from "@/components/features/about-me-image-container";
import AboutMeButtons from "../buttons/about-me-buttons";
import Paragraph1P1 from "@/content/home/paragraph-1p1.mdx";
import Paragraph1P2 from "@/content/home/paragraph-1p2.mdx";
import Paragraph1P3 from "@/content/home/paragraph-1p3.mdx";

export default function AboutMeModal() {
    const { aboutIndex, frontImage, backImage, backImageOpacity, goToNextImage, goToPreviousImage } =
        useAboutImageCrossfade(0);

    const isFirstPage = aboutIndex === 0;
    const isLastPage = aboutIndex === ABOUT_IMAGES.length - 1;

    return (
        <div id="aboutMeModal">
            <div className="flex flex-1 gap-12 responsive-section">
                <div className="w-full md:w-1/2 scrollable-text">
                    {aboutIndex === 0 && <Paragraph1P1 />}
                    {aboutIndex === 1 && <Paragraph1P2 />}
                    {aboutIndex === 2 && <Paragraph1P3 />}
                </div>

                <AboutMeImageContainer
                    frontImage={frontImage}
                    backImage={backImage}
                    backImageOpacity={backImageOpacity}
                />
            </div>

            <AboutMeButtons
                goToPreviousImage={goToPreviousImage}
                goToNextImage={goToNextImage}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
            />
        </div>
    );
}
