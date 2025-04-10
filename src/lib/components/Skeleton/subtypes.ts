import type { LibAllColors, ILibRadius } from "../../types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN SKELETON COMPONENTS

export interface ILibSkeletonCommonStyles {
    $width?: string | number
    $maxWidth?: string | number
    $height?: string | number
    $backgroundColor?: LibAllColors
    $aspectRatio?: string
    $borderRadius?: ILibRadius
    $flex?: string | number
    $flexGrow?: string | number
}
