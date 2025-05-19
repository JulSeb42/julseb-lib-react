import type { FC } from "react"
import type { ILibTBody } from "./types"

/**
 * TBody component for rendering the `<tbody>` section of a table.
 *
 * @component
 * @extends HTMLTableSectionElement
 * @param {Object} props - TBody props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLTableSectionElement>} [props.ref] - Ref forwarded to the tbody element.
 * @param {any} [props.rest] - Additional props passed to the tbody element.
 * @returns {JSX.Element} The rendered TBody component.
 *
 * @see https://documentation-components-react.vercel.app/components/table
 * @example
 * <TBody>
 *   <tr><td>Row content</td></tr>
 * </TBody>
 */
export const TBody: FC<ILibTBody> = ({
    "data-testid": testid,
    ref,
    ...rest
}) => {
    return <tbody data-testid={testid} ref={ref} {...rest} />
}
