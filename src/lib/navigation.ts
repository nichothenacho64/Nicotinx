export type NavLink = {
    label: string;
    href: string;
};

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "mailto:nico.napoli.au@gmail.com" },
];

export const EXTERNAL_LINKS = {
    github: {
        label: "GitHub",
        href: "https://github.com",
    },
    linkedin: {
        label: "LinkedIn",
        href: "https://linkedin.com",
    },
};
