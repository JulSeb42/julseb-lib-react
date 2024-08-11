/*=============================================== THead component ===============================================*/

import { forwardRef } from "react"
import type { ILibTHead } from "./types"

/**
 * @description Returns a THead component
 * @link https://documentation-components-react.vercel.app/components/table
 * @extends HTMLTableSectionElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLTableSectionElement>
 */
export const THead = forwardRef<HTMLTableSectionElement, ILibTHead>(
    ({ "data-testid": testid, ...rest }, ref) => {
        return <thead data-testid={testid} ref={ref} {...rest} />
    }
)
