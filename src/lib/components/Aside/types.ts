import type { LibComponentBase, LibAsideSize } from "../../types"

export interface ILibAside extends LibComponentBase<HTMLDivElement> {
    size?: LibAsideSize
    minHeight?: string | number
}
