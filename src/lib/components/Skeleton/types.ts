import type {
	LibAllColors,
	LibComponentBase,
	LibRadiuses,
	LibSkeletonAnimation,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

interface ILibSkeletonCommon {
	backgroundColor?: LibAllColors
	borderRadius?: LibRadiuses
}

export interface ILibSkeletonCard extends ILibFlexbox, ILibSkeletonCommon {
	isShiny?: boolean
}

export interface ILibSkeleton
	extends LibComponentBase<HTMLDivElement>,
		ILibSkeletonCommon {
	animation?: LibSkeletonAnimation
	children?: never
}
