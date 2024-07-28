/*=============================================== DropdownContainer component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import type { ILibFlexbox } from "../Flexbox/types"
import { StyledDropdownContainer } from "./styles"

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
    ILibFlexbox & { isOpen: boolean }
>(({ isOpen, className, ...rest }, ref) => {
    return (
        <StyledDropdownContainer
            ref={ref}
            className={classNames(className, { Open: isOpen })}
            {...rest}
        />
    )
})
