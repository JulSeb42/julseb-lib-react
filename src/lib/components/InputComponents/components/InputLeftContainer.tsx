import type { FC } from "react"
import { StyledInputLeftContainer } from "../styles"
import type { ILibInputLeftContainer } from "../types"

/**
 * @description Returns a container on the left of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop children?: ReactChildren
 * @prop disabled: boolean | undefined
 */
export const InputLeftContainer: FC<ILibInputLeftContainer> = ({
    "data-testid": testid,
    className,
    children,
    disabled,
}) => {
    return (
        <StyledInputLeftContainer
            data-testid={testid && `${testid}.LeftContainer`}
            className={className && "LeftContainer"}
            $disabled={disabled}
        >
            {children}
        </StyledInputLeftContainer>
    )
}
