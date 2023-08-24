/*=============================================== Utils ===============================================*/

import { cssVariables } from "../.."
import type { TextIconTag } from "./types"

export const getIconHeight = (tag: TextIconTag, display?: boolean) => {
    const pxToNumber = (value: string) => Number(value.replace("px", ""))

    const sizesMap = new Map<TextIconTag, number>([
        [
            "h1",
            pxToNumber(
                display
                    ? cssVariables["font-sizes"]["display-h1"].px
                    : cssVariables["font-sizes"].h1.px,
            ),
        ],
        [
            "h2",
            pxToNumber(
                display
                    ? cssVariables["font-sizes"]["display-h2"].px
                    : cssVariables["font-sizes"].h2.px,
            ),
        ],
        [
            "h3",
            pxToNumber(
                display
                    ? cssVariables["font-sizes"]["display-h3"].px
                    : cssVariables["font-sizes"].h3.px,
            ),
        ],
        [
            "h4",
            pxToNumber(
                display
                    ? cssVariables["font-sizes"]["display-h4"].px
                    : cssVariables["font-sizes"].h4.px,
            ),
        ],
        [
            "h5",
            pxToNumber(
                display
                    ? cssVariables["font-sizes"]["display-h5"].px
                    : cssVariables["font-sizes"].h5.px,
            ),
        ],
        ["h6" || "blockquote", pxToNumber(cssVariables["font-sizes"].h6.px)],
        ["p", pxToNumber(cssVariables["font-sizes"].body.px)],
        ["small", pxToNumber(cssVariables["font-sizes"].small.px)],
    ])

    return sizesMap.get(tag)
}
