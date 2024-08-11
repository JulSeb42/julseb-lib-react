/*=============================================== Tag component ===============================================*/

import { forwardRef } from "react"
import { getIconSizeFromFont } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledTag } from "./styles"
import type { ILibTag } from "./types"

/**
 * @description Returns a Tag component
 * @link https://documentation-components-react.vercel.app/components/tag
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLSpanElement>
 * @prop backgroundColor?: Any color from the library
 * @prop textColor?: Any color from the library
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop fontSize?: "display-h1" | "display-h2" | "display-h3" | "display-h4" | "display-h5" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small"
 * @prop icons?: { left?: string | JSX.Element; right?: string | JSX.Element }
 * @prop iconSizes?: { left?: number; right?: number }
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 */
export const Tag = forwardRef<HTMLSpanElement, ILibTag>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            backgroundColor = "primary",
            textColor = backgroundColor === "white"
                ? "primary"
                : backgroundColor === "black"
                ? "white"
                : "background",
            border,
            padding = {
                topBottom: "xxs",
                leftRight: "s",
            },
            borderRadius = "round",
            fontSize = "small",
            icons,
            iconSizes = {
                left: getIconSizeFromFont(fontSize),
                right: getIconSizeFromFont(fontSize),
            },
            iconBaseUrl,
            gap = "xs",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledTag
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $backgroundColor={backgroundColor}
                $textColor={textColor}
                $border={border}
                $padding={padding}
                $borderRadius={borderRadius}
                $gap={gap}
                $fontSize={fontSize}
                {...rest}
            >
                {icons?.left && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon.Left`}
                        className={className && "IconLeft"}
                        icon={icons.left}
                        size={iconSizes?.left}
                        baseUrl={iconBaseUrl}
                    />
                )}

                {children}

                {icons?.right && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon.Right`}
                        className={className && "IconRight"}
                        icon={icons.right}
                        size={iconSizes?.right}
                        baseUrl={iconBaseUrl}
                    />
                )}
            </StyledTag>
        )
    }
)
