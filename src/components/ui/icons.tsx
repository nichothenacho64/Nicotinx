import Image from "next/image";
import Link from "next/link";
import { LOGO_SIZE_PX } from "@/lib/constants";

export function SiteLogo() {
    return (
        <Link href="/">
            <Image
                id="siteLogo"
                src="/icon.svg"
                alt="Site logo"
                width={LOGO_SIZE_PX}
                height={LOGO_SIZE_PX}
                priority
            />
        </Link>
    );
}

export function RightArrow({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
        </svg>
    );
}

export function DownArrow({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m0 0-5-5m5 5 5-5"
            />
        </svg>
    );
}
