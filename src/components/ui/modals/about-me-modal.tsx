import { useState } from "react";
import Image from "next/image";

export default function AboutMeModal() {
    const [aboutIndex, setAboutIndex] = useState(0);

    return (
        <div id="aboutMeModal">
            <div className="flex flex-1 gap-12 responsive-section">
                <div className="w-full md:w-1/2 scrollable-text">
                    <h1>About me</h1>
                    {aboutIndex === 0 && (
                        <p>
                            Hello! I am Nico, a University student studying both{" "}
                            <strong>Interaction Design and Digital Music</strong>, and everything in between like sound design!
                            I primarily work as a UI/UX designer based in Sydney, in both professional and university-based settings,
                            and as my computer science brother's personal interface design assistant for his high-quality personal
                            projects on GitHub (against my own will).
                        </p>
                    )}

                    {aboutIndex === 1 && (
                        <p>
                            I am interested in UI/UX design as I have always been fascinated by the middle-ground between technical
                            and creative technology-related disciplines; I am hence able to employ{" "}
                            <strong>critical thinking, innovation, and creativity</strong>{" "}
                            in a new and emerging field that has so much potential to drive positive societal change.
                        </p>
                    )}

                    {aboutIndex === 2 && (
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
                    )}
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
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    className="small-button bg-(--blue-default)"
                    onClick={() => setAboutIndex((i) => Math.max(i - 1, 0))}
                    disabled={aboutIndex === 0}
                >
                    ← Say less
                </button>
                <button
                    className="small-button bg-(--blue-default)"
                    onClick={() => setAboutIndex((i) => Math.min(i + 1, 2))}
                    disabled={aboutIndex === 2}
                >
                    Say more →
                </button>
            </div>
        </div>
    );
}