"use client";

import { ABOUT_IMAGES, CROSSFADE_DURATION_MS } from "@/lib/constants";
import { StartFadeHookProps, FinishFadeHookProps } from "@/lib/definitions";
import { useCallback, useEffect, useRef, useState } from "react";
import { CrossfadePhase } from "@/lib/definitions";

function useStartFade({
    crossfadePhase,
    transitionToken,
    setCrossfadePhase,
}: StartFadeHookProps) {
    useEffect(() => {
        if (crossfadePhase !== "armed") return;

        const fadeAnimationFrame = requestAnimationFrame(() =>
            setCrossfadePhase("fading"),
        );

        return () => cancelAnimationFrame(fadeAnimationFrame);
    }, [crossfadePhase, setCrossfadePhase, transitionToken]);
}

function useFinishFade({
    crossfadePhase,
    transitionToken,
    onComplete,
}: FinishFadeHookProps) {
    useEffect(() => {
        if (crossfadePhase !== "fading") return;

        const timeout = setTimeout(() => {
            onComplete();
        }, CROSSFADE_DURATION_MS);

        return () => clearTimeout(timeout);
    }, [crossfadePhase, onComplete, transitionToken]);
}

function canPreloadInBrowser() {
    return typeof window !== "undefined" && typeof Image !== "undefined";
}

async function preloadImage(imageSource: string) {
    const newImage = new Image();
    newImage.decoding = "async";
    newImage.src = imageSource;

    if ("decode" in newImage) {
        try {
            await newImage.decode();
            return;
        } catch {}
    }

    await new Promise<void>((resolve, reject) => {
        newImage.onload = () => resolve();
        newImage.onerror = () => reject(new Error("Image preload failed"));
    });
}

export default function useAboutImageCrossfade(activeIndex: number) {
    const [currentIndex, setCurrentIndex] = useState(activeIndex);
    const [visibleImageIndex, setVisibleImageIndex] = useState(activeIndex);
    const [incomingImageIndex, setIncomingImageIndex] = useState<number | null>(
        null,
    );
    const [crossfadePhase, setCrossfadePhase] =
        useState<CrossfadePhase>("idle");

    const targetIndexRef = useRef(activeIndex);
    const transitionIdRef = useRef(0);
    const transitionToken = transitionIdRef.current;

    const completeFade = useCallback(() => {
        setVisibleImageIndex(targetIndexRef.current);
        setIncomingImageIndex(null);
        setCrossfadePhase("idle");
    }, []);

    useStartFade({ crossfadePhase, transitionToken, setCrossfadePhase });
    useFinishFade({
        crossfadePhase,
        transitionToken,
        onComplete: completeFade,
    });

    const armIfStillCurrent = useCallback(
        (transitionId: number, nextIndex: number) => {
            if (transitionIdRef.current !== transitionId) return;
            if (targetIndexRef.current !== nextIndex) return;
            setCrossfadePhase("armed");
        },
        [],
    );

    const ensureReadyThenArm = useCallback(
        async (transitionId: number, nextIndex: number) => {
            const imageSource = ABOUT_IMAGES[nextIndex].src;

            if (!canPreloadInBrowser()) {
                armIfStillCurrent(transitionId, nextIndex);
                return;
            }

            try {
                await preloadImage(imageSource);
                armIfStillCurrent(transitionId, nextIndex);
            } catch (error) {
                armIfStillCurrent(transitionId, nextIndex);
            }
        },
        [armIfStillCurrent],
    );

    const transitionTo = useCallback(
        (nextIndex: number) => {
            if (nextIndex === currentIndex) return;

            transitionIdRef.current += 1;
            const transitionId = transitionIdRef.current;

            setCurrentIndex(nextIndex);
            targetIndexRef.current = nextIndex;

            setIncomingImageIndex(nextIndex);
            setCrossfadePhase("idle");

            void ensureReadyThenArm(transitionId, nextIndex);
        },
        [currentIndex, ensureReadyThenArm],
    );

    useEffect(() => {
        if (activeIndex === currentIndex) return;
        transitionTo(activeIndex);
    }, [activeIndex]);

    const goToNextImage = useCallback(() => {
        transitionTo(Math.min(currentIndex + 1, ABOUT_IMAGES.length - 1));
    }, [currentIndex, transitionTo]);

    const goToPreviousImage = useCallback(() => {
        transitionTo(Math.max(currentIndex - 1, 0));
    }, [currentIndex, transitionTo]);

    return {
        aboutIndex: currentIndex,
        frontImage: ABOUT_IMAGES[visibleImageIndex],
        backImage:
            incomingImageIndex !== null
                ? ABOUT_IMAGES[incomingImageIndex]
                : null,
        backImageOpacity: crossfadePhase === "fading" ? 1 : 0,
        goToNextImage,
        goToPreviousImage,
    };
}
