/*=============================================== TabButton component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledTabButton } from "./styles"
import type { ILibTabButton } from "./types"

/**
 * @description Returns a TabButton component
 * @link https://documentation-components-react.vercel.app/components/tabs
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement>
 */
export const TabButton = forwardRef<HTMLButtonElement, ILibTabButton>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            justify = "start",
            variant = "basic",
            isActive,
            onClick,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledTabButton
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Active: isActive })}
                onClick={onClick}
                $justify={justify}
                $variant={variant}
                {...rest}
            >
                {children}
            </StyledTabButton>
        )
    }
)
