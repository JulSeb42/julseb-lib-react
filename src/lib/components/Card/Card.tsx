/*=============================================== Card component ===============================================*/

import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { Flexbox } from "../../"
import { StyledCard } from "./styles"
import type { ILibCard } from "./types"

/**
 * @description Returns a Card component
 * @link https://documentation-components-react.vercel.app/components/card
 * @extends FlexboxProps
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop border?: LibBorderProps
 * @prop borderRadius?: LibRadiusProps
 * @prop padding?: LibPaddingProps
 * @prop cursor?: CSS Cursor
 * @prop width?: string | number
 * @prop height?: string | number
 * @prop shadow?: LibBoxShadowProps
 * @prop backgroundColor?: LibAllColors
 * @prop textColor?: LibAllColors
 * @prop backgroundImg?: BackgroundImageProps
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
                target={blank && "_blank"}
                rel={blank && "noreferrer noopener"}
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
                $backgroundImg={backgroundImg}
                $textAlign={textAlign}
                {...rest}
            >
                {children}
            </StyledCard>
        )
    }
)
