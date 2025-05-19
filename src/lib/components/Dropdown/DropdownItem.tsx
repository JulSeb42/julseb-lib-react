import type { FC } from "react"
import { Link } from "react-router-dom"
import { LibIcon } from "../LibIcon"
import { StyledDropdownItem, IconContainer, TextContent } from "./styles"
import type { ILibDropdownItem } from "./types"

/**
 * DropdownItem component for rendering an item in a Dropdown, supporting links, buttons, icons, and custom styling.
 *
 * @component
 * @param {Object} props - DropdownItem props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement & HTMLAnchorElement>} [props.ref] - Ref forwarded to the root element.
 * @param {() => void} [props.onClick] - Click handler (only if `to` or `href` are not defined).
 * @param {boolean} [props.disabled] - Disables the item (only if `onClick` is defined).
 * @param {string} [props.to] - React Router link target (only if `onClick` and `href` are not defined).
 * @param {string} [props.href] - Anchor link target (only if `onClick` and `to` are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if `to` or `href` are defined).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor="primary"] - Accent color for the item.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="xxs"] - Gap between icon and content.
 * @param {string|JSX.Element} [props.icon] - Icon to display in the item.
 * @param {number} [props.iconSize=16] - Size of the icon (only if icon is defined).
 * @param {string} [props.iconBaseUrl] - Base URL for the icon (only if icon is defined).
 * @param {ReactNode} [props.children] - Content of the dropdown item.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered DropdownItem component.
 *
 * @example
 * <DropdownItem to="/profile" icon="user" iconSize={18}>
 *   Profile
 * </DropdownItem>
 */
export const DropdownItem: FC<ILibDropdownItem> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    onClick,
    to,
    href,
    blank,
    accentColor = "primary",
    children,
    disabled,
    icon,
    iconSize = 16,
    iconBaseUrl,
    gap = "xxs",
    ...rest
}) => {
    return (
        <StyledDropdownItem
            data-testid={testid}
            className={className}
            ref={ref}
            as={as ? as : to ? Link : href ? "a" : "button"}
            onClick={onClick}
            to={to}
            href={href}
            disabled={!to && !href ? disabled : undefined}
            target={blank && "_blank"}
            rel={blank && "noreferrer noopener"}
            $accentColor={accentColor}
            $gap={gap}
            {...rest}
        >
            {icon ? (
                <>
                    <IconContainer
                        data-testid={testid && `${testid}.IconContainer`}
                        className={className && "DropdownItemIconContainer"}
                    >
                        <LibIcon
                            data-testid={
                                testid && `${testid}.IconContainer.Icon`
                            }
                            className={className && "DropdownItemIcon"}
                            icon={icon}
                            size={iconSize}
                            baseUrl={iconBaseUrl}
                        />
                    </IconContainer>

                    <TextContent
                        data-testid={testid && `${testid}.TextContent`}
                        className={className && "DropdownItemTextContent"}
                    >
                        {children}
                    </TextContent>
                </>
            ) : (
                children
            )}
        </StyledDropdownItem>
    )
}
