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
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop cursor?: CssCursor
 * @prop width?: string | number
 * @prop height?: string | number
 * @prop shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: LibShadows; hover: LibShadows; active: LibShadows }
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
                target={blank ? "_blank" : null}
                rel={blank ? "noreferrer noopener" : null}
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
