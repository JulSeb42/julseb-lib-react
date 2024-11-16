/*=============================================== InputAndListContainer component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledInputAndListContainer } from "../styles"
import type { ILibInputAndListContainer } from "../types"

/**
 * @description Returns a container for Input and List
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop hasListOpen: boolean
 * @prop isParent: boolean | undefined
 * @prop inputAndListContainerStyle: CSSProperties | undefined
 * @prop children?: ReactChildren
 */
export const InputAndListContainer = forwardRef<
    HTMLDivElement,
    ILibInputAndListContainer
>(
    (
        {
            "data-testid": testid,
            className,
            children,
            hasListOpen,
            isParent,
            inputAndListContainerStyle,
        },
        ref
    ) => {
        return (
            <StyledInputAndListContainer
                data-testid={
                    testid &&
                    (isParent ? testid : `${testid}.InputAndListContainer`)
                }
                className={classNames(
                    { InputAndListContainer: className && !isParent },
                    { Open: hasListOpen },
                    isParent && className
                )}
                ref={ref}
                style={inputAndListContainerStyle}
            >
                {children}
            </StyledInputAndListContainer>
        )
    }
)
