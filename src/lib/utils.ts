import { CASE_STUDIES, CANVA_LINK } from "@/lib/constants";
import { CaseStudyKey } from "@/lib/definitions";

export function getCaseStudy(title: CaseStudyKey) {
    const { page, primaryColour } = CASE_STUDIES[title];

    return {
        title,
        embedLink: `${CANVA_LINK}#page-${page}`,
        primaryColour,
    };
}
