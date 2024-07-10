/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { setDefaultTheme, Mixins, BREAKPOINTS, SPACERS, LAYOUTS } from "../../"
import type { MainSize } from "./types"

const getMainSize = (size: MainSize) => {
    if (typeof size === "number") return stringifyPx(size)

    const sizesMap = new Map<MainSize, LAYOUTS>([
        ["default", LAYOUTS.MAIN_DEFAULT],
        ["large", LAYOUTS.MAIN_LARGE],
        ["form", LAYOUTS.MAIN_FORM],
        ["full", LAYOUTS.MAIN_FULL],
    ])

    return sizesMap.get(size)
}

const StyledMain = styled.main<{
    $size?: MainSize
    $contentSize?: Extract<MainSize, "default" | "large" | "form">
    $minHeight: string | number
}>`
    position: relative;
    width: 100%;
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

    @media ${BREAKPOINTS.TABLET_SMALL} {
        height: inherit;
    }
`

setDefaultTheme([StyledMain])

export { StyledMain }
