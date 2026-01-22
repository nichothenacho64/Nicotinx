export type CanvaEmbedProps = {
    embedUrl: string;
    title?: string;
};

export type NavLink = {
    label: string;
    href: string;
};

export type CaseStudyKey = "HercuLabs" | "SCRUB" | "RandomReminder";

export type CaseStudy = {
    page: number;
    colour: string;
    image: string;
    description: string;
};
