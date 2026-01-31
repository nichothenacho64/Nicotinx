"use client";

import { useEffect, useState } from "react";
import { CASE_STUDIES, CANVA_LINK } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";

export function getCaseStudy(title: CaseStudyKey) {
    const { page, primaryColour } = CASE_STUDIES[title];

    return {
        title,
        embedLink: `${CANVA_LINK}#page-${page}`,
        primaryColour,
    };
}

export function getFooterVisibility(footerId: string = "footer") {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const footer = document.getElementById(footerId);
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting); // hide the navbar when the footer is visible
            },
            { threshold: 0 },
        );

        observer.observe(footer);
        return () => observer.disconnect();
    }, [footerId]);

    return isVisible;
}

export function lockBodyScroll(isLocked: boolean) {
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
