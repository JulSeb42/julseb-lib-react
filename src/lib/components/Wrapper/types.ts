import type { LibComponentBase, LibSpacers, LibAllColors } from "../../types"

export interface ILibWrapper extends LibComponentBase<HTMLDivElement> {
    gap?: LibSpacers
    backgroundColor?: LibAllColors
    minHeight?: string | number
}
