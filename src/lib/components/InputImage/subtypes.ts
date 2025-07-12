import type { ILibInputImage } from "./types"

export type ILibEmptyContainer = Pick<ILibInputImage, "icons">

export type ILibHoverContainer = Pick<ILibInputImage, "icons"> & {
	isVisible: boolean
}
