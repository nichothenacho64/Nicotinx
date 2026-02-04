"use client";

import { createContext, useContext } from "react";
import { useContactModal } from "@/lib/utils";
import { ContactContextValue } from "@/lib/definitions";

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
    const modal = useContactModal();

    return (
        <ContactContext.Provider value={modal}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContact(): ContactContextValue {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error("useContact must be used within ContactProvider");
    }
    return context;
}
