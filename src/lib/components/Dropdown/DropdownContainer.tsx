/*=============================================== DropdownContainer component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledDropdownContainer } from "./styles"
import type { ILibDropdownContainer } from "./types"

/**
 * @description Returns a DropdownContainer component
 * @link https://documentation-components-react.vercel.app/components/dropdown
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop isOpen: boolean
 */
export const DropdownContainer = forwardRef<
    HTMLDivElement,
    ILibDropdownContainer
>(({ isOpen, className, ...rest }, ref) => {
    return (
        <StyledDropdownContainer
            ref={ref}
            className={classNames(className, { Open: isOpen })}
            {...rest}
        />
    )
})
