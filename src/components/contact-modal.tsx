"use client";

import clsx from "clsx";
import { ContactModalProps } from "@/lib/definitions";
import { useContactForm } from "@/client/use-form";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    const {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        handleSubmit,
    } = useContactForm(onClose);

    return (
        <article id="contactModal">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            <div
                className={clsx(
                    "contact-modal-content",
                    "animate-fade-in"
                )}
            >
                <button id="closeContactModalButton" onClick={onClose}>✕</button>

                <h1 className="mb-4">Get in touch</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label>Name</label>
                        <input
                            type="text"
                            className="input-field"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label>Email</label>
                        <input
                            type="email"
                            className="input-field"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label>Message</label>
                        <textarea
                            rows={4}
                            className="input-field"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-default cursor-pointer small-button"
                        onSubmit={handleSubmit}
                    >
                        Send message
                    </button>
                </form>
            </div>
        </article>
    );
}
