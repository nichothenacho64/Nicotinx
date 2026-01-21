import Link from "next/link";
import { NAV_LINKS, EXTERNAL_LINKS } from "@/lib/navigation";
import { CURRENT_YEAR } from "@/lib/constants";

function FooterLinks() {
    return (
        <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
                <p className="font-semibold text-white">Pages</p>

                {NAV_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="footer-link">
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-semibold text-white">Other links</p>

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
                            Nico Napoli
                        </p>
                        <p className="mt-2 max-w-md text-sm">
                            Personal website and portfolio built by Nico, me,
                            myself, and I
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