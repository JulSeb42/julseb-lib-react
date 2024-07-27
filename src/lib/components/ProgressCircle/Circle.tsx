/*=============================================== Circle ===============================================*/

import { StyledCircle } from "./styles"
import type { ILibProgressCircle } from "./types"

export function Circle({
    value,
    color = "primary",
    animated,
}: ILibProgressCircle) {
    const r = 70
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - value) * circ) / 100

    return (
        <StyledCircle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            strokeWidth={12}
            strokeDasharray={circ}
            strokeDashoffset={value ? strokePct : 0}
            $color={color}
            $isAnimated={animated}
        />
    )
}
