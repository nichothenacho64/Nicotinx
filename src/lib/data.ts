"use client";

import { useState } from "react";

export function useContactForm(onSuccess?: () => void) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSending(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) throw new Error("Failed to submit contact form");

            setIsSuccess(true); // Show success modal
            onSuccess?.();
        } finally {
            setIsSending(false);
        }
    }

    function closeSuccess() {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setMessage("");
    }

    return {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        handleSubmit,
        isSending,
        isSuccess,
        closeSuccess,
    };
}
