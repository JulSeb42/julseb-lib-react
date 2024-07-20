/*=============================================== ProgressCircle component ===============================================*/

import { forwardRef, useEffect, useState } from "react"
import {} from "ts-utils-julseb"
import { SrOnly } from "../../"
import { LibIcon } from "../LibIcon"
import {
    ProgressCircleContainer,
    StyledProgressCircle,
    StyledCircle,
    Content,
    Value,
    PROGRESS_CIRCLE_SIZE,
} from "./styles"
import type { ILibProgressCircle } from "./types"

const cleanPercentage = (value: number) => {
    const isNegativeOrNaN = !Number.isFinite(+value)
    const isTooHigh = value > 100
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +value
}

function Circle({ value, color = "primary", animated }: ILibProgressCircle) {
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

const ProgressFn = forwardRef(
    (
        { animated, value, color = "primary", ...rest }: ILibProgressCircle,
        ref
    ) => {
        const pct = cleanPercentage(value)

        const [animatedValue, setAnimatedValue] = useState(0)

        useEffect(() => {
            setAnimatedValue(pct)
        }, [pct])

        return (
            <StyledProgressCircle
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

/**
 * @description Returns a ProgressCircle component
 * @link https://documentation-components-react.vercel.app/components/progress-circle
 * @extends SVGElement
 * @prop data-testid?: string
 */

export const ProgressCircle = forwardRef<SVGElement, ILibProgressCircle>(
    (
        {
            "data-testid": testid,
            value,
            animated = true,
            showValue,
            icon,
            color = "primary",
            className,
            ...rest
        },
        ref
    ) => {
        const progressFnProps = {
            ref,
            animated,
            value,
            color,
            className: showValue || icon ? "ProgressCircle" : className,
            ...rest,
        }

        return showValue || icon ? (
            <ProgressCircleContainer className={className}>
                <ProgressFn {...progressFnProps} />

                <Content className={className && "Content"}>
                    {icon && (
                        <LibIcon
                            icon={icon}
                            size={PROGRESS_CIRCLE_SIZE * 0.4}
                            color="gray"
                            className={className && "Icon"}
                        />
                    )}

                    {showValue ? (
                        <Value className={className && "Value"}>{value}%</Value>
                    ) : (
                        <SrOnly className={className && "SrOnly"}>
                            {value}%
                        </SrOnly>
                    )}
                </Content>
            </ProgressCircleContainer>
        ) : (
            <ProgressFn {...progressFnProps} />
        )
    }
)
