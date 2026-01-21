import { CASE_STUDIES, CASE_STUDIES_LINK } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";

export function getCaseStudy(variant: CaseStudyKey) {
    const { page, colour } = CASE_STUDIES[variant];

    return {
        embedLink: `${CASE_STUDIES_LINK}#page-${page}`,
        colour,
    };
}
