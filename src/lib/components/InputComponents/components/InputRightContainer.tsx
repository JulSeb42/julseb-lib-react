/*=============================================== InputRightContainer component ===============================================*/

import { StyledInputRightContainer } from "../styles"
import type { ILibInputRightContainer } from "../types"

/**
 * @description Returns a container on the right of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 */
export function InputRightContainer({
    "data-testid": testid,
    className,
    children,
    disabled,
    withPadding,
    withBorder,
}: ILibInputRightContainer) {
    return (
        <StyledInputRightContainer
            data-testid={testid && `${testid}.RightContainer`}
            className={className && "RightContainer"}
            $disabled={disabled}
            $withPadding={withPadding}
            $withBorder={withBorder}
        >
            {children}
        </StyledInputRightContainer>
    )
}
