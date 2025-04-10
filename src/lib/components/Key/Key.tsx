import { forwardRef } from "react"
import { StyledKey } from "./styles"
import type { ILibKey } from "./types"

/**
 * @description Returns a Key component
 * @link https://documentation-components-react.vercel.app/components/key
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLSpanElement>
 * @prop keys: Array<string>
 * @prop size?: "large" | "small"
 * @prop accentColor?: Exclude<"primary" | "secondary" | "success" | "danger" | "warning" | "gray">
 * @prop withSeparator?: boolean
 */
export const Key = forwardRef<HTMLSpanElement, ILibKey>(
    (
        {
            "data-testid": testid,
            as,
            keys,
            size = "small",
            accentColor = "primary",
            withSeparator,
            ...rest
        },
        ref
    ) => {
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
)
