import type { FC } from "react"
import { LibIcon } from "../LibIcon"
import { ProgressCircleFn } from "./ProgressCircleFn"
import { Value } from "./Value"
import {
    ProgressCircleContainer,
    Content,
    PROGRESS_CIRCLE_SIZE,
} from "./styles"
import type { ILibProgressCircle } from "./types"

/**
 * ProgressCircle component for displaying a circular progress indicator with optional value, icon, color, and animation.
 *
 * @component
 * @extends SVGElement
 * @param {Object} props - ProgressCircle props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<SVGElement>} [props.ref] - Ref forwarded to the SVG element.
 * @param {number} props.value - Current value of the progress circle.
 * @param {boolean} [props.noAnimation] - Disable animation.
 * @param {string} [props.color="primary"] - Any color from the library.
 * @param {CSSProperties} [props.containerStyle] - Style for the container element.
 * @param {boolean} [props.showValue] - Show the value in the center (only if icon is not defined).
 * @param {string | JSX.Element} [props.icon] - Icon to display in the center (only if showValue is not set to true).
 * @param {number} [props.iconSize] - Size of the icon (only if icon is defined).
 * @param {string} [props.iconBaseUrl] - Base URL for the icon (only if icon is defined).
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the SVG element.
 * @returns {JSX.Element} The rendered ProgressCircle component.
 *
 * @see https://documentation-components-react.vercel.app/components/progress-circle
 * @example
 * <ProgressCircle value={75} showValue color="success" />
 * <ProgressCircle value={50} icon="check" iconSize={32} color="primary" />
 */
export const ProgressCircle: FC<ILibProgressCircle> = ({
    "data-testid": testid,
    ref,
    value,
    noAnimation,
    showValue,
    icon,
    iconSize,
    iconBaseUrl,
    color = "primary",
    className,
    containerStyle,
    ...rest
}) => {
    const progressFnProps = {
        "data-testid":
            testid && (showValue || icon ? `${testid}.ProgressCircle` : testid),
        ref,
        noAnimation,
        value,
        color,
        className: showValue || icon ? "ProgressCircle" : className,
        ...rest,
    }

    return showValue || icon ? (
        <ProgressCircleContainer
            data-testid={testid}
            className={className}
            style={containerStyle}
        >
            <ProgressCircleFn {...progressFnProps} />

            <Content
                data-testid={testid && `${testid}.Content`}
                className={className && "Content"}
            >
                {icon && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon`}
                        className={className && "ProgressIcon"}
                        icon={icon}
                        size={iconSize ?? PROGRESS_CIRCLE_SIZE * 0.4}
                        color="gray"
                        baseUrl={iconBaseUrl}
                    />
                )}

                <Value
                    data-testid={testid}
                    className={className}
                    value={value}
                    showValue={showValue}
                />
            </Content>
        </ProgressCircleContainer>
    ) : (
        <ProgressCircleFn {...progressFnProps} />
    )
}
