/*=============================================== Loader component ===============================================*/

import { forwardRef } from "react"
import { LoaderOne } from "./templates/LoaderOne"
import { LoaderTwo } from "./templates/LoaderTwo"
import { LoaderThree } from "./templates/LoaderThree"
import { LoaderFour } from "./templates/LoaderFour"
import type { LoaderProps } from "./types"

/**
 * @description Returns a Loader component
 * @link https://documentation-components-react.vercel.app/components/loader
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop variant?: 1 | 2 | 3 | 4
 * @prop size ?: number
 * @prop color?: LibAllColors
 * @prop borderWidth?: number => only for `variant` 1 to 3
 */

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(
    ({ variant, size = 48, color = "primary", ...rest }, ref) => {
        if (variant === 2)
            return <LoaderTwo ref={ref} size={size} color={color} {...rest} />

        if (variant === 3)
            return <LoaderThree ref={ref} size={size} color={color} {...rest} />

        if (variant === 4)
            return <LoaderFour ref={ref} size={size} color={color} {...rest} />

        return <LoaderOne ref={ref} size={size} color={color} {...rest} />
    }
)
