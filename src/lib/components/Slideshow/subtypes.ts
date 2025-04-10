import type { LibSlideshowButtonPosition, DispatchState } from "../../types"
import type { ILibSlideshow } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN THOSE COMPONENTS

export interface ILibSlideshowButton
    extends Pick<ILibSlideshow, "data-testid" | "className" | "controls"> {
    position: LibSlideshowButtonPosition
    onClick: () => void
}

export interface ILibSlideshowPagination
    extends Pick<
        ILibSlideshow,
        "data-testid" | "className" | "pagination" | "images"
    > {
    setActive: DispatchState<number>
    contentLength: number
    activeSlide: number
}
