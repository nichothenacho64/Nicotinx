"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollySectionProps } from "@/lib/definitions";
import {
    useMarkingSectionObserver,
    useScrollableSectionEnterObserver,
} from "@/hooks/scrollable-section-observers";
import { useScrollableSectionIndexMeta } from "@/hooks/meta";
import { DownArrow } from "@/components/ui/icons";

export default function ScrollableSection({
    children,
}: ScrollySectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [hasEnteredSection, setHasEnteredSection] = useState(false);
    const { sectionIndex, isFinalSection } = useScrollableSectionIndexMeta(sectionRef);

    useEffect(() => {
        if (sectionIndex === 0) {
            setHasEnteredSection(true);
        }
    }, [sectionIndex]);

    useScrollableSectionEnterObserver(sectionIndex, sectionRef, setHasEnteredSection);
    useMarkingSectionObserver(sectionIndex, sectionRef, hasEnteredSection);

    return (
        <section
            className={isFinalSection ? "scrollable-section-tail" : "scrollable-section"}
            ref={sectionRef}
            data-scroll-section="true"
        >
            <div
                className="inner-scrollable-section"
                data-entered={hasEnteredSection ? "true" : "false"}
            >
                {children}
            </div>
            {!isFinalSection && (
                <div className="scroll-down-indicator" aria-hidden="true">
                    <DownArrow className="scroll-down-arrow" />
                </div>
            )}
        </section>
    );
}
