"use client";

import { CASE_STUDIES, EXTERNAL_LINKS, NAV_LINKS } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";
import Link from "next/link"
import { useContactModalContext } from "@/ui/contact-context";
import { NextPageLink, NextPageContactTrigger } from "@/ui/sequential-navigation";

import { usePathname } from "next/navigation";
import { useContactModal } from "@/lib/utils";

export function CaseStudyButtons({
    active,
    setActive,
}: {
    active: CaseStudyKey;
    setActive: (key: CaseStudyKey) => void;
}) {
    return (
        <div className="flex flex-wrap gap-4">
            {(Object.keys(CASE_STUDIES) as CaseStudyKey[]).map((key) => {
                const isActive = active === key;

                return (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        data-active={isActive}
                        className="case-study-button case-study-button-layout"
                        style={{
                            "--case-study-image": `url(${CASE_STUDIES[key].image})`,
                            "--case-study-primaryColour": CASE_STUDIES[key].primaryColour,
                        } as React.CSSProperties}
                    >
                        <h3 className="case-study-subheading">{key}</h3>
                        <p className="my-1 text-xs text-left leading-relaxed">
                            {CASE_STUDIES[key].description}
                        </p>
                    </button>
                );
            })}
        </div>
    );
}

export function FooterLinks() {
    const { open } = useContactModalContext();

    return (
        <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
                <h4 className="footer-heading">Pages</h4>

                {NAV_LINKS.map((link) =>
                    link.label === "Contact" ? (
                        <button
                            key={link.href}
                            onClick={open}
                            className="text-left footer-link"
                        >
                            Contact
                        </button>
                    ) : (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="footer-link"
                        >
                            {link.label}
                        </Link>
                    )
                )}
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="footer-heading">Profiles</h4>
                <Link href={EXTERNAL_LINKS.github.href} className="footer-link">
                    {EXTERNAL_LINKS.github.label}
                </Link>
                <Link href={EXTERNAL_LINKS.linkedin.href} className="footer-link">
                    {EXTERNAL_LINKS.linkedin.label}
                </Link>
            </div>
        </div>
    );
}

export function NextPageButton({
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
