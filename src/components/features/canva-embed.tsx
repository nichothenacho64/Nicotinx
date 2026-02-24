"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { CanvaEmbedProps } from "@/lib/definitions";
import useAnimatedDots from "@/hooks/use-animated-dots";

export default function CanvaEmbed({
    title,
    embedUrl,
    primaryColour,
}: CanvaEmbedProps) {
    const [loaded, setLoaded] = useState(false);

    const dots = useAnimatedDots(!loaded);

    useEffect(() => {
        setLoaded(false);
    }, [embedUrl]);

    return (
        <div
            id="canvaEmbedContainer"
            style={{ "--blue-default": primaryColour } as React.CSSProperties}
        >
            <div
                id="canvaEmbedLoadingBackground"
                className={clsx(
                    "transition-opacity",
                    loaded
                        ? "opacity-0 pointer-events-none canva-loaded"
                        : "opacity-100"
                )}
            >
                <div id="canvaEmbedLoadingSpin" />

                <p id="caseStudyPreparingText">
                    Preparing {title}
                    {".".repeat(dots)}
                </p>
            </div>

            <iframe
                id="canvaIframe"
                src={embedUrl}
                title="Case Studies"
                allow="fullscreen"
                onLoad={() => requestAnimationFrame(() => setLoaded(true))}
            />
        </div>
    );
}
