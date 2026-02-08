"use client";

import { createContext, useContext } from "react";
import useContactModal from "@/hooks/contact-modal";
import { ContactContextValue } from "@/lib/definitions";

const ContactModalContext = createContext<ContactContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
    const modal = useContactModal();

    return (
        <ContactModalContext.Provider value={modal}>
            {children}
        </ContactModalContext.Provider>
    );
}

export function useContactModalContext(): ContactContextValue {
    const context = useContext(ContactModalContext);
    if (!context) {
        throw new Error("useContactModalContext must be used within ContactModalProvider");
    }
    return context;
}
