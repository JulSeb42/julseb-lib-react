/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, LAYOUTS, Mixins, SPACERS, BREAKPOINTS } from "../../"
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
    $minHeight: string | number
}>`
    position: relative;
    width: 100%;
    min-height: ${({ $minHeight }) => stringifyPx($minHeight)};
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

    @media ${BREAKPOINTS.TABLET_SMALL} {
        height: inherit;
    }
`

setDefaultTheme([StyledAside])

export { StyledAside }
