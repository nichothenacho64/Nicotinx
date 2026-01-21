import type { NavLink } from "@/lib/definitions";

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "mailto:nico.napoli.au@gmail.com" },
];

export const EXTERNAL_LINKS = {
    github: {
        label: "GitHub",
        href: "https://github.com/nichothenacho64",
    },
    linkedin: {
        label: "LinkedIn",
        href: "http://linkedin.com/in/nico-napoli",
    },
} as const;
