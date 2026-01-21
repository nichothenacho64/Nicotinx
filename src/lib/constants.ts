import type { NavLink } from "@/lib/definitions";

export const CURRENT_YEAR = new Date().getFullYear();

export const CASE_STUDIES_LINK =
    "https://www.canva.com/design/DAG_B3YjmSA/view?embed";

export const DOTS_INTERVAL = 500;
export const MAX_DOTS = 3;

const PRIMARY_BLUE = "#0f7bb8";
const PRIMARY_MAGENTA = "#c0518c";
const PRIMARY_INDIGO = "#7c71c7";

export const PRIMARY_COLOURS = {
    blue: PRIMARY_BLUE,
    magenta: PRIMARY_MAGENTA,
    indigo: PRIMARY_INDIGO,
} as const;

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

export const CASE_STUDIES = {
    HercuLabs: {
        page: 0,
        colour: PRIMARY_BLUE,
    },
    SCRUB: {
        page: 2,
        colour: PRIMARY_MAGENTA,
    },
    RandomReminder: {
        page: 3,
        colour: PRIMARY_INDIGO,
    },
} as const;
