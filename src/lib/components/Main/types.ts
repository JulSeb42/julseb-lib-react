import type { LibComponentBase, LibMainSize } from "../../types"

interface ILibMainBase extends LibComponentBase<HTMLDivElement> {
    minHeight?: string | number
}

interface MainWithSize extends ILibMainBase {
    size?: Exclude<LibMainSize, "full">
    contentSize?: never
}

interface MainWithFullPage extends ILibMainBase {
    size?: Extract<LibMainSize, "full">
    contentSize?: Exclude<LibMainSize, "full">
}

export type ILibMain = MainWithSize | MainWithFullPage
