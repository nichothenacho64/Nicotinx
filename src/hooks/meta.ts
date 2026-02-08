"use client";

import { useEffect, useState, useCallback } from "react";
import { SectionMeta } from "@/lib/definitions";

function computeSectionMeta(node: HTMLElement): SectionMeta | null {
    const scrollableSections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-scroll-section="true"]'),
    );
    const index = scrollableSections.indexOf(node);
    if (index < 0) return null;

    return {
        index,
        isFinalSection: index === scrollableSections.length - 1,
    };
}

export function useScrollableSectionIndexMeta(
    sectionRef: React.RefObject<HTMLElement | null>,
) {
    const [sectionIndex, setSectionIndex] = useState(-1);
    const [isFinalSection, setIsFinalSection] = useState(false);

    const updateMeta = useCallback(() => {
        const node = sectionRef.current;
        if (!node) return;

        const meta = computeSectionMeta(node);
        if (!meta) return;

        setSectionIndex(meta.index);
        setIsFinalSection(meta.isFinalSection);
    }, [sectionRef]);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        updateMeta();

        const observer = new MutationObserver(updateMeta);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener("resize", updateMeta);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateMeta);
        };
    }, [sectionRef, updateMeta]);

    return { sectionIndex, isFinalSection };
}
