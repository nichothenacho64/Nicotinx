"use client";

import CanvaEmbed from "@/components/canva-embed";
import { CaseStudyKey } from "@/lib/definitions";
import { getCaseStudy } from "@/lib/utils";
import { useState } from "react";
import { CaseStudyButtons, NextPageButton } from "@/ui/buttons";
import { CaseStudyLinksModal } from "@/ui/modals";

export default function Work() {
    const [active, setActive] = useState<CaseStudyKey>("HercuLabs");

    const { title, embedLink, primaryColour } = getCaseStudy(active);

    return (
        <section className="pb-8">
            <div className="mt-15" />
            <h1>Case studies</h1>
            <div className="space-y-6">
                <CaseStudyButtons
                    active={active}
                    setActive={setActive}
                />

                <CanvaEmbed
                    title={title}
                    embedUrl={embedLink}
                    primaryColour={primaryColour}
                />
                <CaseStudyLinksModal active={active} />
                <NextPageButton additionalClass={primaryColour} />
            </div>
        </section>
    );
}
