/*=============================================== Main types ===============================================*/

import type { LibComponentBase } from "../../types"

const mainSizes = {
    default: "default",
    large: "large",
    form: "form",
    full: "full",
} as const

export type MainSize = keyof typeof mainSizes | number

interface MainPropsBase extends LibComponentBase<HTMLDivElement> {
    minHeight?: string | number
}

interface MainPropsSize extends MainPropsBase {
    size?: Extract<MainSize, "default" | "large" | "form" | number>
    contentSize?: never
}

interface MainPropsFull extends MainPropsBase {
    size?: Extract<MainSize, "full">
    contentSize?: Extract<MainSize, "default" | "large" | "form" | number>
}

export type MainProps = MainPropsSize | MainPropsFull
