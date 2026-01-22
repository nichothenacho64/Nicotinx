"use client";

import CanvaEmbed from "@/components/canva-embed";
import { CaseStudyKey } from "@/lib/definitions";
import { getCaseStudy } from "@/lib/utils";
import { useState } from "react";
import { CaseStudyButtons } from "@/ui/buttons";

export default function Work() {
    const [active, setActive] = useState<CaseStudyKey>("HercuLabs");

    const { embedLink, colour } = getCaseStudy(active);

    console.log(embedLink);

    return (
        <div>
            <main>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta aut sed aspernatur delectus voluptas nihil fuga earum assumenda eius hic tempora qui, ipsum pariatur reiciendis ab. Laborum, quidem libero nam minima dolorum ut voluptatibus debitis eaque at deserunt sit cum dolorem quae aut magnam similique illo ducimus nesciunt delectus assumenda doloremque modi? Veritatis praesentium assumenda inventore architecto aut doloremque vel odio tempora vitae rem exercitationem incidunt accusantium repudiandae, non totam libero suscipit est a delectus laboriosam facere similique? Perferendis, iure voluptate ipsam alias placeat earum hic quae, dolor quis pariatur explicabo accusamus aperiam est! Rerum reiciendis iure quia velit!</p><br /> */}
                <h1>Case studies</h1><br /> {/* // ! there should be a fixed size box with text that appears based on the hovering/chosen case study */}
                <section className="space-y-6">
                    <CaseStudyButtons
                        active={active}
                        setActive={setActive}
                    />

                    <CanvaEmbed
                        embedUrl={embedLink}
                        title="Case Studies"
                        colour={colour}
                    />
                </section>
                <br />
            </main>
        </div>
    );
}
