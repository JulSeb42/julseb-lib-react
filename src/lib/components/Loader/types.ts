import type {
    LibAllColors,
    LibComponentBase,
    LibLoaderVariant,
} from "../../types"

interface ILibLoaderBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    color?: LibAllColors
    children?: never
}

interface LoaderWithBorder extends ILibLoaderBase {
    variant?: Exclude<LibLoaderVariant, 4>
    borderWidth?: number
}

interface LoaderWithDots extends ILibLoaderBase {
    variant?: Extract<LibLoaderVariant, 4>
    borderWidth?: never
}

export type ILibLoader = LoaderWithBorder | LoaderWithDots
