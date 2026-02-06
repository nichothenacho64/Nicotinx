"use client";

import "@/styles/contact.css";
import { useContactForm } from "@/lib/data";
import { useAnimatedDots } from "@/lib/utils";
import { ContactFormModal, ContactSuccessModal } from "@/ui/modals";
import { useContactModalContext } from "@/ui/contact-context";

export default function Contact() {
    const { isOpen, close } = useContactModalContext();

    const form = useContactForm();
    const dots = useAnimatedDots(form.isSending);

    if (!isOpen) return null;

    return (
        <article id="contactModal">
            {form.isSuccess ? (
                <ContactSuccessModal
                    onConfirm={() => {
                        form.closeSuccess();
                        close();
                    }}
                />
            ) : (
                <ContactFormModal
                    form={form}
                    dots={dots}
                    onClose={close}
                />
            )}
        </article>
    );
}
