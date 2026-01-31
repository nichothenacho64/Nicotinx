"use client";

import clsx from "clsx";
import { ContactModalProps } from "@/lib/definitions";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <article id="contactModal">
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            />

            <div
                className={clsx(
                    "z-101 relative bg-white shadow-xl p-6 rounded-lg w-full max-w-lg",
                    "animate-fade-in"
                )}
            >
                <button id="closeContactModalButton" onClick={onClose}>✕</button>

                <h1 className="mb-4">Get in touch</h1>

                <form className="flex flex-col gap-4">
                    <div className="form-section">
                        <label>Name</label>
                        <input type="text" className="input-field" />
                    </div>

                    <div className="form-section">
                        <label>Email</label>
                        <input type="email" className="input-field" />
                    </div>

                    <div className="form-section">
                        <label>Message</label>
                        <textarea rows={4} className="input-field"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-default cursor-pointer small-button"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </article>
    );
}
