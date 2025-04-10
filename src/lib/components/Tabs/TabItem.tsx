import { forwardRef } from "react"
import classNames from "classnames"
import { StyledTabItem } from "./styles"
import type { ILibTabItem } from "./types"

/**
 * @description Returns a TabItem component
 * @link https://documentation-components-react.vercel.app/components/tabs
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop isActive: boolean
 */
export const TabItem = forwardRef<HTMLDivElement, ILibTabItem>(
    (
        { "data-testid": testid, as, children, className, isActive, ...rest },
        ref
    ) => {
        return (
            <StyledTabItem
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Active: isActive })}
                {...rest}
            >
                {children}
            </StyledTabItem>
        )
    }
)
