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
