"use client";

import { ContactModalProps } from "@/lib/definitions";
import { useContactForm } from "@/lib/data";
import { useAnimatedDots } from "@/lib/utils";
import { ContactFormModal, ContactSuccessModal } from "@/ui/modals";

export default function Contact({ isOpen, onClose }: ContactModalProps) {
    const form = useContactForm();
    const dots = useAnimatedDots(form.isSending);

    if (!isOpen) return null;

    return (
        <article id="contactModal">
            {form.isSuccess ? (
                <ContactSuccessModal
                    onConfirm={() => {
                        form.closeSuccess();
                        onClose();
                    }}
                />
            ) : (
                <ContactFormModal
                    form={form}
                    dots={dots}
                    onClose={onClose}
                />
            )}
        </article>
    );
}
