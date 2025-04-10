// @ts-nocheck

import { LIB_TOKENS } from "../.."
import type { LibTextIconTag } from "../../types"

export const getIconHeight = (tag: LibTextIconTag, display?: boolean) => {
    const pxToNumber = (value: string) => Number(value.replace("px", ""))

    const sizesMap = new Map<LibTextIconTag, number>([
        [
            "h1",
            pxToNumber(
                display
                    ? LIB_TOKENS["font-sizes"]["display-h1"].px
                    : LIB_TOKENS["font-sizes"].h1.px
            ),
        ],
        [
            "h2",
            pxToNumber(
                display
                    ? LIB_TOKENS["font-sizes"]["display-h2"].px
                    : LIB_TOKENS["font-sizes"].h2.px
            ),
        ],
        [
            "h3",
            pxToNumber(
                display
                    ? LIB_TOKENS["font-sizes"]["display-h3"].px
                    : LIB_TOKENS["font-sizes"].h3.px
            ),
        ],
        [
            "h4",
            pxToNumber(
                display
                    ? LIB_TOKENS["font-sizes"]["display-h4"].px
                    : LIB_TOKENS["font-sizes"].h4.px
            ),
        ],
        [
            "h5",
            pxToNumber(
                display
                    ? LIB_TOKENS["font-sizes"]["display-h5"].px
                    : LIB_TOKENS["font-sizes"].h5.px
            ),
        ],
        ["h6" || "blockquote", pxToNumber(LIB_TOKENS["font-sizes"].h6.px)],
        ["p", pxToNumber(LIB_TOKENS["font-sizes"].body.px)],
        ["small", pxToNumber(LIB_TOKENS["font-sizes"].small.px)],
    ])

    return sizesMap.get(tag)
}
