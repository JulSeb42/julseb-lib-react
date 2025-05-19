import type { FC } from "react"
import classNames from "classnames"
import { StyledPaginationButton } from "./styles"
import type { ILibPaginationButton } from "./types"

/**
 * PaginationButton component for rendering a styled button used in pagination controls.
 *
 * @component
 * @extends HTMLButtonElement
 * @param {Object} props - PaginationButton props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement>} [props.ref] - Ref forwarded to the button element.
 * @param {boolean} [props.isActive] - Whether the button is active (only if readOnly is not defined).
 * @param {boolean} [props.readOnly] - Whether the button is read-only (only if isActive is not defined).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor] - Accent color for the button.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Button content.
 * @param {any} [props.rest] - Additional props passed to the button element.
 * @returns {JSX.Element} The rendered PaginationButton component.
 *
 * @see https://documentation-components-react.vercel.app/components/pagination
 * @example
 * <PaginationButton isActive accentColor="primary">1</PaginationButton>
 */
export const PaginationButton: FC<ILibPaginationButton> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    isActive,
    children,
    accentColor,
    readOnly,
    ...rest
}) => {
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
