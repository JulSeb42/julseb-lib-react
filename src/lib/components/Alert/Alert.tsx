import type { FC } from "react"
import classNames from "classnames"
import { stringifyPx, getRandomString } from "@julseb-lib/utils"
import { Text } from "../../"
import { appendStyles } from "../../lib-utils"
import type { LibAllColors } from "../../types"
import { StyledAlert } from "./styles"
import type { ILibAlert } from "./types"

const alertStyles: {
    [key: string]: {
        backgroundColor: LibAllColors
        borderColor: LibAllColors
    }
} = {
    primary: {
        backgroundColor: "primary-50",
        borderColor: "primary-500",
    },
    secondary: {
        backgroundColor: "secondary-50",
        borderColor: "secondary-500",
    },
    success: {
        backgroundColor: "success-50",
        borderColor: "success-500",
    },
    danger: {
        backgroundColor: "danger-50",
        borderColor: "danger-500",
    },
    warning: {
        backgroundColor: "warning-50",
        borderColor: "warning-500",
    },
    gray: {
        backgroundColor: "gray-50",
        borderColor: "gray-500",
    },
}

/**
 * Alert component for displaying important messages or notifications.
 *
 * @component
 * @param {Object} props - Alert props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {ReactNode} [props.children] - Content of the alert.
 * @param {number} [props.maxWidth] - Maximum width of the alert.
 * @param {LibAllColors} [props.textColor="font"] - Text color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding="s"] - Padding for the alert.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius="m"] - Border radius for the alert.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="xs"] - Gap between alert content.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "black" | "white"} [props.alertColor="primary"] - Predefined alert color.
 * @param {LibAllColors} [props.backgroundColor] - Custom background color (overrides alertColor).
 * @param {Object} [props.border] - Border style, width, and color.
 * @returns {JSX.Element} The rendered Alert component.
 *
 * @example
 * <Alert alertColor="success" padding="m" borderRadius="l">
 *   This is a success alert!
 * </Alert>
 */
export const Alert: FC<ILibAlert> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    id,
    children,
    maxWidth,
    textColor = "font",
    padding = "s",
    borderRadius = "m",
    gap = "xs",
    alertColor = "primary",
    backgroundColor,
    border,
    ...rest
}) => {
    const styles = alertStyles[alertColor]
    const randomClass = getRandomString(10, true)
    const withClass = className?.split(" ")[0] || randomClass

    appendStyles(`
            ${id ? `#${id}` : `.${withClass}`} {
                --alert-max-width: ${stringifyPx(maxWidth || "100%")};
            }
        `)

    return (
        <>
            <StyledAlert
                data-testid={testid}
                ref={ref}
                as={as || typeof children === "string" ? Text : "div"}
                className={classNames(className, randomClass)}
                id={id}
                $backgroundColor={
                    backgroundColor || styles.backgroundColor || "primary-50"
                }
                $border={{
                    color: styles.borderColor || "primary",
                    ...border,
                }}
                $borderRadius={borderRadius}
                $gap={gap}
                $padding={padding}
                $textColor={textColor}
                {...rest}
            >
                {children}
            </StyledAlert>
        </>
    )
}
