/*=============================================== ProgressFn ===============================================*/

import { forwardRef, useEffect, useState } from "react"
import { cleanPercentage } from "./clean-percentage"
import { Circle } from "./Circle"
import { StyledProgressCircle, PROGRESS_CIRCLE_SIZE } from "./styles"
import type { ILibProgressCircle } from "./types"

export const ProgressCircleFn = forwardRef(
    (
        {
            "data-testid": testid,
            animated,
            value,
            color = "primary",
            ...rest
        }: ILibProgressCircle,
        ref
    ) => {
        const pct = cleanPercentage(value)

        const [animatedValue, setAnimatedValue] = useState(0)

        useEffect(() => {
            setAnimatedValue(pct)
        }, [pct])

        return (
            <StyledProgressCircle
                data-testid={testid}
                width={PROGRESS_CIRCLE_SIZE}
                height={PROGRESS_CIRCLE_SIZE}
                viewBox="0 0 200 200"
                ref={ref}
                {...rest}
            >
                <g transform={`rotate(-90 ${"100 100"})`}>
                    <Circle value={100} color="gray-200" />
                    <Circle
                        value={animated ? animatedValue : pct}
                        animated={animated}
                        color={color}
                    />
                </g>
            </StyledProgressCircle>
        )
    }
)
