/*=============================================== Alert component ===============================================*/

import { forwardRef } from "react"
import { Text } from "../../"
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
 */

export const Alert = forwardRef<HTMLDivElement, ILibAlert>(
    (
        {
            "data-testid": testid,
            as,
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

        return (
            <StyledAlert
                data-testid={testid}
                ref={ref}
                as={as || typeof children === "string" ? Text : "div"}
                $backgroundColor={
                    backgroundColor || styles.backgroundColor || "primary-50"
                }
                $border={{
                    color: styles.borderColor || "primary",
                    ...border,
                }}
                $borderRadius={borderRadius}
                $gap={gap}
                $maxWidth={maxWidth}
                $padding={padding}
                $textColor={textColor}
                {...rest}
            >
                {children}
            </StyledAlert>
        )
    }
)
