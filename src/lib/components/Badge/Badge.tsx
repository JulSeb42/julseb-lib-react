/*=============================================== Badge component ===============================================*/

import { forwardRef } from "react"
import { roundIconSize } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledBadge } from "./styles"
import type { ILibBadge } from "./types"

/**
 * @description Returns a Badge component
 * @link https://documentation-components-react.vercel.app/components/badge
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop icon?: string | JSX.Element => only if number is not defined
 * @prop number?: number => only if icon is not defined
 * @prop size?: number
 * @prop backgroundColor?: Any color from the library
 * @prop contentColor?: Any color from the library
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop iconSize?: number
 */

export const Badge = forwardRef<HTMLSpanElement, ILibBadge>(
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
