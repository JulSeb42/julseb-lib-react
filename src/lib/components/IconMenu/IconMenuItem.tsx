import type { FC } from "react"
import { StyledButtonIcon } from "./styles"
import type { ILibIconMenuItem } from "./types"

/**
 * IconMenuItem component for rendering an icon button inside an IconMenu, supporting links, tooltips, loading states, and custom styles.
 *
 * @component
 * @extends HTMLButtonElement & HTMLAnchorElement & ILibButtonIcon
 * @param {Object} props - IconMenuItem props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLButtonElement & HTMLAnchorElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.label - Accessible label for the menu item.
 * @param {number} props.indexPosition - Position index of the item in the menu.
 * @param {boolean} props.isOpen - Whether the menu is open.
 * @param {string|JSX.Element} props.icon - Icon to display in the item.
 * @param {number} [props.iconSize] - Size of the icon.
 * @param {"left" | "up" | "right" | "down"} [props.direction] - Direction in which the menu appears.
 * @param {"plain" | "ghost" | "transparent"} [props.variant="ghost"] - Button variant.
 * @param {string} [props.iconBaseUrl] - Base URL for the icon.
 * @param {() => void} [props.onClick] - Click handler (only if `to` or `href` are not defined).
 * @param {boolean} [props.disabled] - Disables the item (only if `onClick` is defined).
 * @param {string} [props.to] - React Router link target (only if `onClick` and `href` are not defined).
 * @param {string} [props.href] - Anchor link target (only if `onClick` and `to` are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if `to` or `href` are defined).
 * @param {number} [props.size] - Size of the button.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | Object} [props.shadow] - Shadow style for the button.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius] - Border radius for the button.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.color] - Color for the button and icon.
 * @param {boolean} [props.showBackgroundHover] - Show background on hover (only if variant is transparent).
 * @param {boolean} [props.isLoading] - Show loading indicator.
 * @param {1 | 2 | 3 | 4} [props.loaderVariant] - Loader variant (only if isLoading is defined).
 * @param {number} [props.loaderBorderWidth] - Loader border width (only if loaderVariant is 1, 2, or 3).
 * @param {string} [props.tooltip] - Tooltip text.
 * @param {boolean|Object} [props.showTooltip] - Show tooltip or tooltip options (only if tooltip is defined).
 * @param {CSSProperties} [props.containerStyle] - Custom style for the button container (only if tooltip is defined).
 * @returns {JSX.Element} The rendered IconMenuItem component.
 *
 * @see https://documentation-components-react.vercel.app/components/icon-menu
 * @example
 * <IconMenuItem
 *   label="Edit"
 *   icon="edit"
 *   indexPosition={0}
 *   isOpen={true}
 *   onClick={handleEdit}
 *   tooltip="Edit item"
 * />
 */
export const IconMenuItem: FC<ILibIconMenuItem> = ({
    ref,
    indexPosition,
    direction,
    isOpen,
    variant = "ghost",
    style,
    iconBaseUrl,
    ...rest
}) => {
    return (
        <StyledButtonIcon
            ref={ref}
            type="button"
            variant={variant}
            iconBaseUrl={iconBaseUrl}
            $direction={direction}
            containerStyle={{
                ["--button-position" as any]: indexPosition,
                ...style,
            }}
            {...rest}
        />
    )
}
