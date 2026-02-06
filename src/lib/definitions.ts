import { ReactNode } from "react";

export type CaseStudyKey = "HercuLabs" | "SCRUB" | "RandomReminder";

export type NavLink = {
    label: string;
    href: string;
    nextText: string;
};

export type CaseStudyLink = {
    label: string;
    href: string;
};

export type ScrollySectionProps = {
    children: ReactNode;
    index: number;
    isLast?: boolean;
};

export type CaseStudy = {
    page: number;
    primaryColour: string;
    image: string;
    description: string;
    links: CaseStudyLink[];
};

export type CanvaEmbedProps = {
    title: string;
    embedUrl: string;
    primaryColour: string;
};

export type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export type ContactFormInput = {
    name: string;
    email: string;
    message: string;
};

export type SuccessModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export type ContactFormModalProps = {
    form: {
        name: string;
        setName: (v: string) => void;
        email: string;
        setEmail: (v: string) => void;
        message: string;
        setMessage: (v: string) => void;
        handleSubmit: (e: React.FormEvent) => void;
        isSending: boolean;
    };
    dots: number;
    onClose: () => void;
};

export type ContactContextValue = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};
