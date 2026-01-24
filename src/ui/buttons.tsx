import { CASE_STUDIES } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";
import Link from "next/link"

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

export function NavigateToMyWorkPage() {
    return (
        <Link
            id="toMyWorkPage"
            href="/work"
            className="group inline-flex items-center gap-2"
        >
            <span>Have a look at some of my work here!</span>

            <svg
                id="myWorkPageArrow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
            </svg>
        </Link>
    );
}

