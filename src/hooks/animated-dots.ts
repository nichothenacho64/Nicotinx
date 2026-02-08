"use client";

import { useState, useEffect } from "react";
import { DOTS_INTERVAL, MAX_DOTS } from "@/lib/constants";

export default function useAnimatedDots(active: boolean) {
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
