"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { LOGO_SIZE_PX, NAV_LINKS } from "@/lib/constants";
import { getFooterVisibility } from "@/lib/sticky-navbar";

export default function Navbar() {
    const footerIsVisible = getFooterVisibility("footer");
    const pathname = usePathname();

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
                    <Link href="/">
                        <Image
                            src="/icon.svg"
                            alt="Site logo"
                            width={LOGO_SIZE_PX}
                            height={LOGO_SIZE_PX}
                            priority
                        />
                    </Link>
                </div>

                <div className="flex gap-20 text-lg nav-links-container">
                    {NAV_LINKS.map((link) => (
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
                    ))}
                </div>
            </div>
        </nav>
    );
}

