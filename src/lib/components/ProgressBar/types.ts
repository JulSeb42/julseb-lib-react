/*=============================================== ProgressBar types ===============================================*/

import type { MeterHTMLAttributes } from "react"
import type { LibComponentBase, LibColorsHover } from "../../types"

export interface ILibProgressBar
    extends LibComponentBase<HTMLMeterElement>,
        MeterHTMLAttributes<HTMLMeterElement> {
    value: number
    color?: LibColorsHover
    noAnimation?: boolean
}
