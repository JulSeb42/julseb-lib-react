/*=============================================== PaginationButton component ===============================================*/

import { forwardRef, type ButtonHTMLAttributes } from "react"
import type { LibColorsHover, LibComponentBase } from "../../types"
import { StyledPaginationButton } from "./styles"

interface PaginationButtonPropsBase
    extends LibComponentBase<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: LibColorsHover
}

interface PaginationButtonPropsActive extends PaginationButtonPropsBase {
    isActive: boolean
    readOnly?: never
}

interface PaginationButtonPropsReadOnly extends PaginationButtonPropsBase {
    isActive?: never
    readOnly: boolean
}

type PaginationButtonProps =
    | PaginationButtonPropsActive
    | PaginationButtonPropsReadOnly

/**
 * @description Returns a PaginationButton component
 * @link https://documentation-components-react.vercel.app/components/pagination
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop isActive: boolean => only if `readOnly` is not defined
 * @prop readOnly: boolean => only if `readOnly` is not defined
 * @prop accentColor?: LibColorsHover
 */

export const PaginationButton = forwardRef<
    HTMLButtonElement,
    PaginationButtonProps
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
