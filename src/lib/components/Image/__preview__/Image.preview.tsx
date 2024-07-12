/*=============================================== ImagePreview ===============================================*/

import { Image } from "../../../"
import {} from "../../../types"
import type { ImageProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const IMG_URL = "/images/image-card.jpg"
const IMG_ALT = "Image"

export const imagePreview: ComponentPreview<ImageProps> = {
    name: "Image",
    component: Image,
    category: "components",
    import: ["Image"],
    propsImport: ["ImageProps"],
    extends: ["HTMLImageElement", "ImgHTMLAttributes<HTMLImageElement>"],
    previews: [
        { previewTitle: "Default", props: { src: IMG_URL, alt: IMG_ALT } },
        {
            previewTitle: "With border radius",
            props: { src: IMG_URL, alt: IMG_ALT, borderRadius: "xxl" },
        },
        {
            previewTitle: "With caption",
            props: {
                src: IMG_URL,
                alt: IMG_ALT,
                borderRadius: "xxl",
                caption: "Caption",
            },
        },
        {
            previewTitle: "With fit cover",
            props: { src: IMG_URL, alt: IMG_ALT, height: 300, fit: "cover" },
        },
        {
            previewTitle: "With fit contain",
            props: {
                src: IMG_URL,
                alt: IMG_ALT,
                height: 300,
                fit: "contain",
                caption: {
                    text: "Caption",
                    textColor: "secondary",
                    background: "white-80",
                },
            },
        },
    ],
}
