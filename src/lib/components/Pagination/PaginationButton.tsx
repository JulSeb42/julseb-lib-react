/*=============================================== PaginationButton component ===============================================*/

import { forwardRef, type ButtonHTMLAttributes } from "react"
import type { LibColorsHover, LibComponentBase } from "../../types"
import { StyledPaginationButton } from "./styles"

interface ILibPaginationButtonBase
    extends LibComponentBase<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: LibColorsHover
}

interface PaginationButtonActive extends ILibPaginationButtonBase {
    isActive: boolean
    readOnly?: never
}

interface PaginationButtonReadOnly extends ILibPaginationButtonBase {
    isActive?: never
    readOnly: boolean
}

type ILibPaginationButton = PaginationButtonActive | PaginationButtonReadOnly

/**
 * @description Returns a PaginationButton component
 * @link https://documentation-components-react.vercel.app/components/pagination
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop isActive: boolean => only if readOnly is not defined
 * @prop readOnly: boolean => only if isActive is not defined
 * @prop accentColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 */

export const PaginationButton = forwardRef<
    HTMLButtonElement,
    ILibPaginationButton
>(
    (
        {
            "data-testid": testid,
            as,
            isActive,
            children,
            accentColor,
            readOnly,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledPaginationButton
                data-testid={testid}
                as={as}
                ref={ref}
                type="button"
                $isActive={isActive}
                $accentColor={accentColor}
                $readOnly={readOnly}
                {...rest}
            >
                {children}
            </StyledPaginationButton>
        )
    }
)
