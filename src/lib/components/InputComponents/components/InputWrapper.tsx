/*=============================================== InputWrapper component ===============================================*/

import classNames from "classnames"
import { StyledInputWrapper } from "../styles"
import type { ILibInputWrapper } from "../types"

/**
 * @description Returns a wrapper for inputs holding icon left, input and right container
 * @access Only for building library, do not export
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
}: ILibInputWrapper) {
    return (
        <StyledInputWrapper
            data-testid={hasContainer && testid ? `${testid}.Wrapper` : testid}
            className={classNames(
                hasContainer && className ? "Wrapper" : className,
                { Open: hasListOpen }
            )}
        >
            {children}
        </StyledInputWrapper>
    )
}
