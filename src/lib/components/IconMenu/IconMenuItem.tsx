/*=============================================== IconMenuItem ===============================================*/

import { forwardRef } from "react"
import { StyledButtonIcon } from "./styles"
import type { ILibIconMenuItem } from "./types"

export const IconMenuItem = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibIconMenuItem
>(
    (
        {
            indexPosition,
            direction,
            isOpen,
            variant = "ghost",
            style,
            iconBaseUrl,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledButtonIcon
                ref={ref}
                type="button"
                variant={variant}
                iconBaseUrl={iconBaseUrl}
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
