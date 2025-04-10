import { Youtube } from "../../../"
import type { ILibYoutube } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const YOUTUBE_SRC = "https://www.youtube.com/watch?v=33KKr1ZGSzg"

export const youtubePreview: ComponentPreview<ILibYoutube> = {
    name: "Youtube",
    component: Youtube,
    category: "components",
    import: "Youtube",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibYoutube",
    additionalTypeImports: null,
    extends: ["HTMLIFrameElement", "IframeHTMLAttributes<HTMLIFrameElement>"],
    previews: [
        {
            props: {
                src: YOUTUBE_SRC,
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
