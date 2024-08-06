/*=============================================== InputSuffix component ===============================================*/

import { StyledInputSuffix } from "../styles"
import type { ILibInputSuffix } from "../types"

/**
 * @description Add suffix on inputs with text
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop validation: boolean | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop disabled: boolean | undefined
 * @prop inputVariant: "rounded" | "pill" | undefined
 * @prop suffix: string | JSX.Element
 */
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
