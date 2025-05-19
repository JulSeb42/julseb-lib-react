import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { MEDIA, Mixins, setDefaultTheme } from "../../"
import type { LibAllColors, LibSpacers } from "../../types"

const StyledWrapper = styled.section<{
    $gap: LibSpacers
    $backgroundColor: LibAllColors
    $minHeight: string | number
}>`
    position: relative;
    background-color: ${({ $backgroundColor, theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    height: ${({ $minHeight }) => stringifyPx($minHeight)};
    min-height: ${({ $minHeight }) => stringifyPx($minHeight)};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $justifyContent: "center",
        })}

    @media ${MEDIA.BREAKPOINT_TABLET_LARGE} {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: ${({ $minHeight }) => stringifyPx($minHeight)};
    }
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
