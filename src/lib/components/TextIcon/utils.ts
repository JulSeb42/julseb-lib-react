/*=============================================== Utils ===============================================*/

import { libTokens } from "../.."
import type { LibTextIconTag } from "../../types"

export const getIconHeight = (tag: LibTextIconTag, display?: boolean) => {
    const pxToNumber = (value: string) => Number(value.replace("px", ""))

    const sizesMap = new Map<LibTextIconTag, number>([
        [
            "h1",
            pxToNumber(
                display
                    ? libTokens["font-sizes"]["display-h1"].px
                    : libTokens["font-sizes"].h1.px
            ),
        ],
        [
            "h2",
            pxToNumber(
                display
                    ? libTokens["font-sizes"]["display-h2"].px
                    : libTokens["font-sizes"].h2.px
            ),
        ],
        [
            "h3",
            pxToNumber(
                display
                    ? libTokens["font-sizes"]["display-h3"].px
                    : libTokens["font-sizes"].h3.px
            ),
        ],
        [
            "h4",
            pxToNumber(
                display
                    ? libTokens["font-sizes"]["display-h4"].px
                    : libTokens["font-sizes"].h4.px
            ),
        ],
        [
            "h5",
            pxToNumber(
                display
                    ? libTokens["font-sizes"]["display-h5"].px
                    : libTokens["font-sizes"].h5.px
            ),
        ],
        ["h6" || "blockquote", pxToNumber(libTokens["font-sizes"].h6.px)],
        ["p", pxToNumber(libTokens["font-sizes"].body.px)],
        ["small", pxToNumber(libTokens["font-sizes"].small.px)],
    ])

    return sizesMap.get(tag)
}
