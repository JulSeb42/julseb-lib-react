import type { MouseEventHandler } from "react"
import type {
	LibSlideshowPaginationPosition,
	LibSlideshowPagination,
	LibSlideshowButtonsPosition,
	LibSlideshowButtonsSize,
	LibColorsHover,
	ReactElement,
	DispatchState,
} from "../../types"
import type { ILibSlideshow } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN ACCORDION COMPONENTS

/*====================== Pagination ======================*/

export interface ILibSlideshowPagination {
	position?: LibSlideshowPaginationPosition
	hideOnTouch?: boolean
	color?: LibColorsHover
	type?: LibSlideshowPagination
}

/*====================== Controls ======================*/

export interface ILibPaginationControls {
	className?: string
	size?: LibSlideshowButtonsSize
	color?: LibColorsHover
	hideOnTouch?: boolean
	icons?: { prev?: ReactElement; next?: ReactElement }
	labelPrev?: string
	labelNext?: string
}

/*====================== Options ======================*/

export interface ILibPaginationOptions {
	autoPlay?: number
	speed?: number
}

/*====================== SlideshowButtons ======================*/

export interface ILibSlideshowButton
	extends Pick<ILibSlideshow, "className" | "controls" | "hideControls"> {
	position: LibSlideshowButtonsPosition
	onClick: MouseEventHandler<HTMLButtonElement>
}

/*====================== SlideshowPagination ======================*/

export interface ILibSlideshowPagination
	extends Pick<
		ILibSlideshow,
		"className" | "pagination" | "images" | "hidePagination"
	> {
	active: number
	setActive: DispatchState<number>
	contentLength: number
	handleClick: (n: number) => void
}
