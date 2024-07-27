/*=============================================== Avatar styles ===============================================*/

import type { FC } from "react"
import styled, { css } from "styled-components"
import { setDefaultTheme, Badge, Mixins, FONT_WEIGHTS, SPACERS } from "../../"
import type {
    LibAllColors,
    ILibBorder,
    ILibRadius,
    LibSpacers,
    LibAvatarBadgePosition,
} from "../../types"

const Common = ({
    $size,
    $borderRadius,
    $backgroundColor,
    $contentColor,
}: {
    $size?: number
    $borderRadius?: ILibRadius
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
}) => css`
    width: ${$size}px;
    height: ${$size}px;
    background-color: ${({ theme }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ theme }) => Mixins.AllColors($contentColor, theme)};
    ${Mixins.BorderRadius($borderRadius)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}

    && {
        width: ${$size}px;
        height: ${$size}px;
    }
`

const StyledAvatarContainer = styled.span<{
    $size?: number
    $borderRadius?: ILibRadius
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
}>`
    ${Common}
    position: relative;
    padding: 0;
    border-style: inherit;
`

const StyledAvatar = styled.span<{
    $size?: number
    $border?: ILibBorder
    $borderRadius?: ILibRadius
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
}>`
    ${Common}
    ${({ $border }) => Mixins.Border($border)};
    overflow: hidden;
    position: relative;
    z-index: 0;
    font-weight: ${FONT_WEIGHTS.BLACK};
    line-height: ${({ $size }) => $size}px;
    text-transform: uppercase;
`

const StyledBadge = styled(Badge)<{
    $position?: LibAvatarBadgePosition
    $width: number
    $paddingLeftRight: LibSpacers | "auto"
    $outline?: ILibBorder
}>`
    position: absolute;
    right: ${({ $width, $paddingLeftRight }) =>
        `calc((${$width / 2}px + ${Mixins.Spacer($paddingLeftRight)}) * -1)`};
    top: ${({ $position }) => $position === "top" && SPACERS.XXS};
    bottom: ${({ $position }) => $position === "bottom" && SPACERS.XXS};
    ${({ $outline }) => Mixins.Outline($outline)}
` as FC<any>

setDefaultTheme([StyledAvatarContainer, StyledAvatar, StyledBadge])

export { StyledAvatarContainer, StyledAvatar, StyledBadge }
