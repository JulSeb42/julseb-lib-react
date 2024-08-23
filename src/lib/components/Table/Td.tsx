/*=============================================== Td component ===============================================*/

import { forwardRef } from "react"
import { StyledTd } from "./styles"
import type { ILibTd } from "./types"

/**
 * @description Returns a Td component
 * @link https://documentation-components-react.vercel.app/components/table
 * @extends HTMLTableCellElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLTableCellElement>
 */
export const Td = forwardRef<HTMLTableCellElement, ILibTd>(
    ({ "data-testid": testid, noPadding, ...rest }, ref) => {
        return (
            <StyledTd
                data-testid={testid}
                ref={ref}
                $noPadding={noPadding}
                {...rest}
            />
        )
    }
)
