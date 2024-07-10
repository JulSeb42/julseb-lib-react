/*=============================================== Skeleton types ===============================================*/

import type {
    LibAllColors,
    LibBorderProps,
    LibComponentBase,
    LibPaddingProps,
    LibRadiusProps,
} from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

const skeletonAnimations = { pulse: "pulse", shine: "shine" } as const
export type SkeletonAnimation = keyof typeof skeletonAnimations

interface CommonSkeletonProps {
    width?: string | number
    maxWidth?: string | number
    height?: string | number
    backgroundColor?: LibAllColors
    aspectRatio?: string
    borderRadius?: LibRadiusProps
    flex?: string | number
    flexGrow?: string | number
}

export interface SkeletonCardProps extends FlexboxProps, CommonSkeletonProps {
    border?: LibBorderProps
    padding?: LibPaddingProps
    isShiny?: boolean
}

export type SkeletonShineProps = LibComponentBase<HTMLSpanElement>

export interface SkeletonProps
    extends LibComponentBase<HTMLDivElement>,
        CommonSkeletonProps {
    animation?: SkeletonAnimation
    children?: never
}
