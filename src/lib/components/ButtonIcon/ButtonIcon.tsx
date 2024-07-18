/*=============================================== ButtonIcon component ===============================================*/

import { forwardRef } from "react"
import { capitalize } from "ts-utils-julseb"
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
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 * @prop size?: number
 * @prop shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: LibShadows; hover: LibShadows; active: LibShadows }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop tooltip?: string
 * @prop showTooltip?: boolean | { position?: LibTooltipPosition; offset?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" (position from the bottom.) }
 * @prop variant?: "plain" | "transparent" | "ghost"
 * @prop showBackgroundHover?: boolean => only if variant is set to "transparent"
 * @prop isLoading?: boolean
 * @prop loaderVariant?: 1 | 2 | 3 | 4 => only if isLoading is defined
 * @prop loaderBorderWidth?: number => only if isLoading is defined and loaderVariant is set to 1 | 2 | 3
 */

export const ButtonIcon = forwardRef<HTMLButtonElement, ILibButtonIcon>(
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
                >
                    <ButtonIconFunction {...(props as any)} />
                </Tooltip>
            )

        return <ButtonIconFunction {...(props as any)} />
    }
)
