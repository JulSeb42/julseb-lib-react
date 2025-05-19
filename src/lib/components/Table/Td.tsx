import type { FC } from "react"
import { StyledTd } from "./styles"
import type { ILibTd } from "./types"

/**
 * Td component for rendering a table cell with optional padding control.
 *
 * @component
 * @extends HTMLTableCellElement
 * @param {Object} props - Td props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLTableCellElement>} [props.ref] - Ref forwarded to the td element.
 * @param {boolean} [props.noPadding] - If true, removes the default padding from the cell.
 * @param {any} [props.rest] - Additional props passed to the td element.
 * @returns {JSX.Element} The rendered Td component.
 *
 * @see https://documentation-components-react.vercel.app/components/table
 * @example
 * <Td noPadding>Cell content</Td>
 */
export const Td: FC<ILibTd> = ({
    "data-testid": testid,
    noPadding,
    ref,
    ...rest
}) => {
    return (
        <StyledTd
            data-testid={testid}
            ref={ref}
            $noPadding={noPadding}
            {...rest}
        />
    )
}
