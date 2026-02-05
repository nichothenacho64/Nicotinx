"use client";

import { useEffect, useState, useCallback } from "react";
import {
    CASE_STUDIES,
    CANVA_LINK,
    DOTS_INTERVAL,
    MAX_DOTS,
} from "@/lib/constants";
import { CaseStudyKey, ContactContextValue } from "@/lib/definitions";

export function getCaseStudy(title: CaseStudyKey) {
    const { page, primaryColour } = CASE_STUDIES[title];

    return {
        title,
        embedLink: `${CANVA_LINK}#page-${page}`,
        primaryColour,
    };
}

function lockBodyScroll(isLocked: boolean) {
    useEffect(() => {
        if (!isLocked) {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            return;
        }

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isLocked]);
}

export function useContactModal(): ContactContextValue {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    lockBodyScroll(isOpen);

    return { isOpen, open, close };
}

export function useAnimatedDots(active: boolean) {
    const [dots, setDots] = useState(0);

    useEffect(() => {
        if (!active) {
            setDots(0);
            return;
        }

        const interval = setInterval(() => {
            setDots((previousDots) => (previousDots + 1) % (MAX_DOTS + 1));
        }, DOTS_INTERVAL);

        return () => clearInterval(interval);
    }, [active]);

    return dots;
}
