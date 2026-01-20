"use client";

import { useEffect, useState } from "react";

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
