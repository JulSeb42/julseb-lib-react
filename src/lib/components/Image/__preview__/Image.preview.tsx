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
    imports: ["Image"],
    typeImports: ["ImageProps"],
    extends: ["HTMLImageElement", "ImgHTMLAttributes<HTMLImageElement>"],
    props: [
        { previewTitle: "Default", src: IMG_URL, alt: IMG_ALT },
        {
            previewTitle: "With border radius",
            src: IMG_URL,
            alt: IMG_ALT,
            borderRadius: "xxl",
        },
        {
            previewTitle: "With caption",
            src: IMG_URL,
            alt: IMG_ALT,
            borderRadius: "xxl",
            caption: "Caption",
        },
        {
            previewTitle: "With fit cover",
            src: IMG_URL,
            alt: IMG_ALT,
            height: 300,
            fit: "cover",
        },
        {
            previewTitle: "With fit contain",
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
    ],
}
