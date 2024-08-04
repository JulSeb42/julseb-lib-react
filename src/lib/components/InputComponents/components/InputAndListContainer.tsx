/*=============================================== InputAndListContainer component ===============================================*/

import { StyledInputAndListContainer } from "../styles"
import type { ILibInputAndListContainer } from "../types"

/**
 * @description Returns a container for Input and List
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop children?: ReactChildren
 */

export function InputAndListContainer({
    "data-testid": testid,
    className,
    children,
}: ILibInputAndListContainer) {
    return (
        <StyledInputAndListContainer
            data-testid={testid && `${testid}.InputAndListContainer`}
            className={className && "InputAndListContainer"}
        >
            {children}
        </StyledInputAndListContainer>
    )
}
