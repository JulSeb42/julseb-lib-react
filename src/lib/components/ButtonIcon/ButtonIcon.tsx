import { forwardRef } from "react"
import { capitalize } from "@julseb-lib/utils"
import { Tooltip } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ButtonIconFunction } from "./ButtonFunction"
import type { ILibButtonIcon } from "./types"

/**
 * @description Returns a ButtonIcon component
 * @link https://documentation-components-react.vercel.app/components/button-icon
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop onClick?: void => only if `to` or `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` and `href` are not defined
 * @prop href?: string => only if `onClick` and `to` are not defined
 * @prop blank?: boolean => only if `to` or `href` are defined
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 * @prop iconBaseUrl?: string
 * @prop size?: number
 * @prop shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: "xxl" | "xl" | "l" | "m" | "s" | "xs"; hover: "xxl" | "xl" | "l" | "m" | "s" | "xs"; active: "xxl" | "xl" | "l" | "m" | "s" | "xs" }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop variant?: "plain" | "ghost" | "transparent"
 * @prop showBackgroundHover?: boolean => only if variant is set to transparent
 * @prop isLoading?: boolean
 * @prop loaderVariant?: 1 | 2 | 3 | 4 => only if isLoading is defined
 * @prop loaderBorderWidth?: number => only if loaderVariant is set to 1 | 2 | 3
 * @prop tooltip?: string
 * @prop showTooltip?: boolean | { position?: "top" | "bottom" | "left" | "right"; offset?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; backgroundColor?: Any color from the library; textColor?: Any color from the library; hideArrow?: boolean } => only if tooltip is defined
 * @prop containerStyle?: CSSProperties => only if tooltip is defined
 */
export const ButtonIcon = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibButtonIcon
>(
    (
        {
            "data-testid": testid,
            as,
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
        },
        ref
    ) => {
        const props = {
            "data-testid": testid,
            as,
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
)
