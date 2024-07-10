/*=============================================== Key component ===============================================*/

import { forwardRef } from "react"
import { StyledKey } from "./styles"
import type { KeyProps } from "./types"

/**
 * @description Returns a Key component
 * @link https://documentation-components-react.vercel.app/components/key
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop keys: string[]
 * @prop size?: KeySize
 * @prop accentColor?: LibColorsHover
 * @prop withSeparator?: boolean
 */

export const Key = forwardRef<HTMLSpanElement, KeyProps>(
    (
        {
            "data-testid": testid,
            as,
            keys,
            size = "small",
            accentColor = "primary",
            withSeparator,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledKey
                data-testid={testid}
                ref={ref}
                as={as}
                $size={size}
                $accentColor={accentColor}
                {...rest}
            >
                {keys.map(
                    (key, i) =>
                        `${key}${
                            withSeparator && i !== keys.length - 1 ? " + " : ""
                        }`
                )}
            </StyledKey>
        )
    }
)
