/*=============================================== Tr component ===============================================*/

import { forwardRef } from "react"
import type { ILibTr } from "./types"

/**
 * @description Returns a Tr component
 * @link https://documentation-components-react.vercel.app/components/table
 * @extends HTMLTableRowElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLTableRowElement>
 */
export const Tr = forwardRef<HTMLTableRowElement, ILibTr>(
    ({ "data-testid": testid, ...rest }, ref) => {
        return <tr data-testid={testid} ref={ref} {...rest} />
    }
)
