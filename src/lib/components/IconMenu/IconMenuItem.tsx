/*=============================================== IconMenuItem ===============================================*/

import { forwardRef } from "react"
import { StyledButtonIcon } from "./styles"
import type { ILibIconMenuItem } from "./types"

export const IconMenuItem = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibIconMenuItem
>(
    (
        { indexPosition, direction, isOpen, variant = "ghost", style, ...rest },
        ref
    ) => {
        return (
            <StyledButtonIcon
                ref={ref}
                type="button"
                variant={variant}
                $direction={direction}
                style={{
                    ["--button-position" as any]: indexPosition,
                    ...style,
                }}
                {...rest}
            />
        )
    }
)
