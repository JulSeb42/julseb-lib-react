import type { HTMLAttributes } from "react"
import type { LibAllColors } from "../types"

export interface ILibIcon extends HTMLAttributes<HTMLOrSVGElement> {
    "data-testid"?: string
    className?: string
    size?: number
    color?: LibAllColors
}
