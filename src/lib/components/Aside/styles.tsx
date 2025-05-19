import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, LAYOUTS, Mixins, SPACERS, MEDIA } from "../../"
import type { LibAsideSize } from "../../types"

const getAsideSize = (size: LibAsideSize) => {
    if (typeof size === "number") return stringifyPx(size)

    const sizesMap = new Map<LibAsideSize, LAYOUTS>([
        ["default", LAYOUTS.ASIDE_DEFAULT],
        ["small", LAYOUTS.ASIDE_SMALL],
    ])

    return sizesMap.get(size)
}

const StyledAside = styled.aside<{
    $size?: LibAsideSize
}>`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    max-width: ${({ $size }) => getAsideSize($size || "default")};
    padding: ${SPACERS.XXL} 0;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "flex-start",
        $gap: "l",
    })}
    ${Mixins.StretchTags}

    & > * {
        flex-shrink: 0;
    }

    @media ${MEDIA.BREAKPOINT_TABLET_LARGE} {
        width: 100%;
        max-width: ${({ $size }) => getAsideSize($size || "default")};
        height: unset;
        min-height: unset;
        padding: ${SPACERS.L} 0;
    }
`

setDefaultTheme([StyledAside])

export { StyledAside }
