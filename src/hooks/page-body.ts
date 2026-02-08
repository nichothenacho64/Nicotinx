"use client";

import { useEffect, useState } from "react";

export function getFooterVisibility(
    footerId: string = "footer",
    navbarId: string = "navbar",
) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const footer = document.getElementById(footerId);
        const navbar = document.getElementById(navbarId);

        if (!footer || !navbar) return;

        const observer = createFooterObserver(footer, navbar, setIsVisible);
        observer.observe(footer);

        const handleResize = () => {
            if (!navbarAlwaysPresent(footer, navbar)) {
                setIsVisible(true);
                return;
            }
        };

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, [footerId, navbarId]);

    return isVisible;
}

function navbarAlwaysPresent(
    footer: HTMLElement,
    navbar: HTMLElement,
): boolean {
    const navbarBottom = navbar.offsetTop + navbar.offsetHeight;

    const footerTop = footer.offsetTop;
    const scrollGap = footerTop - navbarBottom;

    return scrollGap > window.innerHeight;
}

function createFooterObserver(
    footer: HTMLElement,
    navbar: HTMLElement,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
): IntersectionObserver {
    return new IntersectionObserver(
        function onIntersection(entries) {
            const entry = entries[0];

            if (!navbarAlwaysPresent(footer, navbar)) {
                setIsVisible(true);
                return;
            }

            setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0 },
    );
}
