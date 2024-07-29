/*=============================================== ProgressBar component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { getPercentage, getRandomString } from "ts-utils-julseb"
import { HelmetStyles } from "../../lib-utils"
import { StyledProgressBar } from "./styles"
import type { ILibProgressBar } from "./types"

/**
 * @description Returns a ProgressBar component
 * @link https://documentation-components-react.vercel.app/components/progress-bar
 * @extends HTMLMeterElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop value: number
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop animated?: boolean
 */

export const ProgressBar = forwardRef<HTMLMeterElement, ILibProgressBar>(
    (
        {
            "data-testid": testid,
            as,
            className,
            value,
            color = "primary",
            animated = true,
            min = 0,
            max = 100,
            id,
            ...rest
        },
        ref
    ) => {
        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0]

        return (
            <>
                <HelmetStyles>
                    {`
                        ${
                            id
                                ? `#${id}`
                                : withClass
                                ? `.${withClass}`
                                : `.${randomClass}`
                        } {
                            --progress-value: ${getPercentage(
                                value,
                                Number(max)
                            )}%;
                            --progress-speed: ${value};
                        }
                    `}
                </HelmetStyles>

                <StyledProgressBar
                    data-testid={testid}
                    ref={ref}
                    as={as}
                    className={classNames(
                        className,
                        { Animated: animated },
                        randomClass,
                        { RadiusCircle: value < 3 }
                    )}
                    id={id}
                    min={min}
                    max={max}
                    value={value}
                    $color={color}
                    $max={Number(max)}
                    {...rest}
                />
            </>
        )
    }
)
