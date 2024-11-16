/*=============================================== ProgressBar component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { getPercentage, getRandomString } from "@julseb-lib/utils"
import { appendStyles } from "../../lib-utils"
import { StyledProgressBar } from "./styles"
import type { ILibProgressBar } from "./types"

/**
 * @description Returns a ProgressBar component
 * @link https://documentation-components-react.vercel.app/components/progress-bar
 * @extends HTMLMeterElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLMeterElement>
 * @prop value: number
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop noAnimation?: boolean
 */
export const ProgressBar = forwardRef<HTMLMeterElement, ILibProgressBar>(
    (
        {
            "data-testid": testid,
            as,
            className,
            value,
            color = "primary",
            noAnimation,
            min = 0,
            max = 100,
            id,
            ...rest
        },
        ref
    ) => {
        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0] || randomClass

        appendStyles(`
            ${id ? `#${id}` : `.${withClass}`} {
                --progress-value: ${getPercentage(value, Number(max))}%;
                --progress-speed: ${value};
            }
        `)

        return (
            <StyledProgressBar
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(
                    className,
                    { Animated: !noAnimation },
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
        )
    }
)
