/*=============================================== InputWrapper component ===============================================*/

import { StyledInputWrapper } from "../styles"
import type { InputWrapperProps } from "../types"

/**
 * @description Returns a icon on the right of an input when there's validation
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop hasContainer: boolean | undefined
 */

export function InputWrapper({
    "data-testid": testid,
    className,
    hasContainer,
    children,
    hasListOpen,
}: InputWrapperProps) {
    return (
        <StyledInputWrapper
            data-testid={hasContainer && testid ? `${testid}.Wrapper` : testid}
            className={hasContainer && className ? "Wrapper" : className}
            $hasListOpen={hasListOpen}
        >
            {children}
        </StyledInputWrapper>
    )
}
