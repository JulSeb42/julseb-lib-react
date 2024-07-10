/*=============================================== DropdownContainer component ===============================================*/

import { forwardRef } from "react"
import type { FlexboxProps } from "../Flexbox/types"
import { StyledDropdownContainer } from "./styles"

/**
 * @description Returns a DropdownContainer component
 * @link https://documentation-components-react.vercel.app/components/dropdown
 * @extends FlexboxProps
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop isOpen: boolean
 */

export const DropdownContainer = forwardRef<
    HTMLDivElement,
    FlexboxProps & { isOpen: boolean }
>(({ isOpen, ...rest }, ref) => {
    return <StyledDropdownContainer ref={ref} $isOpen={isOpen} {...rest} />
})
