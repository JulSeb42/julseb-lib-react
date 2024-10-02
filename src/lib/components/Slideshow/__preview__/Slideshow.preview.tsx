/*=============================================== SlideshowPreview ===============================================*/

import { generateNumbers } from "@julseb-lib/utils"
import { Slideshow } from "../../../"
import type { ILibSlideshow } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const images = generateNumbers(1, 4).map(n => `/images/slideshow-${n}.avif`)

export const slideshowPreview: ComponentPreview<ILibSlideshow> = {
    name: "Slideshow",
    component: Slideshow,
    category: "components",
    import: "Slideshow",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibSlideshow",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "With controls",
            demo: (
                <SlideshowDemo
                    controls={{
                        icons: { prev: "arrow-left", next: "arrow-right" },
                    }}
                    pagination={{
                        type: "dots-outline",
                        position: "inside",
                        color: "secondary",
                    }}
                    height={150}
                />
            ),
        },
        {
            previewTitle: "With autoplay",
            demo: <SlideshowDemo options={{ autoPlay: 4000, speed: 3000 }} />,
        },
    ],
}

function SlideshowDemo(props: Partial<ILibSlideshow>) {
    return (
        <Slideshow
            images={images}
            {...(props as any)}
            data-testid="testid"
            className="className"
        />
    )
}
