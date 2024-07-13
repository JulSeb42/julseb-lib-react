/*=============================================== DropdownContainer component ===============================================*/

import { forwardRef } from "react"
import type { ILibFlexbox } from "../Flexbox/types"
import { StyledDropdownContainer } from "./styles"

/**
 * @description Returns a DropdownContainer component
 * @link https://documentation-components-react.vercel.app/components/dropdown
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const DropdownContainer = forwardRef<
    HTMLDivElement,
    ILibFlexbox & { isOpen: boolean }
>(({ isOpen, ...rest }, ref) => {
    return <StyledDropdownContainer ref={ref} $isOpen={isOpen} {...rest} />
})
