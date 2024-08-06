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
            noAnimation,
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
                        value={!noAnimation ? animatedValue : pct}
                        noAnimation={noAnimation}
                        color={color}
                    />
                </g>
            </StyledProgressCircle>
        )
    }
)
