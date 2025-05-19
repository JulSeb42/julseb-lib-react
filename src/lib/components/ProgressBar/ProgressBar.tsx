import type { FC } from "react"
import classNames from "classnames"
import { getPercentage, getRandomString } from "@julseb-lib/utils"
import { appendStyles } from "../../lib-utils"
import { StyledProgressBar } from "./styles"
import type { ILibProgressBar } from "./types"

/**
 * ProgressBar component for displaying a progress indicator with customizable color, animation, and value range.
 *
 * @component
 * @extends HTMLMeterElement
 * @param {Object} props - ProgressBar props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLMeterElement>} [props.ref] - Ref forwarded to the meter element.
 * @param {string} [props.className] - Additional class names.
 * @param {number} props.value - Current value of the progress bar.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.color="primary"] - Color of the progress bar.
 * @param {boolean} [props.noAnimation] - Disable animation.
 * @param {number} [props.min=0] - Minimum value.
 * @param {number} [props.max=100] - Maximum value.
 * @param {string} [props.id] - ID for the progress bar element.
 * @param {any} [props.rest] - Additional props passed to the meter element.
 * @returns {JSX.Element} The rendered ProgressBar component.
 *
 * @see https://documentation-components-react.vercel.app/components/progress-bar
 * @example
 * <ProgressBar value={60} color="success" />
 */
export const ProgressBar: FC<ILibProgressBar> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    value,
    color = "primary",
    noAnimation,
    min = 0,
    max = 100,
    id,
    ...rest
}) => {
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
