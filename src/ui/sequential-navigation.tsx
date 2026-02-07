import Link from "next/link";
import { RightArrow } from "@/ui/icons";

export function NextPageLink({
    href,
    text,
    additionalClass,
}: {
    href: string;
    text: string;
    additionalClass?: string;
}) {
    return (
        <Link
            id="toNextPageButton"
            href={href}
            className="group inline-flex items-center gap-2"
            style={{
                backgroundColor: additionalClass ?? "var(--blue-default)",
            }}
        >
            <span>{text}</span>
            <RightArrow className="next-page-arrow" />
        </Link>
    );
}

export function NextPageContactTrigger({
    text,
    onClick,
    additionalClass,
}: {
    text: string;
    onClick: () => void;
    additionalClass?: string;
}) {
    return (
        <button
            id="toNextPageButton"
            onClick={onClick}
            className="group inline-flex items-center gap-2"
            style={{
                backgroundColor: additionalClass ?? "var(--blue-default)",
            }}
        >
            <span>{text}</span>
            <RightArrow className="next-page-arrow" />
        </button>
    );
}
