/*=============================================== Key component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import {} from "../../"

import { StyledKey } from "./styles"
import type { KeyProps } from "./types"

export const Key = forwardRef(
    (
        {
            "data-testid": testid,
            as,
            keys,
            size = "small",
            accentColor = "primary",
            withSeparator,
            ...rest
        }: KeyProps,
        ref?: ForwardedRef<HTMLSpanElement>,
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
                        }`,
                )}
            </StyledKey>
        )
    },
)
