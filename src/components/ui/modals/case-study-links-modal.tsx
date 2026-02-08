import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";

export default function CaseStudyLinksModal({ active }: { active: CaseStudyKey }) {
    const { primaryColour, links } = CASE_STUDIES[active];

    if (!links?.length) return null;

    return (
        <div id="caseStudyLinksModal" style={{ borderColor: primaryColour }}>
            <h3 className="case-study-subheading">
                {active} links
            </h3>

            <ul className="flex flex-wrap gap-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="small-button"
                            style={{
                                backgroundColor: primaryColour,
                            }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}