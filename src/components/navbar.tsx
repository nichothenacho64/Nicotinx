"use client";

import Link from "next/link";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/navigation";
import { getFooterVisibility } from "@/lib/sticky-navbar";

export default function Navbar() {
    const footerIsVisible = getFooterVisibility("footer");

    return (
        <nav
            id="navbarContainer"
            className={clsx(
                footerIsVisible
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
            )}
        >
            <div id="navbar" className="body-container">
                <div className="font-semibold nav-links-container">
                    <Link href="/">Nico</Link>
                </div>

                <div className="flex gap-20 text-lg nav-links-container">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
