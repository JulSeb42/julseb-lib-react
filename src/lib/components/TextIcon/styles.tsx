import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { Mixins, setDefaultTheme } from "../../"
import { getIconHeight } from "./utils"
import type { LibSpacers, LibTextIconTag } from "../../types"

const StyledTextIcon = styled.div<{ $gap?: LibSpacers }>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
        })}

    & > *:not(span) {
        flex-grow: 1;
    }
`

const IconContainer = styled.span<{
    $tag: LibTextIconTag
    $iconSize?: number
    $display?: boolean
}>`
    height: ${({ $tag, $display, $iconSize }) =>
        $iconSize
            ? stringifyPx($iconSize * 1.5)
            : stringifyPx((getIconHeight($tag, $display) || 16) * 1.5)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

setDefaultTheme([StyledTextIcon, IconContainer])

export { StyledTextIcon, IconContainer }
