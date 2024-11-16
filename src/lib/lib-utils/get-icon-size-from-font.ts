/*=============================================== Get icon size from font-size ===============================================*/

import { LIB_TOKENS } from ".."
import type { LibFontSizes } from "../types"

export const getIconSizeFromFont = (fontSize: LibFontSizes = "body") => {
    const getSize = (size: LibFontSizes) =>
        Number(LIB_TOKENS["font-sizes"][size].px.replace("px", ""))

    const sizesMap = new Map<LibFontSizes, number>([
        ["display-h1", getSize("display-h1")],
        ["display-h2", getSize("display-h2")],
        ["display-h3", getSize("display-h3")],
        ["display-h4", getSize("display-h4")],
        ["display-h5", getSize("display-h5")],
        ["h1", getSize("h1")],
        ["h2", getSize("h2")],
        ["h3", getSize("h3")],
        ["h4", getSize("h4")],
        ["h5", getSize("h5")],
        ["h6", getSize("h6")],
        ["body", getSize("body")],
        ["small", getSize("small")],
    ])

    return sizesMap.get(fontSize)
}
