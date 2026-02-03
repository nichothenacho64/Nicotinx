"use client";

import Contact from "@/components/contact";
import { useContact } from "@/ui/contact-context";

export default function ContactRoot() {
    const { isOpen, close } = useContact();
    return <Contact isOpen={isOpen} onClose={close} />;
}
