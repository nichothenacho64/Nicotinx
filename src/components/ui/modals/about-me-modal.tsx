"use client";

import useAboutImageCrossfade from "@/hooks/use-image-crossfade";
import { ABOUT_IMAGES } from "@/lib/constants";
import { AboutMeImageContainer } from "@/components/features/about-me-image-container";
import AboutMeButtons from "../buttons/about-me-buttons";
import Link from "next/link";

export default function AboutMeModal() {
    const { aboutIndex, frontImage, backImage, backImageOpacity, goToNextImage, goToPreviousImage } =
        useAboutImageCrossfade(0);

    const isFirstPage = aboutIndex === 0;
    const isLastPage = aboutIndex === ABOUT_IMAGES.length - 1;

    return (
        <div id="aboutMeModal">
            <div className="flex flex-1 gap-12 responsive-section">
                <div className="w-full md:w-1/2 scrollable-text">
                    {aboutIndex === 0 && (
                        <>
                            <h1>Hey! I'm <span className="text-blue-default">Nico Napoli</span>, a UX/UI designer, based in Sydney.</h1>
                            <p>
                                I am a lifelong learner with a multitude of passions from UX and UI design to sound design.
                            </p>
                        </>
                    )}

                    {aboutIndex === 1 && (
                        <>
                            <h1>Why design?</h1>
                            <p>
                                I am interested in UX/UI design as I have always been fascinated by the middle-ground between technical
                                and creative technology-related disciplines; I am hence able to employ{" "}
                                <strong>critical thinking, innovation, and creativity</strong>{" "}
                                in a new and emerging field that has so much potential to drive positive societal change.
                            </p>
                        </>
                    )}

                    {aboutIndex === 2 && (
                        <>
                            <h1>What about outside of design?</h1>
                            <p>
                                Outside of my academic and professional life, I love to compose solo piano works and{" "}
                                <strong>
                                    obsessively listen  to the music of{" "}
                                    <Link
                                        className="text-blue-default hover:underline"
                                        href="https://www.sorabji-archive.co.uk/biography/biography.php"
                                    >
                                        Kaikhosru Shapurji Sorabji
                                    </Link>.
                                </strong>
                            </p>
                        </>
                    )}
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
