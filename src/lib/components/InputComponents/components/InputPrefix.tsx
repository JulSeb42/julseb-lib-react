/*=============================================== InputPrefix component ===============================================*/

import { StyledInputPrefix } from "../styles"
import type { ILibInputPrefix } from "../types"

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
