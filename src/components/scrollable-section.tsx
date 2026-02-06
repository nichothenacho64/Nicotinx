"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollySectionProps } from "@/lib/definitions";
import {
    useScrollableSectionIndexMeta,
    useScrollableSectionEnterObserver,
} from "@/lib/navigation/scrollable-section-observer";

export function ScrollableSection({
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
        </section>
    );
}
