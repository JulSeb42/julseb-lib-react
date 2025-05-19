import type { FC } from "react"
import { StyledKey } from "./styles"
import type { ILibKey } from "./types"

/**
 * Key component for displaying keyboard keys or shortcuts, with optional separator, size, and accent color.
 *
 * @component
 * @extends HTMLSpanElement
 * @param {Object} props - Key props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLSpanElement>} [props.ref] - Ref forwarded to the root element.
 * @param {Array<string>} props.keys - Array of key names to display.
 * @param {"large" | "small"} [props.size="small"] - Size of the key display.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "gray"} [props.accentColor="primary"] - Accent color for the key.
 * @param {boolean} [props.withSeparator] - Display a separator (e.g., " + ") between keys.
 * @returns {JSX.Element} The rendered Key component.
 *
 * @see https://documentation-components-react.vercel.app/components/key
 * @example
 * <Key keys={["Ctrl", "C"]} withSeparator size="large" accentColor="secondary" />
 */
export const Key: FC<ILibKey> = ({
    "data-testid": testid,
    as,
    ref,
    keys,
    size = "small",
    accentColor = "primary",
    withSeparator,
    ...rest
}) => {
    return (
        <StyledKey
            data-testid={testid}
            ref={ref}
            as={as}
            $size={size}
            $accentColor={accentColor}
            {...rest}
        >
            {keys.join(withSeparator ? " + " : "")}
        </StyledKey>
    )
}
