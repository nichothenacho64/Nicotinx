"use client";

import { useEffect, useState, useCallback } from "react";
import { ContactContextValue } from "@/lib/definitions";

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

export default function useContactModal(): ContactContextValue {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    lockBodyScroll(isOpen);

    return { isOpen, open, close };
}
