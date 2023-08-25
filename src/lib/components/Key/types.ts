/*=============================================== Key types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { LibColorsHover } from "../../types"

const sizes = { large: "large", small: "small" } as const
export type KeySize = keyof typeof sizes

export interface KeyProps extends HTMLAttributes<HTMLSpanElement> {
    "data-testid"?: string
    as?: ElementType
    keys: string[]
    size?: KeySize
    accentColor?: LibColorsHover
    withSeparator?: boolean
    children?: never
}
