"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollySectionProps } from "@/lib/definitions";

export function ScrollySection({
    children,
    index,
    isLast = false,
}: ScrollySectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [hasEnteredSection, setHasEnteredSection] = useState(index === 0);

    useEffect(() => {
        if (index === 0 || !sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEnteredSection(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [index]);

    return (
        <section className={isLast ? "scrollable-section-tail" : "scrollable-section"} ref={sectionRef}>
            <div
                className="inner-scrollable-section"
                data-entered={hasEnteredSection ? "true" : "false"}
            >
                {children}
            </div>
        </section>
    );
}
