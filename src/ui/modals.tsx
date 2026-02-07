"use client";

import clsx from "clsx";
import { MESSAGE_ROWS, CASE_STUDIES } from "@/lib/constants";
import { CaseStudyKey, ContactFormModalProps } from "@/lib/definitions";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function AboutMeModal() {
    const [aboutIndex, setAboutIndex] = useState(0);

    const nextAbout = () => setAboutIndex((i) => Math.min(i + 1, 2));
    const prevAbout = () => setAboutIndex((i) => Math.max(i - 1, 0));

    return (
        <div id="aboutMeModal">
            <div className="flex flex-1 gap-12 responsive-section">
                <div className="w-full md:w-1/2 scrollable-text">
                    <h1>About me</h1>
                    {aboutIndex === 0 && (
                        <p>
                            Hello! I am Nico, a University student studying both{" "}
                            <strong>Interaction Design and Digital Music</strong>, and everything in between like sound design!
                            I primarily work as a UI/UX designer based in Sydney, in both professional and university-based settings,
                            and as my computer science brother's personal interface design assistant for his high-quality personal
                            projects on GitHub (against my own will).
                        </p>
                    )}

                    {aboutIndex === 1 && (
                        <p>
                            I am interested in UI/UX design as I have always been fascinated by the middle-ground between technical
                            and creative technology-related disciplines; I am hence able to employ{" "}
                            <strong>critical thinking, innovation, and creativity</strong>{" "}
                            in a new and emerging field that has so much potential to drive positive societal change.
                        </p>
                    )}

                    {aboutIndex === 2 && (
                        <p>
                            Outside of my academic and professional life, I love to compose solo piano works and{" "}
                            <strong>
                                obsessively listen to the music of{" "}
                                <a
                                    className="text-blue-default hover:underline"
                                    href="https://www.sorabji-archive.co.uk/biography/biography.php"
                                >
                                    Kaikhosru Shapurji Sorabji
                                </a>.
                            </strong>
                        </p>
                    )}
                </div>
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                        src="/images/nico_photo.jpg"
                        alt="Photo of Nico"
                        fill
                        className="rounded-lg object-cover"
                        sizes="50vw"
                        priority
                    />
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    className="small-button bg-(--blue-default)"
                    onClick={prevAbout}
                    disabled={aboutIndex === 0}
                >
                    ← Say less
                </button>
                <button
                    className="small-button bg-(--blue-default)"
                    onClick={nextAbout}
                    disabled={aboutIndex === 2}
                >
                    Say more →
                </button>
            </div>
        </div>
    );
}

export function CaseStudyLinksModal({ active }: { active: CaseStudyKey }) {
    const { primaryColour, links } = CASE_STUDIES[active];

    if (!links?.length) return null;

    return (
        <div id="caseStudyLinksModal" style={{ borderColor: primaryColour }}>
            <h3 className="case-study-subheading">
                {active} links
            </h3>

            <ul className="flex flex-wrap gap-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="small-button"
                            style={{
                                backgroundColor: primaryColour,
                            }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ContactFormModal({
    form,
    dots,
    onClose,
}: ContactFormModalProps) {
    return (
        <>
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            <div className={clsx("contact-modal-content", "animate-fade-in")}>
                <button id="closeContactModalButton" onClick={onClose}>
                    ✕
                </button>

                <h1 className="mb-4">Let's have a chat!</h1>

                <form className="flex flex-col gap-4" onSubmit={form.handleSubmit}>
                    <div className="form-section">
                        <label>Name</label>
                        <input
                            type="text"
                            className="input-field"
                            value={form.name}
                            onChange={(event) => form.setName(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label>Email</label>
                        <input
                            type="email"
                            className="input-field"
                            value={form.email}
                            onChange={(event) => form.setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label>Message</label>
                        <textarea
                            rows={MESSAGE_ROWS}
                            className="input-field"
                            value={form.message}
                            onChange={(event) => form.setMessage(event.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={form.isSending}
                        className={clsx(
                            "small-button",
                            "bg-blue-default",
                            form.isSending && "opacity-40 cursor-not-allowed"
                        )}
                    >
                        {form.isSending
                            ? `Sending message${".".repeat(dots)}`
                            : "Send message"}
                    </button>
                </form>
            </div>
        </>
    );
}

export function ContactSuccessModal({ onConfirm }: { onConfirm: () => void }) {
    return (
        <>
            <div className="absolute inset-0 bg-black/60" />

            <div className="animate-fade-in contact-modal-content">
                <h1 className="mb-4">Message sent!</h1>

                <p>
                    Thank you for your email. I’ve received it and will get back
                    to you promptly.
                </p>

                <button
                    onClick={onConfirm}
                    className="bg-blue-default mt-6 w-full small-button"
                >
                    Okay
                </button>
            </div>
        </>
    );
}
