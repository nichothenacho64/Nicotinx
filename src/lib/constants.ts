import type { CaseStudy, NavLink } from "@/lib/definitions";

export const CURRENT_YEAR = new Date().getFullYear();

export const CASE_STUDIES_LINK =
    "https://www.canva.com/design/DAG_B3YjmSA/view?embed";

export const DOTS_INTERVAL = 500;
export const MAX_DOTS = 3;

export const LOGO_SIZE_PX = 40;

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
    { label: "My work", href: "/work" },
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

export const CASE_STUDIES: Record<string, CaseStudy> = {
    HercuLabs: {
        page: 0,
        colour: PRIMARY_BLUE,
        image: "/images/herculabs.jpeg",
        description:
            "After the Olympics ends, fans like you and I lose our support for the Olympics and forget about our favourite athletes. However, HercuLabs can help us both to engage in the Olympian experience through helping us to feel the thrill, passion, and hardwork like the Olympian themself.",
    },
    SCRUB: {
        page: 2,
        colour: PRIMARY_MAGENTA,
        image: "/images/scrub.jpeg",
        description:
            "Does clothing recycling often feel like a chore! It is so boring, unclear, and forgettable. Perhaps it can be reimagined in a more playful way through an interactive recycling bin that is playful and rewarding in nature, then I can enjoy clothing recycling!",
    },
    RandomReminder: {
        page: 3,
        colour: PRIMARY_INDIGO,
        image: "/images/randomreminder.jpeg",
        description:
            "Traditional reminder apps are so predictable and cannot support spontaneous tasks of mine. How can I create a minimalist macOS app that suprises me with reminders when I least expect them, helping to support habits that rely on randomness?",
    },
};
