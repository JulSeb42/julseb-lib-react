import type { FC } from "react"
import { capitalize } from "@julseb-lib/utils"
import { Tooltip } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ButtonIconFunction } from "./ButtonFunction"
import type { ILibButtonIcon } from "./types"

/**
 * ButtonIcon component for rendering an icon button with support for tooltips, loading state, and variants.
 *
 * @component
 * @param {Object} props - ButtonIcon props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement & HTMLAnchorElement>} [props.ref] - Ref forwarded to the root element.
 * @param {() => void} [props.onClick] - Click handler (only if `to` or `href` are not defined).
 * @param {boolean} [props.disabled] - Disables the button (only if `onClick` is defined).
 * @param {string} [props.to] - React Router link target (only if `onClick` and `href` are not defined).
 * @param {string} [props.href] - Anchor link target (only if `onClick` and `to` are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if `to` or `href` are defined).
 * @param {string|JSX.Element} props.icon - Icon to display.
 * @param {number} [props.iconSize] - Size of the icon.
 * @param {string} [props.iconBaseUrl] - Base URL for the icon.
 * @param {number} [props.size=32] - Size of the button.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | object} [props.shadow] - Shadow style.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | object} [props.borderRadius="circle"] - Border radius.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.color="primary"] - Button color.
 * @param {"plain" | "ghost" | "transparent"} [props.variant="plain"] - Visual variant.
 * @param {boolean} [props.showBackgroundHover] - Show background on hover (only if variant is transparent).
 * @param {boolean} [props.isLoading] - Show loading indicator.
 * @param {1 | 2 | 3 | 4} [props.loaderVariant] - Loader variant (only if isLoading is true).
 * @param {number} [props.loaderBorderWidth=2] - Loader border width (only if loaderVariant is 1, 2, or 3).
 * @param {string} [props.tooltip] - Tooltip text.
 * @param {boolean|Object} [props.showTooltip] - Show tooltip or tooltip options.
 * @param {CSSProperties} [props.containerStyle] - Style for the tooltip container.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.aria-label] - Accessible label for the button.
 * @returns {JSX.Element} The rendered ButtonIcon component.
 *
 * @example
 * <ButtonIcon icon="star" tooltip="Favorite" />
 * <ButtonIcon icon={<CustomIcon />} isLoading loaderVariant={2} />
 */
export const ButtonIcon: FC<ILibButtonIcon> = ({
    "data-testid": testid,
    as,
    ref,
	role = "button",	
    size = 32,
    icon,
    iconSize = roundIconSize(size),
    shadow,
    borderRadius = "circle",
    tooltip,
    showTooltip,
    "aria-label": ariaLabel = capitalize(
        typeof icon === "string" ? icon : "button icon"
    ),
    to,
    href,
    blank,
    variant = "plain",
    showBackgroundHover,
    isLoading,
    loaderVariant,
    loaderBorderWidth = 2,
    disabled,
    "aria-disabled": ariaDisabled = isLoading || disabled,
    color = "primary",
    className,
    containerStyle,
    ...rest
}) => {
    const props = {
        "data-testid": testid,
        as,
		role,
        className,
        showTooltip,
        to,
        href,
        isLoading,
        disabled,
        "aria-disabled": ariaDisabled,
        "aria-label": ariaLabel,
        blank,
        variant,
        showBackgroundHover,
        borderRadius,
        color,
        shadow,
        size,
        loaderVariant,
        icon,
        iconSize,
        loaderBorderWidth,
        ref,
        ...rest,
    }

    if (tooltip && showTooltip)
        return (
            <Tooltip
                data-testid={testid}
                className={className}
                tooltip={tooltip}
                position={
                    typeof showTooltip === "object" && showTooltip?.position
                        ? showTooltip.position
                        : "top"
                }
                offset={
                    typeof showTooltip === "object" && showTooltip?.offset
                        ? showTooltip.offset
                        : undefined
                }
                hideArrow={
                    typeof showTooltip === "object" && showTooltip.hideArrow
                        ? showTooltip.hideArrow
                        : false
                }
                backgroundColor={
                    typeof showTooltip === "object" &&
                    showTooltip.backgroundColor
                        ? showTooltip.backgroundColor
                        : "black-80"
                }
                textColor={
                    typeof showTooltip === "object" && showTooltip.textColor
                        ? showTooltip.textColor
                        : "white"
                }
                style={containerStyle}
            >
                <ButtonIconFunction {...(props as any)} />
            </Tooltip>
        )

    return <ButtonIconFunction {...(props as any)} />
}
