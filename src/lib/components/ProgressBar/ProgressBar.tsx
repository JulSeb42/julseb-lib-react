/*=============================================== ProgressBar component ===============================================*/

import { forwardRef, type CSSProperties } from "react"
import { getPercentage } from "ts-utils-julseb"
import { StyledProgressBar } from "./styles"
import type { ProgressBarProps } from "./types"

/**
 * @description Returns a ProgressBar component
 * @link https://documentation-components-react.vercel.app/components/progress-bar
 * @extends HTMLMeterElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const ProgressBar = forwardRef<HTMLMeterElement, ProgressBarProps>(
    (
        {
            "data-testid": testid,
            as,
            value,
            color = "primary",
            animated = true,
            min = 0,
            max = 100,
            style,
            ...rest
        },
        ref
    ) => {
        const styles: CSSProperties = {
            ["--progress-value" as any]:
                getPercentage(value, Number(max)) + "%",
            ["--progress-speed" as any]: value,
            ...style,
        }

        return (
            <StyledProgressBar
                data-testid={testid}
                ref={ref}
                as={as}
                style={styles}
                min={min}
                max={max}
                value={value}
                $value={value}
                $color={color}
                $isAnimated={animated}
                $max={Number(max)}
                {...rest}
            />
        )
    }
)
