/*=============================================== Skeleton types ===============================================*/

import type {
    LibAllColors,
    ILibBorder,
    LibComponentBase,
    ILibPadding,
    ILibRadius,
    LibSkeletonAnimation,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

interface ILibSkeletonCommon {
    width?: string | number
    maxWidth?: string | number
    height?: string | number
    backgroundColor?: LibAllColors
    aspectRatio?: string
    borderRadius?: ILibRadius
    flex?: string | number
    flexGrow?: string | number
}

export interface ILibSkeletonCard extends ILibFlexbox, ILibSkeletonCommon {
    border?: ILibBorder
    padding?: ILibPadding
    isShiny?: boolean
}

export type ILibSkeletonShine = LibComponentBase<HTMLSpanElement>

export interface ILibSkeleton
    extends LibComponentBase<HTMLDivElement>,
        ILibSkeletonCommon {
    animation?: LibSkeletonAnimation
    children?: never
}
