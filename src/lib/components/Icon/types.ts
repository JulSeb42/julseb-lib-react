/*=============================================== Icon types ===============================================*/

import type { Props as SVGProps } from "react-inlinesvg"
import type { LibAllColors } from "../../types"

export interface IconProps extends SVGProps {
    "data-testid"?: string
    src: string
    size?: number
    color?: LibAllColors
}
