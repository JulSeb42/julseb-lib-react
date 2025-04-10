import { forwardRef } from "react"
import classNames from "classnames"
import { StyledPaginationButton } from "./styles"
import type { ILibPaginationButton } from "./types"

/**
 * @description Returns a PaginationButton component
 * @link https://documentation-components-react.vercel.app/components/pagination
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement>
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
            className,
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
                className={classNames(className, { Active: isActive })}
                type="button"
                $accentColor={accentColor}
                $readOnly={readOnly}
                {...rest}
            >
                {children}
            </StyledPaginationButton>
        )
    }
)
