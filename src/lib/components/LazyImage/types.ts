import type { ILibImage } from "../Image/types"
import type { ClassNames, LibSkeletonAnimation } from "../../types"

export interface ILibLazyImage extends ILibImage {
	skeletonClasses?: ClassNames
	skeletonAnimation?: LibSkeletonAnimation
}
