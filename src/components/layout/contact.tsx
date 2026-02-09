"use client";

import "@/styles/contact.css";
import useContactForm from "@/hooks/use-contact-form";
import useAnimatedDots from "@/hooks/use-animated-dots";
import { ContactFormModal, ContactSuccessModal } from "@/components/ui/modals/contact-modals";
import { useContactModalContext } from "@/context/contact-context";

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
