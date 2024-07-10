/*=============================================== ProgressBar types ===============================================*/

import type { MeterHTMLAttributes } from "react"
import type { LibComponentBase, LibColorsHover } from "../../types"

export interface ProgressBarProps
    extends LibComponentBase<HTMLMeterElement>,
        MeterHTMLAttributes<HTMLMeterElement> {
    value: number
    color?: LibColorsHover
    animated?: boolean
}
