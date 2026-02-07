"use client";

import { useCallback, useEffect, useState } from "react";
import { SectionMeta } from "@/lib/definitions";
import type React from "react";

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

export function useScrollableSectionEnterObserver(
    sectionIndex: number,
    sectionRef: React.RefObject<HTMLElement | null>,
    setHasEnteredSection: React.Dispatch<React.SetStateAction<boolean>>,
    threshold: number = 0.35,
) {
    const handleIntersect = useCallback(
        (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver,
        ) => {
            const entry = entries[0];
            if (!entry) return;

            if (entry.isIntersecting) {
                setHasEnteredSection(true);
                observer.disconnect();
            }
        },
        [setHasEnteredSection],
    );

    useEffect(() => {
        const node = sectionRef.current;
        if (sectionIndex <= 0 || !node) return;

        const observer = new IntersectionObserver(handleIntersect, {
            threshold,
        });
        observer.observe(node);

        return () => observer.disconnect();
    }, [sectionIndex, sectionRef, threshold, handleIntersect]);
}

export function useMarkPreviousSectionWhenEntered(
    sectionIndex: number,
    sectionRef: React.RefObject<HTMLElement | null>,
    hasEnteredSection: boolean,
) {
    useEffect(() => {
        if (!hasEnteredSection || sectionIndex <= 0) return;

        const node = sectionRef.current;
        if (!node) return;

        const prevSection = node.previousElementSibling;
        if (!(prevSection instanceof HTMLElement)) return;
        if (prevSection.dataset.scrollSection !== "true") return;

        prevSection.dataset.nextEntered = "true";
    }, [hasEnteredSection, sectionIndex, sectionRef]);
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
