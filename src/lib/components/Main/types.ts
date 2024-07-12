/*=============================================== Main types ===============================================*/

import type { LibComponentBase, LibMainSize } from "../../types"

interface ILibMainBase extends LibComponentBase<HTMLDivElement> {
    minHeight?: string | number
}

interface MainWithSize extends ILibMainBase {
    size?: Extract<LibMainSize, "default" | "large" | "form" | number>
    contentSize?: never
}

interface MainWithFullPage extends ILibMainBase {
    size?: Extract<LibMainSize, "full">
    contentSize?: Extract<LibMainSize, "default" | "large" | "form" | number>
}

export type ILibMain = MainWithSize | MainWithFullPage
