/*=============================================== ComponentsMixins types ===============================================*/

import type {
    CssTextAlign,
    ILibBoxShadow,
    ILibRadius,
    LibAllColors,
    LibButtonVariant,
    LibColorsHover,
    LibFontSizes,
    LibFontWeights,
    LibInputBackground,
    LibInputVariant,
    LibValidationStatus,
} from "../../types"

export interface ILibButtonMixin {
    $color: LibColorsHover
    $shadow?: ILibBoxShadow
    $borderRadius?: ILibRadius
    $variant?: LibButtonVariant
}

export interface ILibTextBaseMixin {
    $fontSize: LibFontSizes | "inherit"
    $fontWeight: LibFontWeights
    $textAlign?: CssTextAlign
    $color?: LibAllColors
    $linkColor?: LibColorsHover
}

export interface ILibInputBaseMixin {
    $validationStatus: LibValidationStatus | undefined
    $inputBackground: LibInputBackground | undefined
    $disabled: boolean | undefined
    $inputVariant: LibInputVariant | undefined
}
