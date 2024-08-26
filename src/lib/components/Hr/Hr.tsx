/*=============================================== Hr component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledHr } from "./styles"
import type { ILibHr } from "./types"

/**
 * @description Returns a Hr component
 * @link https://documentation-components-react.vercel.app/components/hr
 * @extends HTMLHRElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLHRElement>
 * @prop height?: number
 * @prop maxWidth?: string | number
 * @prop color?: Any color from the library
 * @prop margin?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "auto" | "0 auto" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop isRounded?: boolean
 */
export const Hr = forwardRef<HTMLHRElement, ILibHr>(
    (
        {
            "data-testid": testid,
            as,
            className,
            height = 1,
            maxWidth = "100%",
            color = "gray-200",
            margin = "0 auto",
            isRounded,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledHr
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Rounded: isRounded })}
                $height={height}
                $maxWidth={maxWidth}
                $color={color}
                $margin={margin}
                {...rest}
            />
        )
    }
)
