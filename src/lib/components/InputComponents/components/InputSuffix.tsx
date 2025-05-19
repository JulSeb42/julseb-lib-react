import type { FC } from "react"
import { StyledInputSuffix } from "../styles"
import type { ILibInputSuffix } from "../types"

/**
 * @description Add suffix on inputs with text
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop prefix: string | JSX.Element | undefined
 */
export const InputSuffix: FC<ILibInputSuffix> = ({
    "data-testid": testid,
    className,
    suffix,
    inputBackground,
}) => {
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
