/*=============================================== Card component ===============================================*/

import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { Flexbox } from "../../"
import { StyledCard } from "./styles"
import type { ILibCard } from "./types"

/**
 * @description Returns a Card component
 * @link https://documentation-components-react.vercel.app/components/card
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop onClick?: void => only if `to` or `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` and `href` are not defined
 * @prop href?: string => only if `onClick` and `to` are not defined
 * @prop blank?: boolean => only if `to` or `href` are defined
 * @prop inline?: boolean
 * @prop flexDirection?: CssFlexDirection
 * @prop flexWrap?: CssFlexWrap
 * @prop justifyContent?: CssJustifyContent
 * @prop alignItems?: CssAlignItems
 * @prop justifyItems?: CssJustifyItems
 * @prop alignContent?: CssAlignContent
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop cursor?: CssCursor
 * @prop width?: string | number
 * @prop height?: string | number
 * @prop shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: "xxl" | "xl" | "l" | "m" | "s" | "xs"; hover: "xxl" | "xl" | "l" | "m" | "s" | "xs"; active: "xxl" | "xl" | "l" | "m" | "s" | "xs" }
 * @prop backgroundColor?: Any color from the library
 * @prop textColor?: Any color from the library
 * @prop backgroundImg?: { img: string; clip?: CssBackgroundClip; origin?: CssBackgroundOrigin; position?: CssBackgroundPosition; repeat?: CssBackgroundRepeat; size?: CssBackgroundSize }
 * @prop textAlign?: CssTextAlign
 */
export const Card = forwardRef<HTMLDivElement, ILibCard>(
    (
        {
            "data-testid": testid,
            as,
            children,
            border,
            borderRadius,
            padding,
            cursor,
            width = "100%",
            height,
            shadow,
            backgroundColor = "background",
            textColor = "font",
            backgroundImg,
            textAlign = "left",
            href,
            to,
            blank,
            onClick,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledCard
                data-testid={testid}
                ref={ref}
                as={
                    as
                        ? as
                        : to
                        ? Link
                        : href
                        ? "a"
                        : onClick
                        ? "button"
                        : Flexbox
                }
                to={to}
                href={href}
                target={blank ? "_blank" : undefined}
                rel={blank ? "noreferrer noopener" : undefined}
                onClick={onClick}
                $border={border}
                $borderRadius={borderRadius}
                $padding={padding}
                $cursor={cursor}
                $width={width}
                $height={height}
                $shadow={shadow}
                $backgroundColor={backgroundColor}
                $textColor={textColor}
                $backgroundImg={
                    backgroundImg && {
                        $img: backgroundImg.img,
                        $clip: backgroundImg.clip,
                        $origin: backgroundImg.origin,
                        $position: backgroundImg.position,
                        $repeat: backgroundImg.repeat,
                        $size: backgroundImg.size,
                    }
                }
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledCard>
        )
    }
)
