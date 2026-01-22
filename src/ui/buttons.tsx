import { CASE_STUDIES } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";
import clsx from "clsx";

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
                            "--case-study-colour": CASE_STUDIES[key].colour,
                        } as React.CSSProperties}
                    >
                        <span className="font-bold text-base">{key}</span>
                        <span className="my-1 text-sm text-left">
                            {CASE_STUDIES[key].description}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
