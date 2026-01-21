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
        <div className="flex gap-3">
            {(Object.keys(CASE_STUDIES) as CaseStudyKey[]).map((key) => {
                const { colour } = CASE_STUDIES[key];

                return (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={clsx(
                            "case-study-button",
                            active === key && "bg-(--blue-default) text-white"
                        )}
                        style={{ "--blue-default": colour } as React.CSSProperties}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}