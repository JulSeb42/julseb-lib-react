/*=============================================== InputRightContainer component ===============================================*/

import { StyledInputRightContainer } from "../styles"
import type { InputRightContainerProps } from "../types"

/**
 * @description Returns a container on the right of an input
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop inputVariant: LibInputVariant | undefined
 * @prop disabled: boolean | undefined
 */

export function InputRightContainer({
    "data-testid": testid,
    className,
    children,
    inputVariant,
    disabled,
}: InputRightContainerProps) {
    return (
        <StyledInputRightContainer
            data-testid={testid && `${testid}.RightContainer`}
            className={className && "RightContainer"}
            $disabled={disabled}
            $inputVariant={inputVariant}
        >
            {children}
        </StyledInputRightContainer>
    )
}
