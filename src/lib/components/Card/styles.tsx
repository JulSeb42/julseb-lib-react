import styled from "styled-components"
import type { Property } from "csstype"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Mixins } from "../../"
import type {
    CssCursor,
    LibAllColors,
    ILibBorder,
    ILibBoxShadow,
    ILibPadding,
    ILibRadius,
    CssTextAlign,
    CssAlignContent,
    CssAlignItems,
    CssFlexDirection,
    CssFlexWrap,
    CssJustifyContent,
    CssJustifyItems,
    LibSpacers,
} from "../../types"

const StyledCard = styled.div<{
    $border?: ILibBorder
    $borderRadius?: ILibRadius
    $padding?: ILibPadding
    $cursor?: CssCursor
    $width?: string | number
    $height?: string | number
    $shadow?: ILibBoxShadow
    $backgroundColor: LibAllColors
    $textColor: LibAllColors
    $backgroundImg?: {
        $img: string
        $clip?: Property.BackgroundClip
        $origin?: Property.BackgroundOrigin
        $position?: Property.BackgroundPosition
        $repeat?: Property.BackgroundRepeat
        $size?: Property.BackgroundSize
    }
    $textAlign?: CssTextAlign
    $inline?: boolean
    $flexDirection?: CssFlexDirection
    $flexWrap?: CssFlexWrap
    $justifyContent?: CssJustifyContent
    $alignItems?: CssAlignItems
    $justifyItems?: CssJustifyItems
    $alignContent?: CssAlignContent
    $gap?: LibSpacers
    $columnGap?: LibSpacers
    $rowGap?: LibSpacers
}>`
    ${Mixins.Flexbox};
    text-decoration: none;
    overflow: hidden;
    position: relative;
    cursor: ${({ $cursor }) => $cursor};
    width: ${({ $width }) => $width && stringifyPx($width)};
    height: ${({ $height }) => $height && stringifyPx($height)};
    background-color: ${({ theme, $backgroundColor }) =>
        Mixins.AllColors($backgroundColor, theme)};
    color: ${({ theme, $textColor }) => Mixins.AllColors($textColor, theme)};
    text-align: ${({ $textAlign }) => $textAlign};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
    ${({ $border }) => Mixins.Border($border)};
    ${({ $padding }) => Mixins.Padding($padding)};
    ${({ $shadow }) => Mixins.BoxShadow($shadow)};
    ${({ $backgroundImg }) =>
        Mixins.BackgroundImage({ ...($backgroundImg as any) })};
`

setDefaultTheme([StyledCard])

export { StyledCard }
