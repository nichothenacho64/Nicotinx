import Link from "next/link";

function NextPageButtonContent({ text }: { text: string }) {
    return (
        <>
            <span>{text}</span>

            <svg
                id="toNextPageArrow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="transition-transform group-hover:translate-x-1"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
            </svg>
        </>
    );
}

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
            <NextPageButtonContent text={text} />
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
            <NextPageButtonContent text={text} />
        </button>
    );
}