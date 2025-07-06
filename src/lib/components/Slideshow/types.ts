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
}

interface SlideshowWithImages extends ILibSlideshowBase {
	images?: Array<string>
	hidePagination?: boolean
	pagination?: Pick<
		ILibSlideshowPagination,
		| "color"
		| "className"
		| "hideOnTouch"
		| "images"
		| "pagination"
		| "hidePagination"
		| "position"
		| "type"
	>
	children?: never
}

interface SlideshowWithChildren extends ILibSlideshowBase {
	images?: never
	hidePagination?: boolean
	pagination?: ILibSlideshowPagination
	children?: Array<ReactNode>
}

export type ILibSlideshow = SlideshowWithImages | SlideshowWithChildren
