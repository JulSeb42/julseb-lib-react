import type { FC } from "react"
import type { ILibTHead } from "./types"

/**
 * THead component for rendering the `<thead>` section of a table.
 *
 * @component
 * @extends HTMLTableSectionElement
 * @param {Object} props - THead props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLTableSectionElement>} [props.ref] - Ref forwarded to the thead element.
 * @param {any} [props.rest] - Additional props passed to the thead element.
 * @returns {JSX.Element} The rendered THead component.
 *
 * @see https://documentation-components-react.vercel.app/components/table
 * @example
 * <THead>
 *   <tr><th>Header</th></tr>
 * </THead>
 */
export const THead: FC<ILibTHead> = ({
    "data-testid": testid,
    ref,
    ...rest
}) => {
    return <thead data-testid={testid} ref={ref} {...rest} />
}
