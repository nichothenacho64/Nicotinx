"use client";

import Link from "next/link";
import { NAV_LINKS, EXTERNAL_LINKS, CURRENT_YEAR } from "@/lib/constants";
import { useContact } from "@/ui/contact-context";

function FooterLinks() {
    const { open } = useContact();

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

export default function Footer() {
    return (
        <footer id="footer">
            <div className="body-container">
                <div className="flex md:flex-row flex-col md:justify-between gap-8">
                    <div>
                        <p className="font-semibold text-white text-lg">
                            Nicotinx
                        </p>
                        <p className="mt-2 max-w-md text-sm">
                            Personal website and portfolio built by Nico, me,
                            myself, and I using Next.js and deployed with Vercel
                        </p>
                    </div>

                    <FooterLinks />
                </div>

                <div id="copyrightLabel">
                    © Nico Napoli {CURRENT_YEAR}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}