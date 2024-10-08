/*=============================================== Avatar styles ===============================================*/

import type { FC } from "react"
import styled, { css } from "styled-components"
import { setDefaultTheme, Badge, Mixins, FONT_WEIGHTS, SPACERS } from "../../"
import type {
    LibAllColors,
    ILibBorder,
    ILibRadius,
    LibSpacers,
    ILibOutline,
    LibFontSizes,
} from "../../types"

const Common = ({
    $borderRadius,
    $backgroundColor,
    $contentColor,
}: {
    $borderRadius?: ILibRadius
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
}) => css`
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
        width: var(--avatar-size);
        height: var(--avatar-size);
    }
`

const StyledAvatarContainer = styled.span<{
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
    $border?: ILibBorder
    $borderRadius?: ILibRadius
    $backgroundColor: LibAllColors
    $contentColor: LibAllColors
    $fontSize: LibFontSizes
}>`
    ${Common}
    ${({ $border }) => Mixins.Border($border)};
    overflow: hidden;
    position: relative;
    z-index: 0;
    font-weight: ${FONT_WEIGHTS.BLACK};
    line-height: var(--avatar-size);
    text-transform: uppercase;
    font-size: ${({ $fontSize }) => Mixins.FontSize($fontSize)};
`

const StyledBadge = styled(Badge)<{
    $width: number
    $paddingLeftRight: LibSpacers | "auto"
    $outline?: ILibOutline
}>`
    position: absolute;
    right: ${({ $width, $paddingLeftRight }) =>
        `calc((${$width / 2}px + ${Mixins.Spacer($paddingLeftRight)}) * -1)`};
    ${({ $outline }) => Mixins.Outline($outline)}

    &.PositionTop {
        top: ${SPACERS.XXS};
    }

    &.PositionBottom {
        bottom: ${SPACERS.XXS};
    }
` as FC<any>

setDefaultTheme([StyledAvatarContainer, StyledAvatar, StyledBadge])

export { StyledAvatarContainer, StyledAvatar, StyledBadge }
