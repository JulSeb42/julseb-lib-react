import type { FC } from "react"
import type { ILibTr } from "./types"

/**
 * Tr component for rendering a table row.
 *
 * @component
 * @extends HTMLTableRowElement
 * @param {Object} props - Tr props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLTableRowElement>} [props.ref] - Ref forwarded to the tr element.
 * @param {any} [props.rest] - Additional props passed to the tr element.
 * @returns {JSX.Element} The rendered Tr component.
 *
 * @see https://documentation-components-react.vercel.app/components/table
 * @example
 * <Tr>
 *   <Td>Row content</Td>
 * </Tr>
 */
export const Tr: FC<ILibTr> = ({ "data-testid": testid, ref, ...rest }) => {
    return <tr data-testid={testid} ref={ref} {...rest} />
}
