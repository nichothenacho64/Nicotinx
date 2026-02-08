"use client";

import { useCallback, useEffect } from "react";
import type React from "react";

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

export function useMarkingSectionObserver(
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
