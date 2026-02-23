import type { CaseStudy, NavLink } from "@/lib/definitions";
import * as CaseStudyLinksModal from "@/lib/case-study-links";

export const CURRENT_YEAR = new Date().getFullYear();

export const CANVA_LINK =
    "https://www.canva.com/design/DAG_B3YjmSA/I-QPziVXInVvI_D2WohOiQ/view?embed";

export const PIPEDREAM_WEBHOOK_URL = "https://eop2bj23x0rc41m.m.pipedream.net";

export const DOTS_INTERVAL = 500;
export const MAX_DOTS = 3;

export const LOGO_SIZE_PX = 40;

export const MESSAGE_ROWS = 4;

export const CROSSFADE_DURATION_MS = 1000;
export const CROSSFADE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

const PRIMARY_BLUE = "#0f7bb8";
const PRIMARY_MAGENTA = "#c0518c";
const PRIMARY_INDIGO = "#7c71c7";

export const ABOUT_IMAGES = [
    { src: "/images/nico_photo.jpeg", alt: "Photo of Nico" },
    { src: "/images/nico_design.jpeg", alt: "Photo of Nico (design)" },
    { src: "/images/nico_piano.jpeg", alt: "Photo of Nico (piano)" },
];

export const NAV_LINKS: NavLink[] = [
    {
        label: "Home",
        href: "/",
        nextText: "Have a look at some of my work here!",
    },
    {
        label: "My work",
        href: "/work",
        nextText: "Like what you see? Send me a message and let's have a chat!",
    },
    {
        label: "Contact",
        href: "mailto:nico.napoli.au@gmail.com",
        nextText: "",
    },
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
        primaryColour: PRIMARY_BLUE,
        image: "/images/herculabs.jpeg",
        description:
            "After the Olympics ends, fans like you and I lose our support for the Olympics and forget about our favourite athletes. However, HercuLabs can help us both to engage in the Olympian experience through helping us to feel the thrill, passion, and hardwork like the Olympian themself.",
        links: [
            {
                label: "Annotated flows (Figma)",
                href: CaseStudyLinksModal.HERCULABS_ANNOTATED_FLOWS_LINK,
            },
            {
                label: "Figma high-fidelity prototype",
                href: CaseStudyLinksModal.HERCULABS_HIFI_PROTOTYPE_LINK,
            },
        ],
    },
    SCRUB: {
        page: 2,
        primaryColour: PRIMARY_MAGENTA,
        image: "/images/scrub.jpeg",
        description:
            "Does clothing recycling often feel like a chore! It is so boring, unclear, and forgettable. Perhaps it can be reimagined in a more playful way through an interactive recycling bin that is playful and rewarding in nature, then I can enjoy clothing recycling!",
        links: [
            {
                label: "Protoype demonstration",
                href: CaseStudyLinksModal.SCRUB_PROTOTYPE_DEMO_LINK,
            },
            {
                label: "Figma high-fidelity prototype (kiosk)",
                href: CaseStudyLinksModal.SCRUB_KIOSK_HIFI_LINK,
            },
            {
                label: "Figma high-fidelity prototype (smartphone app)",
                href: CaseStudyLinksModal.SCRUB_APP_HIFI_LINK,
            },
        ],
    },
    RandomReminder: {
        page: 3,
        primaryColour: PRIMARY_INDIGO,
        image: "/images/randomreminder.jpeg",
        description:
            "Traditional reminder apps are so predictable and cannot support spontaneous tasks of mine. How can I create a minimalist macOS app that suprises me with reminders when I least expect them, helping to support habits that rely on randomness?",
        links: [
            {
                label: "Figma high-fidelity prototype",
                href: CaseStudyLinksModal.RANDOM_REMINDER_HIFI_LINK,
            },
            {
                label: "GitHub",
                href: CaseStudyLinksModal.RANDOM_REMINDER_GITHUB_LINK,
            },
        ],
    },
};
