import type { FC } from "react"
import classNames from "classnames"
import { StyledTabButton } from "./styles"
import type { ILibTabButton } from "./types"

/**
 * TabButton component for rendering a tab button with customizable style, justification, and active state.
 *
 * @component
 * @extends HTMLButtonElement
 * @param {Object} props - TabButton props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement>} [props.ref] - Ref forwarded to the button element.
 * @param {boolean} props.isActive - Whether the tab is active.
 * @param {() => void} props.onClick - Click handler for the tab button.
 * @param {"start" | "stretch"} [props.justify="start"] - Justification of the tab button content.
 * @param {"basic" | "rounded"} [props.variant="basic"] - Visual variant of the tab button.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Tab button content.
 * @param {any} [props.rest] - Additional props passed to the button element.
 * @returns {JSX.Element} The rendered TabButton component.
 *
 * @see https://documentation-components-react.vercel.app/components/tabs
 * @example
 * <TabButton isActive={true} onClick={handleClick}>Tab 1</TabButton>
 */
export const TabButton: FC<ILibTabButton> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    justify = "start",
    variant = "basic",
    isActive,
    onClick,
    ...rest
}) => {
    return (
        <StyledTabButton
            data-testid={testid}
            ref={ref}
            as={as}
            className={classNames(className, { Active: isActive })}
            onClick={onClick}
            $justify={justify}
            $variant={variant}
            {...rest}
        >
            {children}
        </StyledTabButton>
    )
}
