/*=============================================== Circle ===============================================*/

import classNames from "classnames"
import { StyledCircle } from "./styles"
import type { ILibProgressCircle } from "./types"

export const Circle = ({
    className,
    value,
    color = "primary",
    noAnimation,
}: ILibProgressCircle) => {
    const r = 70
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - value) * circ) / 100

    return (
        <StyledCircle
            className={classNames(className, { Animated: !noAnimation })}
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            strokeWidth={12}
            strokeDasharray={circ}
            strokeDashoffset={value ? strokePct : 0}
            $color={color}
        />
    )
}
