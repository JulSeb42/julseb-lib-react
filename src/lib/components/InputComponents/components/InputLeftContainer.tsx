/*=============================================== InputLeftContainer component ===============================================*/

import { forwardRef } from "react"
import { StyledInputLeftContainer } from "../styles"
import type { ILibInputLeftContainer } from "../types"

/**
 * @description Returns a container on the left of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop children?: ReactChildren
 * @prop disabled: boolean | undefined
 * @prop withPadding?: boolean
 */

export const InputLeftContainer = forwardRef<
    HTMLSpanElement,
    ILibInputLeftContainer
>(
    (
        {
            "data-testid": testid,
            className,
            children,
            disabled,
            withPadding,
            noBorder,
        },
        ref
    ) => {
        return (
            <StyledInputLeftContainer
                data-testid={testid && `${testid}.LeftContainer`}
                ref={ref}
                className={className && "LeftContainer"}
                $disabled={disabled}
                $withPadding={withPadding}
                $withBorder={!noBorder}
            >
                {children}
            </StyledInputLeftContainer>
        )
    }
)
