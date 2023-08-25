/*=============================================== Skeleton types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    LibAllColors,
    LibBorderProps,
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

export interface SkeletonShineProps extends HTMLAttributes<HTMLSpanElement> {
    "data-testid"?: string
    as?: ElementType
}

export interface SkeletonProps
    extends HTMLAttributes<HTMLDivElement>,
        CommonSkeletonProps {
    "data-testid"?: string
    as?: ElementType
    animation?: SkeletonAnimation
    children?: never
}
