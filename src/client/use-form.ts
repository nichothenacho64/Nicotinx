"use client";

import { useState } from "react";

export function useContactForm(onSuccess?: () => void) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
            throw new Error("Failed to submit contact form");
        }

        onSuccess?.();
    }

    return {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        handleSubmit,
    };
}
