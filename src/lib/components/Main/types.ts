/*=============================================== Main types ===============================================*/

import type { LibComponentBase, LibMainSize } from "../../types"

interface MainPropsBase extends LibComponentBase<HTMLDivElement> {
    minHeight?: string | number
}

interface MainPropsSize extends MainPropsBase {
    size?: Extract<LibMainSize, "default" | "large" | "form" | number>
    contentSize?: never
}

interface MainPropsFull extends MainPropsBase {
    size?: Extract<LibMainSize, "full">
    contentSize?: Extract<LibMainSize, "default" | "large" | "form" | number>
}

export type MainProps = MainPropsSize | MainPropsFull
