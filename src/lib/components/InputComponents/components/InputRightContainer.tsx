import type { FC } from "react"
import { StyledInputRightContainer } from "../styles"
import type { ILibInputRightContainer } from "../types"

/**
 * @description Returns a container on the right of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop disabled: boolean | undefined
 * @prop withPadding: boolean | undefined
 * @prop withBorder: boolean | undefined
 * @prop children?: ReactChildren
 */
export const InputRightContainer: FC<ILibInputRightContainer> = ({
    "data-testid": testid,
    className,
    children,
    disabled,
    withPadding,
    withBorder,
}) => {
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
