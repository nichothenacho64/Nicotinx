"use client";

import { CURRENT_YEAR } from "@/lib/constants";
import { FooterLinks } from "@/ui/buttons";

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