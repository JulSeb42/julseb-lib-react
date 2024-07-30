/*=============================================== InputSuffix component ===============================================*/

import { StyledInputSuffix } from "../styles"
import type { ILibInputSuffix } from "../types"

export function InputSuffix({
    "data-testid": testid,
    className,
    suffix,
    inputBackground,
}: ILibInputSuffix) {
    if (!suffix) return null

    return (
        <StyledInputSuffix
            data-testid={testid && `${testid}.Suffix`}
            className={className && "Suffix"}
            $inputBackground={inputBackground}
        >
            {suffix}
        </StyledInputSuffix>
    )
}
