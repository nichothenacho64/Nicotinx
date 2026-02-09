import Image from "next/image";
import { ABOUT_IMAGES } from "@/lib/constants";
import { CROSSFADE_DURATION_MS, CROSSFADE_EASING } from "@/lib/constants";
import { AboutMeImageContainerProps } from "@/lib/definitions";

export function AboutMeImageContainer({ frontImage, backImage, backImageOpacity }: AboutMeImageContainerProps) {
    return (
        <div id="aboutMeImageContainer">
            <div className="hidden">
                {
                    ABOUT_IMAGES.map((img) => (
                        <Image
                            key={img.src}
                            src={img.src}
                            alt=""
                            width={5}
                            height={5}
                        />
                    ))
                }
            </div>

            <Image
                src={frontImage.src}
                alt={frontImage.alt}
                fill
                sizes="50vw"
                priority
                className="object-cover"
                style={{
                    opacity: 1,
                }}
            />

            {backImage && (
                <Image
                    src={backImage.src}
                    alt={backImage.alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    style={{
                        opacity: backImageOpacity,
                        transition: `opacity ${CROSSFADE_DURATION_MS}ms ${CROSSFADE_EASING}`,
                        willChange: "opacity",
                    }}
                />
            )}
        </div >
    );
}