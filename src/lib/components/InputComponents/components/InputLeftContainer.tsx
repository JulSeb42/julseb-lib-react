/*=============================================== InputLeftContainer component ===============================================*/

import { StyledInputLeftContainer } from "../styles"
import type { ILibInputLeftContainer } from "../types"

/**
 * @description Returns a container on the left of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop inputVariant: LibInputVariant | undefined
 * @prop disabled: boolean | undefined
 * @prop withPrefix: boolean | undefined
 */

export function InputLeftContainer({
    "data-testid": testid,
    className,
    children,
    disabled,
    withPadding,
}: ILibInputLeftContainer) {
    return (
        <StyledInputLeftContainer
            data-testid={testid && `${testid}.RightContainer`}
            className={className && "RightContainer"}
            $disabled={disabled}
            $withPadding={withPadding}
            $withBorder
        >
            {children}
        </StyledInputLeftContainer>
    )
}
