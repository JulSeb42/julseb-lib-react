/*=============================================== Text sub components types ===============================================*/

import type { LibAllColors, CssTextAlign, LibColorsHover } from "../../types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN TEXT COMPONENTS

export interface ILibTextStyle {
    $color?: LibAllColors
    $textAlign?: CssTextAlign
    $linkColor: LibColorsHover
}

export interface ILibTextStyleHeading extends ILibTextStyle {
    $display?: boolean
}
