/*=============================================== Alert component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { stringifyPx, getRandomString } from "ts-utils-julseb"
import { Text } from "../../"
import { HelmetStyles } from "../../lib-utils"
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
 * @description Returns a Alert component
 * @link https://documentation-components-react.vercel.app/components/alert
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop maxWidth?: number
 * @prop textColor?: Any color from the library
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop alertColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "gray" => only if backgroundColor is not defined
 * @prop backgroundColor?: Any color from the library => only if alertColor is not defined
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library } => color only if alertColor is not defined
 */

export const Alert = forwardRef<HTMLDivElement, ILibAlert>(
    (
        {
            "data-testid": testid,
            as,
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
        },
        ref
    ) => {
        const styles = alertStyles[alertColor]
        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0] || randomClass

        return (
            <>
                <HelmetStyles>
                    {`
                        ${id ? `#${id}` : `.${withClass}`} {
                            --alert-max-width: ${stringifyPx(
                                maxWidth || "100%"
                            )};
                        }
                    `}
                </HelmetStyles>

                <StyledAlert
                    data-testid={testid}
                    ref={ref}
                    as={as || typeof children === "string" ? Text : "div"}
                    className={classNames(className, randomClass)}
                    id={id}
                    $backgroundColor={
                        backgroundColor ||
                        styles.backgroundColor ||
                        "primary-50"
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
)
