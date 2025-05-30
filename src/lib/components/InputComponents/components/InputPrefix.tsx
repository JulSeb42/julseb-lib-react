import type { FC } from "react"
import { StyledInputPrefix } from "../styles"
import type { ILibInputPrefix } from "../types"

/**
 * @description Returns a prefix on the left of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop prefix: string | JSX.Element | undefined
 */
export const InputPrefix: FC<ILibInputPrefix> = ({
    "data-testid": testid,
    className,
    prefix,
    inputBackground,
}) => {
    if (!prefix) return null

    return (
        <StyledInputPrefix
            data-testid={testid && `${testid}.Prefix`}
            className={className && "Prefix"}
            $inputBackground={inputBackground}
        >
            {prefix}
        </StyledInputPrefix>
    )
}
