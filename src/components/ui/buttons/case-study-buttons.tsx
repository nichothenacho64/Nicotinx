"use client";

import { CASE_STUDIES } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";

export default function CaseStudyButtons({
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
                            "--case-study-primary-colour": CASE_STUDIES[key].primaryColour,
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