import type { FC } from "react"
import classNames from "classnames"
import { StyledListInput } from "../styles"
import type { ILibListInput } from "../types"

/**
 * @description Lists used in Inputs
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop isOpen: boolean
 * @prop direction: "up" | "down" | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop inputVariant: "rounded" | "pill" | undefined
 * @prop validationStatus: boolean | undefined
 * @prop children?: ReactChildren
 */
export const ListInput: FC<ILibListInput> = ({
    "data-testid": testid,
    ref,
    className,
    children,
    direction = "down",
    inputBackground,
    validationStatus,
    isOpen,
    inputVariant,
}) => {
    return (
        <StyledListInput
            data-testid={testid && `${testid}.ListInput`}
            className={classNames({ ListInput: className }, { Open: isOpen })}
            ref={ref}
            $direction={direction}
            $inputBackground={inputBackground}
            $validationStatus={validationStatus}
            $inputVariant={inputVariant}
        >
            {children}
        </StyledListInput>
    )
}
