import type { LibComponentBase, LibOverlays, ILibPadding } from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

export interface ILibCover
    extends LibComponentBase<HTMLDivElement>,
        ILibFlexbox {
    img: string
    alt?: string
    overlay?: LibOverlays
    height?: number | string
    padding?: ILibPadding
}
