/*=============================================== Slideshow types ===============================================*/

import type { ReactNode } from "react"
import type {
    LibColorsHover,
    LibComponentBase,
    LibIcon,
    LibSlideshowButtonSize,
    LibSlideshowPagination,
    LibSlideshowPaginationPosition,
    CssObjectFit,
} from "../../types"

type PaginationWithThumbnails = {
    type?: LibSlideshowPagination
    position?: LibSlideshowPaginationPosition
    hideOnTouch?: boolean
    color?: never
}

type PaginationWithOther = {
    type?: Exclude<LibSlideshowPagination, "thumbnails">
    position?: LibSlideshowPaginationPosition
    hideOnTouch?: boolean
    color?: LibColorsHover
}

type Controls = {
    "data-testid"?: string
    className?: string
    size?: LibSlideshowButtonSize
    color?: LibColorsHover
    hideOnTouch?: boolean
    iconPrev?: LibIcon
    iconNext?: LibIcon
    iconPrevSize?: number
    iconNextSize?: number
    labelPrev?: string
    labelNext?: string
}

type Options = {
    autoPlay?: number
    speed?: number
}

interface ILibSlideshowBase extends LibComponentBase<HTMLDivElement> {
    height?: string | number
    imgFit?: CssObjectFit
    /**
     * @type Controls
     * @type boolean or object
     * @prop "data-testid"?: string
     * @prop className?: string
     * @prop size?: LibSlideshowButtonSize
     * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
     * @prop hideOnTouch?: boolean
     * @prop iconPrev?: string | JSX.Element
     * @prop iconNext?: string | JSX.Element
     * @prop iconPrevSize?: number
     * @prop iconNextSize?: number
     * @prop labelPrev?: string
     * @prop labelNext?: string
     */
    controls?: boolean | Controls
    /**
     * @type Options
     * @prop autoPlay?: number
     * @prop speed?: number
     */
    options?: Options
}

interface SlideshowWithChildren extends ILibSlideshowBase {
    images?: never
    children: Array<ReactNode>
    /**
     * @type PaginationWithOther
     * @type boolean or object
     * @prop type?: "dots" | "dots-outline" | "bars"
     * @prop position?: "inside" | "outside"
     * @prop hideOnTouch?: boolean
     * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
     */
    pagination?: boolean | PaginationWithOther
}

interface SlideshowWithImages extends ILibSlideshowBase {
    images: Array<string>
    children?: never
    /**
     * @type PaginationWithThumbnails
     * @prop type?: "dots" | "dots-outline" | "bars" | "thumbnails"
     * @prop position?: "inside" | "outside"
     * @prop hideOnTouch?: boolean
     */
    pagination?: boolean | PaginationWithThumbnails
}

export type ILibSlideshow = SlideshowWithImages | SlideshowWithChildren
