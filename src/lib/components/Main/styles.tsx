/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Mixins, MEDIA, SPACERS, LAYOUTS } from "../../"
import type { LibMainSize } from "../../types"

const getMainSize = (size: LibMainSize) => {
    if (typeof size === "number") return stringifyPx(size)

    const sizesMap = new Map<LibMainSize, LAYOUTS>([
        ["default", LAYOUTS.MAIN_DEFAULT],
        ["large", LAYOUTS.MAIN_LARGE],
        ["form", LAYOUTS.MAIN_FORM],
        ["full", LAYOUTS.MAIN_FULL],
    ])

    return sizesMap.get(size)
}

const StyledMain = styled.main<{
    $size?: LibMainSize
    $contentSize?: Extract<LibMainSize, "default" | "large" | "form">
    $minHeight: string | number
}>`
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${({ $minHeight }) => stringifyPx($minHeight)};
    max-width: ${({ $size }) => getMainSize($size || "default")};
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

    ${({ $size, $contentSize }) =>
        $size === "full" &&
        css`
            display: grid;
            grid-template-columns: 1fr ${getMainSize($contentSize || "default")} 1fr;

            & > * {
                grid-column: 2;
            }
        `}

    @media ${MEDIA.BREAKPOINT_TABLET_SMALL} {
        height: unset;
    }
`

setDefaultTheme([StyledMain])

export { StyledMain }
