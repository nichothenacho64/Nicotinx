"use client";

import { CanvaEmbedProps } from "@/lib/definitions";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { DOTS_INTERVAL, MAX_DOTS } from "@/lib/constants";

export default function CanvaEmbed({
    embedUrl,
    title = "Case studies",
    colour,
}: CanvaEmbedProps & { colour: string }) {
    const [loaded, setLoaded] = useState(false);
    const [dots, setDots] = useState(0);

    useEffect(() => {
        setLoaded(false);
        setDots(0);
    }, [embedUrl]);

    useEffect(() => {
        if (loaded) return;

        const interval = setInterval(() => {
            setDots((previousDots) => (previousDots + 1) % (MAX_DOTS + 1));
        }, DOTS_INTERVAL);

        return () => clearInterval(interval);
    }, [loaded]);

    return (
        <div
            id="canvaEmbedContainer"
            style={{ "--blue-default": colour } as React.CSSProperties}
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
                <div id="loadingSpin" />

                <p className="py-3 text-white text-lg tracking-wide">
                    Loading{".".repeat(dots)}
                </p>
            </div>

            <iframe
                id="canvaIframe"
                src={embedUrl}
                title={title}
                allow="fullscreen"
                onLoad={() => requestAnimationFrame(() => setLoaded(true))}
            />
        </div>
    );
}
