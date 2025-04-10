import { Image } from "../../../"
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
        {
            previewTitle: "Default",
            props: {
                src: IMG_URL,
                alt: IMG_ALT,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With border radius",
            props: {
                src: IMG_URL,
                alt: IMG_ALT,
                borderRadius: "xxl",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With caption",
            props: {
                src: IMG_URL,
                alt: IMG_ALT,
                borderRadius: "xxl",
                caption: "Caption",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With fit cover",
            props: {
                src: IMG_URL,
                alt: IMG_ALT,
                height: 300,
                fit: "cover",
                "data-testid": "testid",
                className: "className",
            },
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
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With fallback text",
            props: {
                src: "/",
                height: 300,
                alt: "Hello",
                imgFallback: { text: "Hello", fontSize: "display-h3" },
            },
        },
    ],
}
