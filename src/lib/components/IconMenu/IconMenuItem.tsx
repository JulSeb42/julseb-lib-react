/*=============================================== IconMenuItem ===============================================*/

import { forwardRef } from "react"
import { StyledButtonIcon } from "./styles"
import type { ILibIconMenuItem } from "./types"

export const IconMenuItem = forwardRef<HTMLButtonElement, ILibIconMenuItem>(
    ({ indexPosition, direction, isOpen, variant = "ghost", ...rest }, ref) => {
        return (
            <StyledButtonIcon
                ref={ref}
                type="button"
                variant={variant}
                $isOpen={isOpen}
                $direction={direction}
                $buttonPosition={indexPosition}
                {...rest}
            />
        )
    }
)
