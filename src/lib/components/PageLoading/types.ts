import type {
    LibComponentBase,
    LibAllColors,
    LibLoaderVariant,
} from "../../types"

export interface ILibPageLoading extends LibComponentBase<HTMLDivElement> {
    backgroundColor?: LibAllColors
    loaderColor?: LibAllColors
    loaderVariant?: LibLoaderVariant
    stopScrolling?: boolean
    children?: never
}
