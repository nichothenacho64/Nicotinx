import Link from "next/link";
import { RightArrow } from "@/components/ui/icons";
import { usePathname } from "next/dist/client/components/navigation";
import { useContactModalContext } from "@/context/contact-context";
import { NAV_LINKS } from "@/lib/constants";

function NextPageLink({
    href,
    text,
    className,
    backgroundColor,
}: {
    href: string;
    text: string;
    className?: string;
    backgroundColor?: string;
}) {
    return (
        <Link
            id="toNextPageButton"
            href={href}
            className={`group inline-flex items-center gap-2 ${className ?? ""}`}
            style={{
                backgroundColor: backgroundColor ?? "var(--blue-default)",
            }}
        >
            <span>{text}</span>
            <RightArrow className="next-page-arrow" />
        </Link>
    );
}

function NextPageContactTrigger({
    text,
    onClick,
    className,
    backgroundColor,
}: {
    text: string;
    onClick: () => void;
    className?: string;
    backgroundColor?: string;
}) {
    return (
        <button
            id="toNextPageButton"
            onClick={onClick}
            className={`group inline-flex items-center gap-2 ${className ?? ""}`}
            style={{
                backgroundColor: backgroundColor ?? "var(--blue-default)",
            }}
        >
            <span>{text}</span>
            <RightArrow className="next-page-arrow" />
        </button>
    );
}

export default function NextPageButton({
    className,
    backgroundColor,
}: {
    className?: string;
    backgroundColor?: string;
}) {
    const pathname = usePathname();
    const { open } = useContactModalContext();

    const currentIndex = NAV_LINKS.findIndex(
        (link) => link.href === pathname
    );

    const safeCurrentIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex =
        (safeCurrentIndex + 1) % NAV_LINKS.length;

    const currentLink = NAV_LINKS[safeCurrentIndex];
    const nextLink = NAV_LINKS[nextIndex];

    if (nextLink.label === "Contact") {
        return (
            <NextPageContactTrigger
                text={currentLink.nextText}
                onClick={open}
                className={className}
                backgroundColor={backgroundColor}
            />
        );
    } else {
        return (
            <NextPageLink
                href={nextLink.href}
                text={currentLink.nextText}
                className={className}
                backgroundColor={backgroundColor}
            />
        );
    }
}
