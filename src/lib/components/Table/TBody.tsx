import { forwardRef } from "react"
import type { ILibTBody } from "./types"

/**
 * @description Returns a TBody component
 * @link https://documentation-components-react.vercel.app/components/table
 * @extends HTMLTableSectionElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLTableSectionElement>
 */
export const TBody = forwardRef<HTMLTableSectionElement, ILibTBody>(
    ({ "data-testid": testid, ...rest }, ref) => {
        return <tbody data-testid={testid} ref={ref} {...rest} />
    }
)
