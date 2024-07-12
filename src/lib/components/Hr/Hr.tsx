/*=============================================== Hr component ===============================================*/

import { forwardRef } from "react"
import { StyledHr } from "./styles"
import type { ILibHr } from "./types"

/**
 * @description Returns a Hr component
 * @link https://documentation-components-react.vercel.app/components/hr
 * @extends HTMLHRElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop height?: number
 * @prop maxWidth?: string | number
 * @prop color?: LibAllColors
 * @prop margin?: LibMarginProps
 * @prop isRounded?: boolean
 */

export const Hr = forwardRef<HTMLHRElement, ILibHr>(
    (
        {
            "data-testid": testid,
            as,
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
                $height={height}
                $maxWidth={maxWidth}
                $color={color}
                $margin={margin}
                $isRounded={isRounded}
                {...rest}
            />
        )
    }
)
