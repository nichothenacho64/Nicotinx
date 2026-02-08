"use client";

import { EXTERNAL_LINKS, NAV_LINKS } from "@/lib/constants";
import Link from "next/link"
import { useContactModalContext } from "@/context/contact-context";

export default function FooterLinks() {
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
