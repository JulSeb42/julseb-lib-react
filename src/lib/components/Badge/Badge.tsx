/*=============================================== Badge component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { getRandomString } from "ts-utils-julseb"
import { roundIconSize, appendStyles } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledBadge } from "./styles"
import type { ILibBadge } from "./types"

/**
 * @description Returns a Badge component
 * @link https://documentation-components-react.vercel.app/components/badge
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLSpanElement>
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
            id,
            as,
            size = 16,
            icon,
            iconSize = roundIconSize(size),
            iconBaseUrl,
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
        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0] || randomClass

        appendStyles(`
            ${id ? `#${id}` : `.${withClass}`} {
                --badge-size: ${size}px;
                --badge-font-size: ${roundIconSize(size)}px;
            }
        `)

        return (
            <StyledBadge
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, randomClass)}
                id={id}
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
                        baseUrl={iconBaseUrl}
                    />
                )}

                {number}
            </StyledBadge>
        )
    }
)
