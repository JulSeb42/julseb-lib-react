/*=============================================== IconMenuItem ===============================================*/

import { forwardRef } from "react"
import { StyledButtonIcon } from "./styles"
import type { ILibIconMenuItem } from "./types"

/**
 * @description Returns a IconMenuItem component
 * @link https://documentation-components-react.vercel.app/components/icon-menu
 * @extends HTMLButtonElement & HTMLAnchorElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop indexPosition: number
 * @prop isOpen: boolean
 * @prop direction?: "left" | "up" | "right" | "down"
 * @prop variant?: "plain" | "transparent" | "ghost"
 * @prop iconBaseUrl?: string
 */
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
