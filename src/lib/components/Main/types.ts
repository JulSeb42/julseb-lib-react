/*=============================================== Main types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

const mainSizes = {
    default: "default",
    large: "large",
    form: "form",
    full: "full",
} as const

export type MainSize = keyof typeof mainSizes | number

interface MainPropsBase extends HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string
    as?: ElementType
    minHeight?: string | number
}

interface MainPropsSize extends MainPropsBase {
    size?: Exclude<MainSize, "full">
    contentSize?: never
}

interface MainPropsFull extends MainPropsBase {
    size?: Exclude<MainSize, "default" | "large" | "form" | number>
    contentSize?: Exclude<MainSize, "full">
}

export type MainProps = MainPropsSize | MainPropsFull
