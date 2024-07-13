/*=============================================== ImagePreview ===============================================*/

import { Image } from "../../../"
import {} from "../../../types"
import type { ILibImage } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const IMG_URL = "/images/image-card.jpg"
const IMG_ALT = "Image"

export const imagePreview: ComponentPreview<ILibImage> = {
    name: "Image",
    component: Image,
    category: "components",
    import: "Image",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibImage",
    additionalTypeImports: null,
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
