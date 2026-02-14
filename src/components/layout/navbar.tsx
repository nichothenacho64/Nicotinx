"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { getFooterVisibility } from "@/hooks/get-footer-visbility";
import { useContactModalContext } from "@/context/contact-context";
import { SiteLogo } from "@/components/ui/icons";

export default function Navbar() {
    const footerIsVisible = getFooterVisibility("footer");
    const pathname = usePathname();
    const { open } = useContactModalContext();

    return (
        <nav
            id="navbarContainer"
            className={clsx(
                footerIsVisible
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
            )}
        >
            <div id="navbar" className="py-5 body-container">
                <div className="font-semibold nav-links-container">
                    <SiteLogo />
                </div>

                <div className="flex gap-20 text-lg nav-links-container">
                    {NAV_LINKS.map((link) =>
                        link.label === "Contact" ? (
                            <button
                                key={link.href}
                                onClick={open}
                                className="text-left nav-link"
                            >
                                {link.label}
                            </button>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "nav-link",
                                    pathname === link.href && "active"
                                )}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}

