import CanvaEmbed from "@/components/canva-embed";
import { CanvaEmbedSkeleton } from "@/components/skeletons";
import { CASE_STUDIES_LINK } from "@/lib/constants";
import { Suspense } from "react";

export default function About() {
    return (
        <div>
            <main>
                <h1>About</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla aliquam distinctio natus placeat laboriosam, eveniet accusamus cum doloremque, deserunt sit minus ratione provident vero quis hic animi nam accusantium consequuntur nisi neque? Commodi doloremque assumenda quibusdam voluptatum tempora ipsam reprehenderit facere modi placeat! Quidem accusantium neque dolores labore odio!</p>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus minus voluptas ex ullam adipisci, debitis blanditiis optio ratione magnam voluptatum placeat veniam voluptatibus culpa consequatur cupiditate! Magni, quo assumenda! Impedit aliquam, vero necessitatibus beatae asperiores totam odio libero tempore voluptatibus praesentium? Dolorum, nobis eius et veritatis, eaque doloribus explicabo architecto repellat porro velit minima error est! Laborum facere voluptatibus adipisci, eius, doloremque quas esse vel earum animi quos deserunt necessitatibus maiores molestias saepe nisi eveniet deleniti odio impedit omnis libero quibusdam obcaecati sint aspernatur dolores. Maiores nesciunt sunt at cupiditate! Dicta distinctio natus assumenda ex, accusantium ipsum incidunt laboriosam nesciunt.</p>
                <br />
                <h1>Case studies</h1><br />
                <Suspense fallback={<CanvaEmbedSkeleton />}>
                    <CanvaEmbed
                        embedUrl={CASE_STUDIES_LINK}
                        title="Case Studies"
                    />
                </Suspense>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illum quo itaque impedit nulla, possimus, repudiandae suscipit commodi mollitia cumque nihil laboriosam consequuntur sapiente veniam ullam adipisci eveniet maiores? Cupiditate.</p>
            </main>
        </div>
    );
}
