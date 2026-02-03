export type NavLink = {
    label: string;
    href: string;
};

export type CaseStudyLink = {
    label: string;
    href: string;
};

export type CaseStudyKey = "HercuLabs" | "SCRUB" | "RandomReminder";

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
