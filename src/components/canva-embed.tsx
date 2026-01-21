"use client";

import { CanvaEmbedProps } from "@/lib/definitions";
import { useState } from "react";
import clsx from "clsx";

export default function CanvaEmbed({
    embedUrl,
    title = "Case studies",
}: CanvaEmbedProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div id="canvaEmbedContainer">
            <div
                id="canvaEmbedLoadingBackground"
                className={clsx(
                    loaded
                        ? "opacity-0 pointer-events-none canva-loaded"
                        : "opacity-100"
                )}
            >
                {!loaded && (<div id="loadingSpin" />)}
            </div>

            <iframe
                id="canvaIframe"
                src={embedUrl}
                title={title}
                allow="fullscreen"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}