"use client";

import CanvaEmbed from "@/components/canva-embed";
// import { CASE_STUDIES } from "@/lib/navigation";
import { CaseStudyKey } from "@/lib/definitions";
import { getCaseStudy } from "@/lib/utils";
import { useState } from "react";
import { CaseStudyButtons } from "@/ui/buttons";

export default function About() {
    const [active, setActive] = useState<CaseStudyKey>("HercuLabs");

    const { embedLink, colour } = getCaseStudy(active);

    console.log(embedLink);

    return (
        <div>
            <main>
                <h1>About me</h1><br />
                <p>
                    Hello! I am Nico, a University student studying both <strong>Interaction Design and Digital Music</strong>,
                    and everything in between like sound design! I primarily work as a UI/UX designer based in Sydney,
                    in both professional and university-based settings, and as my computer science brother's personal
                    interface design assistant for his high-quality personal projects on GitHub (against my own will).<br />
                </p><br />
                <p>

                    I am interested in UI/UX design as I have always been fascinated by the middle-ground between technical
                    and creative technology-related disciplines; I am hence able to employ <strong>critical thinking, innovation,
                        and creativity</strong> in a new and emerging field that has so much potential to drive positive societal change.<br />
                </p><br />
                <p>
                    Outside of my academic and professional life, I love to compose solo piano works and <strong>obsessively listen
                        to the music of <a className="text-blue-default hover:underline" href="https://www.sorabji-archive.co.uk/biography/biography.php">Kaikhosru Shapurji Sorabji</a>.</strong>
                </p><br />
                <h1>Case studies</h1><br />
                <section className="space-y-6">
                    <CaseStudyButtons
                        active={active}
                        setActive={setActive}
                    />

                    <CanvaEmbed
                        embedUrl={embedLink}
                        title="Case Studies"
                        colour={colour}
                    />
                </section>
                <br />
            </main>
        </div>
    );
}
