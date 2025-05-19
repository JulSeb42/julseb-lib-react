import type { Props as SVGProps } from "react-inlinesvg"
import type { LibAllColors } from "../../types"
import type { Ref } from "react"

export interface ILibIcon extends SVGProps {
    "data-testid"?: string
    ref?: Ref<SVGElement>
    src: string
    size?: number
    color?: LibAllColors
    baseUrl?: string
    children?: never
}
