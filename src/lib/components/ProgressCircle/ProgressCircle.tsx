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

/**
 * @description Returns a ProgressCircle component
 * @link https://documentation-components-react.vercel.app/components/progress-circle
 * @extends SVGElement
 * @prop data-testid?: string
 * @prop value: number
 * @prop animated?: boolean
 * @prop color?: Any color from the library
 * @prop showValue?: boolean => only if icon is not defined
 * @prop icon?: string | JSX.Element => only if showValue is not defined
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
            "data-testid":
                testid &&
                (showValue || icon ? `${testid}.ProgressCircle` : testid),
            ref,
            animated,
            value,
            color,
            className: showValue || icon ? "ProgressCircle" : className,
            ...rest,
        }

        return showValue || icon ? (
            <ProgressCircleContainer data-testid={testid} className={className}>
                <ProgressFn {...progressFnProps} />

                <Content
                    data-testid={testid && `${testid}.Content`}
                    className={className && "Content"}
                >
                    {icon && (
                        <LibIcon
                            data-testid={testid && `${testid}.Icon`}
                            icon={icon}
                            size={PROGRESS_CIRCLE_SIZE * 0.4}
                            color="gray"
                            className={className && "Icon"}
                        />
                    )}

                    {showValue ? (
                        <Value
                            data-testid={testid && `${testid}.Value`}
                            className={className && "Value"}
                        >
                            {value}%
                        </Value>
                    ) : (
                        <SrOnly
                            data-testid={testid && `${testid}.SrOnly`}
                            className={className && "SrOnly"}
                        >
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
