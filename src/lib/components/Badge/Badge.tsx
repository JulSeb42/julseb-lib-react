/*=============================================== Badge component ===============================================*/

import { forwardRef } from "react"
import { roundIconSize } from "../.."
import { LibIcon } from "../LibIcon"
import { StyledBadge } from "./styles"
import type { BadgeProps } from "./types"

/**
 * @description Returns a Badge component
 * @link https://documentation-components-react.vercel.app/components/badge
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop size?: number
 * @prop backgroundColor?: LibAllColors
 * @prop contentColor?: LibAllColors
 * @prop borderRadius?: LibRadiusProps
 * @prop padding?: LibPaddingProps
 * @prop icon?: string | JSX.Element => only if `number` is not defined
 * @prop number?: number => only if `icon` is not defined
 */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            "data-testid": testid,
            className,
            as,
            size = 16,
            icon,
            iconSize = roundIconSize(size),
            number,
            backgroundColor = "primary",
            contentColor = backgroundColor === "white"
                ? "primary"
                : backgroundColor === "black"
                ? "white"
                : "background",
            borderRadius = "round",
            padding = {
                leftRight: "xs",
            },
            ...rest
        },
        ref
    ) => {
        return (
            <StyledBadge
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $size={size}
                $backgroundColor={backgroundColor}
                $contentColor={contentColor}
                $borderRadius={borderRadius}
                $padding={padding}
                $hasChildren={!!(icon || number)}
                $childrenLength={number?.toString().length}
                {...rest}
            >
                {icon && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon`}
                        className={className && "Icon"}
                        icon={icon}
                        color={contentColor}
                        size={iconSize}
                    />
                )}

                {number}
            </StyledBadge>
        )
    }
)
