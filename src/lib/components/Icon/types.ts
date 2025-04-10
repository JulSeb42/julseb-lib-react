import type { Props as SVGProps } from "react-inlinesvg"
import type { LibAllColors } from "../../types"

export interface ILibIcon extends SVGProps {
    "data-testid"?: string
    src: string
    size?: number
    color?: LibAllColors
    baseUrl?: string
    children?: never
}
