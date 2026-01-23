"use client";

import CanvaEmbed from "@/components/canva-embed";
import { CaseStudyKey } from "@/lib/definitions";
import { getCaseStudy } from "@/lib/utils";
import { useState } from "react";
import { CaseStudyButtons } from "@/ui/buttons";
import { CaseStudyLinksPanel } from "@/ui/panels";

export default function Work() {
    const [active, setActive] = useState<CaseStudyKey>("HercuLabs");

    const { title, embedLink, primaryColour } = getCaseStudy(active);

    return (
        <div>
            <main>
                <h1>Case studies</h1><br />
                <section className="space-y-6">
                    <CaseStudyButtons
                        active={active}
                        setActive={setActive}
                    />

                    <CanvaEmbed
                        title={title}
                        embedUrl={embedLink}
                        primaryColour={primaryColour}
                    />
                    <CaseStudyLinksPanel active={active} />
                </section>
                <br />
            </main>
        </div>
    );
}
