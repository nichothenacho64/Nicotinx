import Link from "next/link";
import { RightArrow } from "@/components/ui/icons";
import { usePathname } from "next/dist/client/components/navigation";
import { useContactModalContext } from "@/context/contact-context";
import { NAV_LINKS } from "@/lib/constants";

function NextPageLink({
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

function NextPageContactTrigger({
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

export default function NextPageButton({
    additionalClass,
}: {
    additionalClass?: string;
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
                additionalClass={additionalClass}
            />
        );
    } else {
        return (
            <NextPageLink
                href={nextLink.href}
                text={currentLink.nextText}
                additionalClass={additionalClass}
            />
        );
    }
}
