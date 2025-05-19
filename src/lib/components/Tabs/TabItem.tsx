import type { FC } from "react"
import classNames from "classnames"
import { StyledTabItem } from "./styles"
import type { ILibTabItem } from "./types"

/**
 * TabItem component for rendering the content of a tab with customizable active state and element type.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - TabItem props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {boolean} props.isActive - Whether the tab item is active.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Tab item content.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered TabItem component.
 *
 * @see https://documentation-components-react.vercel.app/components/tabs
 * @example
 * <TabItem isActive={true}>Tab content</TabItem>
 */
export const TabItem: FC<ILibTabItem> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    isActive,
    ...rest
}) => {
    return (
        <StyledTabItem
            data-testid={testid}
            ref={ref}
            as={as}
            className={classNames(className, { Active: isActive })}
            {...rest}
        >
            {children}
        </StyledTabItem>
    )
}
