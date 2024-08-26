/*=============================================== InputPrefix component ===============================================*/

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
export function InputPrefix({
    "data-testid": testid,
    className,
    prefix,
    inputBackground,
}: ILibInputPrefix) {
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
