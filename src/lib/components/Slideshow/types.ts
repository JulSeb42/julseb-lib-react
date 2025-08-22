import type { ReactNode } from "react"
import type { LibComponentBase, CssObjectFit, LibRadiuses } from "../../types"
import type {
	ILibPaginationControls,
	ILibPaginationOptions,
	ILibSlideshowPagination,
} from "./subtypes"

interface ILibSlideshowBase extends LibComponentBase<HTMLDivElement> {
	imgFit?: CssObjectFit
	hideControls?: boolean
	controls?: ILibPaginationControls
	options?: ILibPaginationOptions
	borderRadius?: LibRadiuses
	hidePagination?: boolean
}

interface SlideshowWithImages extends ILibSlideshowBase {
	images?: Array<string>
	pagination?: Pick<
		Partial<ILibSlideshowPagination>,
		"color" | "className" | "hideOnTouch" | "images" | "position" | "type"
	>
	children?: never
}

interface SlideshowWithChildren extends ILibSlideshowBase {
	images?: never
	pagination?: Pick<
		Partial<ILibSlideshowPagination>,
		"color" | "className" | "hideOnTouch" | "images" | "position" | "type"
	>
	children?: Array<ReactNode>
}

export type ILibSlideshow = SlideshowWithImages | SlideshowWithChildren
