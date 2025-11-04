import type { CssObjectFit, LibComponentBase, ReactChildren } from "../../types"

interface ILibCarouselBase extends LibComponentBase<HTMLDivElement> {
	stopOnHover?: boolean
	showItems?: 2 | 3 | 4 | 5 | 6
	speed?: number
}

interface CarouselWithImages extends ILibCarouselBase {
	items: Array<string>
	imgFit?: Extract<CssObjectFit, "cover" | "contain">
}

interface CarouselWithChildren extends ILibCarouselBase {
	items: Array<ReactChildren>
	imgFit?: never
}

export type ILibCarousel = CarouselWithImages | CarouselWithChildren
